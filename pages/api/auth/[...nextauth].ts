import NextAuth from 'next-auth';
import type { DefaultJWT } from 'next-auth/jwt';
import type { DefaultSession } from 'next-auth';
import SequelizeAdapter from '@next-auth/sequelize-adapter';
import { Sequelize } from 'sequelize';
import EmailProvider from 'next-auth/providers/email';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { ownerPgPool } from 'server/utils/db';

export interface JWT extends DefaultJWT {
  userId: string;
}

export interface Session extends DefaultSession {
  user: DefaultSession['user'] & {
    id: string;
  };
}

const sequelize = new Sequelize('sqlite::memory:');
const adapter = SequelizeAdapter(sequelize);

// Calling sync() is not recommended in production
sequelize.sync();

export default NextAuth({
  adapter,
  session: {
    strategy: 'jwt',
  },
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    // ...add more providers here
  ],
  theme: {
    logo: '/favicon.svg',
    colorScheme: 'light',
  },
  callbacks: {
    // https://next-auth.js.org/configuration/callbacks#jwt-callback
    jwt: async ({ token, user: userDetails, account }) => {
      // account is undefined when user already singed in
      if (!account) {
        return token;
      }

      const { provider, providerAccountId, ...accountDetails } = account;
      const {
        rows: [user],
      } = await ownerPgPool.query(
        'select * from app_private.link_or_register_user($1, $2, $3, $4, $5)',
        [
          token.userId,
          provider,
          providerAccountId,
          {
            ...userDetails,
            name: provider === 'email' ? providerAccountId : userDetails?.name,
          },
          accountDetails,
        ],
      );
      if (!user?.id) {
        throw new Error('Failed to link_or_register_user');
      }
      return { ...token, userId: user.id };
    },
    // https://next-auth.js.org/configuration/callbacks#session-callback
    session: async ({ session, token, user }) => {
      if (token) {
        return {
          ...session,
          user: { ...user, id: token.userId },
        };
      }
      return session;
    },
  },
});

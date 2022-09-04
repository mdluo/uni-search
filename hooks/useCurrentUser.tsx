import React, { ReactNode, useContext, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { User, useCurrentUserQuery } from 'graphql/generated';

export const UserContext = React.createContext<User>({} as User);

export const UserContextProvider: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const { data: session } = useSession({
    required: false,
    onUnauthenticated: signIn,
  });

  const currentUserQuery = useCurrentUserQuery();

  const currentUser = currentUserQuery.data?.currentUser;

  useEffect(() => {
    if (session && !currentUserQuery.loading && !currentUser) {
      signIn();
    }
  }, [currentUser, currentUserQuery.loading, session]);

  return (
    <UserContext.Provider value={currentUser as User}>
      {children}
    </UserContext.Provider>
  );
};

export default function useCurrentUser() {
  const user = useContext(UserContext);
  return user;
}

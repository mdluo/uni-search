import { graphql } from 'msw';

export const handlers = [
  // Handles a "Login" mutation
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  graphql.mutation('Login', null),
  // Handles a "GetUserInfo" query
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  graphql.query('GetUserInfo', null),
];

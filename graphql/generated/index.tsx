/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
};

export type Account = Node & {
  __typename?: 'Account';
  accountDetails: Scalars['JSON'];
  createdAt: Scalars['Datetime'];
  id: Scalars['UUID'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  updatedAt: Scalars['Datetime'];
  /** Reads a single `User` that is related to this `Account`. */
  user?: Maybe<User>;
  userId: Scalars['UUID'];
};

/** A condition to be used against `Account` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AccountCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `Account` object types. All fields are combined with a logical ‘and.’ */
export type AccountFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<AccountFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<AccountFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<AccountFilter>>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** A connection to a list of `Account` values. */
export type AccountsConnection = {
  __typename?: 'AccountsConnection';
  /** A list of edges which contains the `Account` and cursor to aid in pagination. */
  edges: Array<AccountsEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Account>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Account` edge in the connection. */
export type AccountsEdge = {
  __typename?: 'AccountsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Account` at the end of the edge. */
  node: Account;
};

/** Methods to use when ordering `Account`. */
export enum AccountsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type Bookmark = Node & {
  __typename?: 'Bookmark';
  createdAt: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `University` that is related to this `Bookmark`. */
  university?: Maybe<University>;
  universityId: Scalars['UUID'];
  updatedAt: Scalars['Datetime'];
  /** Reads a single `User` that is related to this `Bookmark`. */
  user?: Maybe<User>;
  userId: Scalars['UUID'];
};

/**
 * A condition to be used against `Bookmark` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type BookmarkCondition = {
  /** Checks for equality with the object’s `universityId` field. */
  universityId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `Bookmark` object types. All fields are combined with a logical ‘and.’ */
export type BookmarkFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<BookmarkFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<BookmarkFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<BookmarkFilter>>;
  /** Filter by the object’s `universityId` field. */
  universityId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `Bookmark` */
export type BookmarkInput = {
  universityId: Scalars['UUID'];
};

/** A connection to a list of `Bookmark` values. */
export type BookmarksConnection = {
  __typename?: 'BookmarksConnection';
  /** A list of edges which contains the `Bookmark` and cursor to aid in pagination. */
  edges: Array<BookmarksEdge>;
  /** A list of `Bookmark` objects. */
  nodes: Array<Bookmark>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Bookmark` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Bookmark` edge in the connection. */
export type BookmarksEdge = {
  __typename?: 'BookmarksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Bookmark` at the end of the edge. */
  node: Bookmark;
};

/** Methods to use when ordering `Bookmark`. */
export enum BookmarksOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UniversityIdAsc = 'UNIVERSITY_ID_ASC',
  UniversityIdDesc = 'UNIVERSITY_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** All input for the create `Bookmark` mutation. */
export type CreateBookmarkInput = {
  /** The `Bookmark` to be created by this mutation. */
  bookmark: BookmarkInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Bookmark` mutation. */
export type CreateBookmarkPayload = {
  __typename?: 'CreateBookmarkPayload';
  /** The `Bookmark` that was created by this mutation. */
  bookmark?: Maybe<Bookmark>;
  /** An edge for our `Bookmark`. May be used by Relay 1. */
  bookmarkEdge?: Maybe<BookmarksEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `University` that is related to this `Bookmark`. */
  university?: Maybe<University>;
  /** Reads a single `User` that is related to this `Bookmark`. */
  user?: Maybe<User>;
};


/** The output of our create `Bookmark` mutation. */
export type CreateBookmarkPayloadBookmarkEdgeArgs = {
  orderBy?: InputMaybe<Array<BookmarksOrderBy>>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']>>;
};

/** All input for the `deleteAccountByNodeId` mutation. */
export type DeleteAccountByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Account` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteAccount` mutation. */
export type DeleteAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Account` mutation. */
export type DeleteAccountPayload = {
  __typename?: 'DeleteAccountPayload';
  /** The `Account` that was deleted by this mutation. */
  account?: Maybe<Account>;
  /** An edge for our `Account`. May be used by Relay 1. */
  accountEdge?: Maybe<AccountsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedAccountNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Account`. */
  user?: Maybe<User>;
};


/** The output of our delete `Account` mutation. */
export type DeleteAccountPayloadAccountEdgeArgs = {
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

/** All input for the `deleteBookmarkByNodeId` mutation. */
export type DeleteBookmarkByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Bookmark` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteBookmark` mutation. */
export type DeleteBookmarkInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  universityId: Scalars['UUID'];
  userId: Scalars['UUID'];
};

/** The output of our delete `Bookmark` mutation. */
export type DeleteBookmarkPayload = {
  __typename?: 'DeleteBookmarkPayload';
  /** The `Bookmark` that was deleted by this mutation. */
  bookmark?: Maybe<Bookmark>;
  /** An edge for our `Bookmark`. May be used by Relay 1. */
  bookmarkEdge?: Maybe<BookmarksEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedBookmarkNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `University` that is related to this `Bookmark`. */
  university?: Maybe<University>;
  /** Reads a single `User` that is related to this `Bookmark`. */
  user?: Maybe<User>;
};


/** The output of our delete `Bookmark` mutation. */
export type DeleteBookmarkPayloadBookmarkEdgeArgs = {
  orderBy?: InputMaybe<Array<BookmarksOrderBy>>;
};

export type ListenPayload = {
  __typename?: 'ListenPayload';
  /** Our root query field type. Allows us to run any query from our subscription payload. */
  query?: Maybe<Query>;
  relatedNode?: Maybe<Node>;
  relatedNodeId?: Maybe<Scalars['ID']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Bookmark`. */
  createBookmark?: Maybe<CreateBookmarkPayload>;
  /** Deletes a single `Account` using a unique key. */
  deleteAccount?: Maybe<DeleteAccountPayload>;
  /** Deletes a single `Account` using its globally unique id. */
  deleteAccountByNodeId?: Maybe<DeleteAccountPayload>;
  /** Deletes a single `Bookmark` using a unique key. */
  deleteBookmark?: Maybe<DeleteBookmarkPayload>;
  /** Deletes a single `Bookmark` using its globally unique id. */
  deleteBookmarkByNodeId?: Maybe<DeleteBookmarkPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUserByNodeId?: Maybe<UpdateUserPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBookmarkArgs = {
  input: CreateBookmarkInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountByNodeIdArgs = {
  input: DeleteAccountByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBookmarkArgs = {
  input: DeleteBookmarkInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBookmarkByNodeIdArgs = {
  input: DeleteBookmarkByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByNodeIdArgs = {
  input: UpdateUserByNodeIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  account?: Maybe<Account>;
  /** Reads a single `Account` using its globally unique `ID`. */
  accountByNodeId?: Maybe<Account>;
  /** Reads and enables pagination through a set of `Account`. */
  accounts?: Maybe<AccountsConnection>;
  bookmark?: Maybe<Bookmark>;
  /** Reads a single `Bookmark` using its globally unique `ID`. */
  bookmarkByNodeId?: Maybe<Bookmark>;
  /** Reads and enables pagination through a set of `Bookmark`. */
  bookmarks?: Maybe<BookmarksConnection>;
  /** The currently logged in user (or null if not logged in). */
  currentUser?: Maybe<User>;
  /** Handy method to get the current user ID for use in RLS policies, etc; in GraphQL, use `currentUser{id}` instead. */
  currentUserId?: Maybe<Scalars['UUID']>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `University`. */
  universities?: Maybe<UniversitiesConnection>;
  university?: Maybe<University>;
  /** Reads a single `University` using its globally unique `ID`. */
  universityByNodeId?: Maybe<University>;
  user?: Maybe<User>;
  /** Reads a single `User` using its globally unique `ID`. */
  userByNodeId?: Maybe<User>;
  userByUsername?: Maybe<User>;
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<UsersConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AccountCondition>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBookmarkArgs = {
  universityId: Scalars['UUID'];
  userId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBookmarkByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBookmarksArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<BookmarkCondition>;
  filter?: InputMaybe<BookmarkFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BookmarksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUniversitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UniversityCondition>;
  filter?: InputMaybe<UniversityFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UniversitiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUniversityArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUniversityByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByUsernameArgs = {
  username: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type Subscription = {
  __typename?: 'Subscription';
  listen: ListenPayload;
};


/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type SubscriptionListenArgs = {
  topic: Scalars['String'];
};

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['UUID']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['UUID']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['UUID']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['UUID']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['UUID']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['UUID']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['UUID']>>;
};

/** A connection to a list of `University` values. */
export type UniversitiesConnection = {
  __typename?: 'UniversitiesConnection';
  /** A list of edges which contains the `University` and cursor to aid in pagination. */
  edges: Array<UniversitiesEdge>;
  /** A list of `University` objects. */
  nodes: Array<University>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `University` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `University` edge in the connection. */
export type UniversitiesEdge = {
  __typename?: 'UniversitiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `University` at the end of the edge. */
  node: University;
};

/** Methods to use when ordering `University`. */
export enum UniversitiesOrderBy {
  CountryIso2Asc = 'COUNTRY_ISO2_ASC',
  CountryIso2Desc = 'COUNTRY_ISO2_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type University = Node & {
  __typename?: 'University';
  /** Reads and enables pagination through a set of `Bookmark`. */
  bookmarks: BookmarksConnection;
  countryIso2: Scalars['String'];
  createdAt: Scalars['Datetime'];
  details: Scalars['JSON'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  updatedAt: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `User`. */
  usersByBookmarkUniversityIdAndUserId: UniversityUsersByBookmarkUniversityIdAndUserIdManyToManyConnection;
};


export type UniversityBookmarksArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<BookmarkCondition>;
  filter?: InputMaybe<BookmarkFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BookmarksOrderBy>>;
};


export type UniversityUsersByBookmarkUniversityIdAndUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/**
 * A condition to be used against `University` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type UniversityCondition = {
  /** Checks for equality with the object’s `countryIso2` field. */
  countryIso2?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `University` object types. All fields are combined with a logical ‘and.’ */
export type UniversityFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UniversityFilter>>;
  /** Filter by the object’s `countryIso2` field. */
  countryIso2?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UniversityFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UniversityFilter>>;
};

/** A connection to a list of `User` values, with data from `Bookmark`. */
export type UniversityUsersByBookmarkUniversityIdAndUserIdManyToManyConnection = {
  __typename?: 'UniversityUsersByBookmarkUniversityIdAndUserIdManyToManyConnection';
  /** A list of edges which contains the `User`, info from the `Bookmark`, and the cursor to aid in pagination. */
  edges: Array<UniversityUsersByBookmarkUniversityIdAndUserIdManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection, with data from `Bookmark`. */
export type UniversityUsersByBookmarkUniversityIdAndUserIdManyToManyEdge = {
  __typename?: 'UniversityUsersByBookmarkUniversityIdAndUserIdManyToManyEdge';
  createdAt: Scalars['Datetime'];
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node: User;
  updatedAt: Scalars['Datetime'];
};

/** All input for the `updateUserByNodeId` mutation. */
export type UpdateUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A user who can log in to the application. */
export type User = Node & {
  __typename?: 'User';
  /** Reads and enables pagination through a set of `Account`. */
  accounts: AccountsConnection;
  /** Reads and enables pagination through a set of `Bookmark`. */
  bookmarks: BookmarksConnection;
  createdAt: Scalars['Datetime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `University`. */
  universitiesByBookmarkUserIdAndUniversityId: UserUniversitiesByBookmarkUserIdAndUniversityIdManyToManyConnection;
  updatedAt: Scalars['Datetime'];
  /** Unique name. */
  username?: Maybe<Scalars['String']>;
};


/** A user who can log in to the application. */
export type UserAccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AccountCondition>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


/** A user who can log in to the application. */
export type UserBookmarksArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<BookmarkCondition>;
  filter?: InputMaybe<BookmarkFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BookmarksOrderBy>>;
};


/** A user who can log in to the application. */
export type UserUniversitiesByBookmarkUserIdAndUniversityIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UniversityCondition>;
  filter?: InputMaybe<UniversityFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UniversitiesOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `username` field. */
  username?: InputMaybe<StringFilter>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** Unique name. */
  username?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `University` values, with data from `Bookmark`. */
export type UserUniversitiesByBookmarkUserIdAndUniversityIdManyToManyConnection = {
  __typename?: 'UserUniversitiesByBookmarkUserIdAndUniversityIdManyToManyConnection';
  /** A list of edges which contains the `University`, info from the `Bookmark`, and the cursor to aid in pagination. */
  edges: Array<UserUniversitiesByBookmarkUserIdAndUniversityIdManyToManyEdge>;
  /** A list of `University` objects. */
  nodes: Array<University>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `University` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `University` edge in the connection, with data from `Bookmark`. */
export type UserUniversitiesByBookmarkUserIdAndUniversityIdManyToManyEdge = {
  __typename?: 'UserUniversitiesByBookmarkUserIdAndUniversityIdManyToManyEdge';
  createdAt: Scalars['Datetime'];
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `University` at the end of the edge. */
  node: University;
  updatedAt: Scalars['Datetime'];
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC'
}

export type CreateBookmarkMutationVariables = Exact<{
  universityId: Scalars['UUID'];
}>;


export type CreateBookmarkMutation = { __typename?: 'Mutation', createBookmark?: { __typename?: 'CreateBookmarkPayload', clientMutationId?: string | null } | null };

export type DeleteBookmarkMutationVariables = Exact<{
  nodeId: Scalars['ID'];
}>;


export type DeleteBookmarkMutation = { __typename?: 'Mutation', deleteBookmarkByNodeId?: { __typename?: 'DeleteBookmarkPayload', clientMutationId?: string | null } | null };

export type UniversityFragmentFragment = { __typename?: 'University', id: any, name: string, details: any, createdAt: any, bookmarks: { __typename?: 'BookmarksConnection', nodes: Array<{ __typename?: 'Bookmark', nodeId: string }> } };

export type UniversitiesQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
  countryIso2?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<UniversitiesOrderBy> | UniversitiesOrderBy>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['Cursor']>;
}>;


export type UniversitiesQuery = { __typename?: 'Query', universities?: { __typename?: 'UniversitiesConnection', totalCount: number, edges: Array<{ __typename?: 'UniversitiesEdge', node: { __typename?: 'University', id: any, name: string, details: any, createdAt: any, bookmarks: { __typename?: 'BookmarksConnection', nodes: Array<{ __typename?: 'Bookmark', nodeId: string }> } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: any | null } } | null };

export type BookmarkedUniversitiesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['Cursor']>;
}>;


export type BookmarkedUniversitiesQuery = { __typename?: 'Query', bookmarks?: { __typename?: 'BookmarksConnection', totalCount: number, edges: Array<{ __typename?: 'BookmarksEdge', node: { __typename?: 'Bookmark', nodeId: string, university?: { __typename?: 'University', id: any, name: string, details: any, createdAt: any, bookmarks: { __typename?: 'BookmarksConnection', nodes: Array<{ __typename?: 'Bookmark', nodeId: string }> } } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: any | null } } | null };

export type UserFragmentFragment = { __typename?: 'User', id: any, name?: string | null, image?: string | null, username?: string | null, description?: string | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'User', id: any, name?: string | null, image?: string | null, username?: string | null, description?: string | null } | null };

export type UserQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: any, name?: string | null, image?: string | null, username?: string | null, description?: string | null } | null };

export const UniversityFragmentFragmentDoc = gql`
    fragment UniversityFragment on University {
  id
  name
  details
  createdAt
  bookmarks {
    nodes {
      nodeId
    }
  }
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
  image
  username
  description
}
    `;
export const CreateBookmarkDocument = gql`
    mutation CreateBookmark($universityId: UUID!) {
  createBookmark(input: {bookmark: {universityId: $universityId}}) {
    clientMutationId
  }
}
    `;
export type CreateBookmarkMutationFn = Apollo.MutationFunction<CreateBookmarkMutation, CreateBookmarkMutationVariables>;

/**
 * __useCreateBookmarkMutation__
 *
 * To run a mutation, you first call `useCreateBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookmarkMutation, { data, loading, error }] = useCreateBookmarkMutation({
 *   variables: {
 *      universityId: // value for 'universityId'
 *   },
 * });
 */
export function useCreateBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookmarkMutation, CreateBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookmarkMutation, CreateBookmarkMutationVariables>(CreateBookmarkDocument, options);
      }
export type CreateBookmarkMutationHookResult = ReturnType<typeof useCreateBookmarkMutation>;
export type CreateBookmarkMutationResult = Apollo.MutationResult<CreateBookmarkMutation>;
export type CreateBookmarkMutationOptions = Apollo.BaseMutationOptions<CreateBookmarkMutation, CreateBookmarkMutationVariables>;
export const DeleteBookmarkDocument = gql`
    mutation DeleteBookmark($nodeId: ID!) {
  deleteBookmarkByNodeId(input: {nodeId: $nodeId}) {
    clientMutationId
  }
}
    `;
export type DeleteBookmarkMutationFn = Apollo.MutationFunction<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>;

/**
 * __useDeleteBookmarkMutation__
 *
 * To run a mutation, you first call `useDeleteBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookmarkMutation, { data, loading, error }] = useDeleteBookmarkMutation({
 *   variables: {
 *      nodeId: // value for 'nodeId'
 *   },
 * });
 */
export function useDeleteBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>(DeleteBookmarkDocument, options);
      }
export type DeleteBookmarkMutationHookResult = ReturnType<typeof useDeleteBookmarkMutation>;
export type DeleteBookmarkMutationResult = Apollo.MutationResult<DeleteBookmarkMutation>;
export type DeleteBookmarkMutationOptions = Apollo.BaseMutationOptions<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>;
export const UniversitiesDocument = gql`
    query Universities($search: String, $countryIso2: String, $orderBy: [UniversitiesOrderBy!], $first: Int = 15, $after: Cursor) {
  universities(
    filter: {name: {includesInsensitive: $search}, countryIso2: {equalTo: $countryIso2}}
    orderBy: $orderBy
    first: $first
    after: $after
  ) {
    edges {
      node {
        ...UniversityFragment
      }
    }
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    ${UniversityFragmentFragmentDoc}`;

/**
 * __useUniversitiesQuery__
 *
 * To run a query within a React component, call `useUniversitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUniversitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUniversitiesQuery({
 *   variables: {
 *      search: // value for 'search'
 *      countryIso2: // value for 'countryIso2'
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useUniversitiesQuery(baseOptions?: Apollo.QueryHookOptions<UniversitiesQuery, UniversitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UniversitiesQuery, UniversitiesQueryVariables>(UniversitiesDocument, options);
      }
export function useUniversitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UniversitiesQuery, UniversitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UniversitiesQuery, UniversitiesQueryVariables>(UniversitiesDocument, options);
        }
export type UniversitiesQueryHookResult = ReturnType<typeof useUniversitiesQuery>;
export type UniversitiesLazyQueryHookResult = ReturnType<typeof useUniversitiesLazyQuery>;
export type UniversitiesQueryResult = Apollo.QueryResult<UniversitiesQuery, UniversitiesQueryVariables>;
export const BookmarkedUniversitiesDocument = gql`
    query BookmarkedUniversities($first: Int = 15, $after: Cursor) {
  bookmarks(first: $first, after: $after) {
    edges {
      node {
        nodeId
        university {
          ...UniversityFragment
        }
      }
    }
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    ${UniversityFragmentFragmentDoc}`;

/**
 * __useBookmarkedUniversitiesQuery__
 *
 * To run a query within a React component, call `useBookmarkedUniversitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookmarkedUniversitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookmarkedUniversitiesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useBookmarkedUniversitiesQuery(baseOptions?: Apollo.QueryHookOptions<BookmarkedUniversitiesQuery, BookmarkedUniversitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookmarkedUniversitiesQuery, BookmarkedUniversitiesQueryVariables>(BookmarkedUniversitiesDocument, options);
      }
export function useBookmarkedUniversitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookmarkedUniversitiesQuery, BookmarkedUniversitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookmarkedUniversitiesQuery, BookmarkedUniversitiesQueryVariables>(BookmarkedUniversitiesDocument, options);
        }
export type BookmarkedUniversitiesQueryHookResult = ReturnType<typeof useBookmarkedUniversitiesQuery>;
export type BookmarkedUniversitiesLazyQueryHookResult = ReturnType<typeof useBookmarkedUniversitiesLazyQuery>;
export type BookmarkedUniversitiesQueryResult = Apollo.QueryResult<BookmarkedUniversitiesQuery, BookmarkedUniversitiesQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const UserDocument = gql`
    query User($id: UUID!) {
  user(id: $id) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
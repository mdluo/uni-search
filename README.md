# Uni Search

Preview: https://uni-search.mdluo.com.

This is a full-stack web app developed with [PostGraphile](https://www.graphile.org/postgraphile/) and [Next.js](https://nextjs.org/),
featuring [NextAuth](https://next-auth.js.org/) for email and 3rd party account login,
[Apollo Client](https://www.apollographql.com/docs/react/) as the React GraphQL client,
and [BlueprintJS](https://blueprintjs.com/docs/) and [Tailwind CSS](https://tailwindcss.com/docs) as the UI framework.

This app is inspired by [Graphile Starter](https://github.com/graphile/starter), please refer to it for more features and integration examples.

### Features

- Realtime fuzzy university name search with country filter.
- University icons for easier identification.
- Results infinite scrolling.
- Log in (and sign up) with Email, GitHub and Google accounts.
- Cookie-based JWT tokens for user identification.
- Cursor-based pagination ([Relay style](https://www.apollographql.com/docs/react/pagination/cursor-based/#relay-style-cursor-pagination)).
- Automatic hook and types generation with [graphql-codegen](https://www.the-guild.dev/graphql/codegen/).

### Directory structure

- `__tests__`: Jest unit tests files
- `components`
  - `avatar`: The university's icon, load with [Google favicons API](https://dev.to/derlin/get-favicons-from-any-website-using-a-hidden-google-api-3p1e) and [avatar.tobi.sh](https://github.com/tobiaslins/avatar) as the fallback image.
  - `country-select`: A dropdown menu to select a country, with a quick text filter. And the country data comes from https://github.com/dr5hn/countries-states-cities-database.
  - `nav`: Navigation header with a logo, a link to the bookmarks page and a dropdown menu with user's avatar, name and a link for the user to sign out.
  - `search`: The main search input, with a clear button and the `country-select` component on the right hand side.
  - `sort`: A dropdown button menu to allow user to sort the results by name or country and A-Z or Z-A respectively.
  - `university`: The university item in the search and bookmark list, with the `avatar`, the university name, the state/province and country (and emoji), the link to the website, and a bookmark button.
- `data`: The source files of the university data and country data.
- `graphql`
  - `generated`: Hooks and types generated with [graphql-codegen](https://www.the-guild.dev/graphql/codegen/).
  - `*.graphql`: Client-side graphql schemas, add new Queries, Mutations here.
- `hooks`: Reusable React hooks.
- `libs`: Reusable JS functions and utilities.
- `migrations`: SQL files containing database table, function and trigger schemas to be used by [graphile-migrate](https://github.com/graphile/migrate).
- `mocks`: Mock API handlers to be used by [MSW](https://mswjs.io/).
- `pages`
  - `api/auth`: User authentication related APIs, with [NextAuth](https://next-auth.js.org/) configuration and callbacks.
  - `_app.tsx`: A [Next.js custom App](https://nextjs.org/docs/advanced-features/custom-app) component to wrap the web pages with NextAuth Provider, ApolloClient Provider, etc.
  - `bookmarks.tsx`: The Bookmarks page to load and show user's bookmarked universities, user sign-in required.
  - `index.tsx`: The home page, to allow visitors to search, filer and sort universities, guest mode available.
- `public`: Static files.
- `scripts`: Node.js (ts-node) scripts.
- `servers`: The entry point of the whole web app, comes with an Express.js server to bootstrap both Next.js app and [PostGraphile-as-a-library](https://www.graphile.org/postgraphile/usage-library/).
- `styles`: Global CSS.

### Local development

Requirements:

- [GitHub OAuth App](https://www.apollographql.com/docs/react/pagination/cursor-based/#relay-style-cursor-pagination) and/or [Google OAuth 2.0 Client ID](https://support.google.com/cloud/answer/6158849?hl=en)
- SMTP service, [Gmail](https://support.google.com/a/answer/176600?hl=en) or [SendGrid](https://sendgrid.com/).
- Docker machine and docker-compose (for running PostgreSQL, optional if you installed PostgreSQL natively).
- Node.js (recommend >= 16) and npm (recommend >= 8) or yarn.

##### Step 1. Start PostgreSQL with docker-compose

```sh
docker-compose up -d
```

##### Step 2. Install dependences

```sh
npm ci
```

##### Step 3. Set up `.env` file

```sh
cp .env.example .env
```

And edit the `.env` file to ensure all the missing variables are set. Tip: you can use `openssl rand -base64 30 | tr '+/' '-_'` to generate a random string for passwords and secrets.

##### Step 4. Set up database

```sh
npm run db:init
npm run db:migrate
```

##### Step 5. Database seed

Open a new terminal tab and run

```sh
npm run db:seed
```

##### Step 6. Start the local development server

```sh
npm run dev
```

And got the http://localhost:3000

##### Step 6. Open another new terminal tab and run

```sh
npm run codegen
```

This is to watch any schema changes on the server side, as well as graphql code changes in `graphql/*.graphql` files and generate new types and hooks into `graphql/generated/index.tsx`.

### Improvement items

- [ ] Add more actual unit test cases to improve the coverage rate.
- [ ] Create [custom NextAuth adapter](https://next-auth.js.org/tutorials/creating-a-database-adapter) to use Postgres database to store the email verification token, and get rid of the in-memory SQLite adapter.
- [ ] Add [Virtuoso](https://virtuoso.dev/) to the result list to make it virtualised.
- [ ] Add code-splitting to some of the larger components, and apply tree-shaking to the BlueprintJS components.
- [ ] Fix the `loading` state returned by ApolloClient hooks not working issue.
- [ ] Add GiST index to the universities table to optimise the text search speed: https://alexklibisz.com/2022/02/18/optimizing-postgres-trigram-search.html, as well as sort the result by match ranking.
- [ ] Add an extra tsvector column the universities table for full text search to work together with the current fuzzy search.
- [ ] Unify the country data on `country-select` and the country field from the universities data source.
- [ ] Set up monorepo with [Turborepo](https://turborepo.org/).
- [ ] Add CI/CD pipelines to build and deploy the app automatically.

# Nest Prisma Monorepo

This template is what I came up with after learning about monorepos and playing with them for a few days, contributions are very welcome.

## About

- [Nest.js](https://nestjs.com/)
- [Prisma](https://prisma.io/)
- ESLint Ready (`yarn lint`)
- Prettier Ready
- CI for GitHub Actions
- Yarn (berry) version `3.1.0`
- A default API workspace\*

\*The `api` app is a clone of [this other awesome template](https://github.com/fivethree-team/nestjs-prisma-starter), so it already has JWT authentication, GraphQL (code first), REST API with Swagger covered.

## Structure

This template follows [Nest.js's convention](https://docs.nestjs.com/cli/monorepo) of monorepo, so there are Apps and then there are Libraries.

```
📦 nest-prisma-monorepo
 ┣ 📂 apps
 ┃ ┣ 📂 api
 ┃ ┣ 📂 web
 ┃ ┗ 📂 Your next app (could be anything, a Next.js SPA, static HTML, express app, etc.)
 ┣ 📂 libs
 ┃ ┣ 📂 common
 ┃ ┣ 📂 core
 ┃ ┣ 📂 prisma
 ┃ ┗ 📂 Your next library
 ┣ 📜.eslintrc.js
 ┣ 📜.prettierrc
 ┣ 📜.yarnrc.yml
```

## How to import from other apps/libraries

To import an package (app or library) into another one:

1. Add the package as a dependency like so:

```json
{
  "dependencies": {
    "@acme/common": "workspace:*"
  }
}
```

Note that the `@acme/common` name, comes from the other package's `package.json` file.

```json
{
  "name": "@acme/common"
}
```

2. Use it in your code like this:

```ts
import { MyCommonModule } from '@acme/common';
```

> Note: After cloning, replace all `acme`s with your organization/project name.

## Notes about Prisma

Instead of importing your Prisma modules from `@prisma/client`, now you import them from `@acme/prisma`.

For instance:

```ts
import { PrismaClient } from '@acme/prisma';

const prisma = new PrismaClient();
```

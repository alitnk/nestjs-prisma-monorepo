# Nest Prisma Monorepo

This template is what I came up with after I learned about monorepos and played with them for a while, hope you find it helpful to you!

## About

- [Nest.js](https://nestjs.com/) + JWT + Code-first GraphQL + REST + Swagger*
- [Prisma](https://prisma.io/) + utilities
- Common package 
- Core package + NestJS utilites
- ESLint Ready (`yarn lint`)
- Prettier Ready
- CI for GitHub Actions
- Yarn (berry) version `3.1.0`

\*The `api` app is a clone of [this other awesome template](https://github.com/fivethree-team/nestjs-prisma-starter)

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

```json apps/api/package.json
{
  "dependencies": {
    "@acme/common": "workspace:*"
  }
}
```

Note that the `@acme/common` name, comes from `libs/common/package.json`'s name key:

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

This way you can defined your schema in a "library" and then import the prisma client in different apps, accessing the same database.

For instance:

```ts
import { PrismaClient } from '@acme/prisma';

const prisma = new PrismaClient();
```

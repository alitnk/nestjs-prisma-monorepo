# Nest Prisma Monorepo

This template is what I came up with after I learned about monorepos and played with them for a while, hope you find it helpful!

## About

- [Nest.js](https://nestjs.com/) + JWT + GraphQL (code-first) + REST + Swagger*
- [Prisma](https://prisma.io/) + utilities
- Front-end app **
- Full Typescript support
- Common package 
- Core package + NestJS utilites
- ESLint Ready (`yarn lint`)
- Prettier Ready
- CI for GitHub Actions
- Yarn (berry) version `3.1.0` (PnP disabled since it's not supported by NestJs and Prisma yet)

\*The `api` app is a clone of [this other awesome template](https://github.com/fivethree-team/nestjs-prisma-starter)

\*\* The front-end app is just a static HTML file, since people might use different frameworks with NestJS, so feel free to add a NextJS / NuxtJS / Angular / Svelte / etc. as your front-end

## Structure

This template follows [Nest.js's convention](https://docs.nestjs.com/cli/monorepo) of monorepo, so there are Apps and then there are Libraries.

```
📦 nest-prisma-monorepo
 ┣ 📂 apps
 ┃ ┣ 📂 api
 ┃ ┣ 📂 web
 ┃ ┗ 📂 etc.
 ┣ 📂 libs
 ┃ ┣ 📂 common 
 ┃ ┣ 📂 core 
 ┃ ┣ 📂 prisma
 ┃ ┗ 📂 etc.
 ┣ 📜.eslintrc.js
 ┣ 📜.prettierrc
 ┣ 📜.yarnrc.yml
```
- core and common are imported from your back-end apps.
- prisma is used by your back-end apps that need database.
- common is shared between all of your apps.

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

## Note about Prisma

Instead of importing your Prisma modules from `@prisma/client`, now you import them from `@acme/prisma`.

This way you can defined your schema in a "library" and then import the prisma client in different apps, accessing the same database.

For instance:

```ts
import { PrismaClient } from '@acme/prisma';

const prisma = new PrismaClient();
```

## Note about .env files

After you clone the template, you gotta create two environment files, one in `apps/api` and one in `lib/prisma`. You could just copy `.env.example` and rename it to `.env` and fill it with your own values.

## Alternatives

- https://nx.dev/ (Currently, I just use NX. I didn't know about NX while making this template)

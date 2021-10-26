# Nest Prisma Monorepo
This template is what I came up with after learning about monorepos, yarn workspaces and playing with them for a few days, thought someone might find it useful.

## About

The `api` app is a clone of [this other awesome template](https://github.com/fivethree-team/nestjs-prisma-starter), so it already has JWT authentication, GraphQL (code first), REST API with Swagger covered.
Prettier and ESLint are also configured, you can lint the whole repository by running `yarn lint` in the root directory.

Yarn version: `3.1.0`

- [Nest.js](https://nestjs.com/)
- [Prisma](https://prisma.io/)

## Structure

This template follows [Nest.js's convention](https://docs.nestjs.com/cli/monorepo) of monorepo, so there are Apps and then there are Libraries.

```
📦nest-prisma-monorepo
 ┣ 📂apps
 ┃ ┣ 📂api
 ┃ ┣ 📂landing
 ┃ ┣ 📂web
 ┃ ┗ 📂someapp
 ┣ 📂libs
 ┃ ┣ 📂common
 ┃ ┣ 📂core
 ┃ ┣ 📂prisma
 ┃ ┗ 📂somelib
 ┣ 📜.nest-cli.json
 ┣ 📜.eslintrc.js
 ┣ 📜.prettierrc
 ┣ 📜.yarnrc.yml
```

## How to import from other apps/libraries

To import a app/lib into another one:
1. Add the app/lib as a dependency like so:
```json
{
  "dependencies": {
    "@acme/common": "workspace:*",
  }
}

```

2. Use it in your code like this:
```ts 
import { MyCommonModule } from '@acme/common';
```

> After cloning, replace all `acme`s with your organization/project name.

## Note about Prisma

Instead of importing your Prisma related stuff from `@prisma/client`, now you import them from `@acme/prisma`.

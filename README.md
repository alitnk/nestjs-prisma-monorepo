# Nest Prisma Monorepo
This template is what I came up with after learning about monorepos and playing with them for a few days, contributions are very welcome.

## About

- [Nest.js](https://nestjs.com/)
- [Prisma](https://prisma.io/)

The `api` app is a clone of [this other awesome template](https://github.com/fivethree-team/nestjs-prisma-starter), so it already has JWT authentication, GraphQL (code first), REST API with Swagger covered.
Prettier and ESLint are also configured, you can lint the whole repository by running `yarn lint` in the root directory.
Note that this package does not use lerna and and only uses `yarn`'s workspaces for managing the monorepo.
Yarn version: `3.1.0`
You're free to use any frontend framework like Next.js as an app. 

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

> Note: After cloning, replace all `acme`s with your organization/project name.

## Notes about Prisma

So instead of importing your Prisma related stuff from `@prisma/client`, now you import them from `@acme/prisma`.

### Why is Prisma its own library? (and not in @acme/core)

I thought it kind of goes well with that since it's a first-class library. So we can use it from different apps and access the same database. If you think it's a bad design, please let me know what you think about it.

Also, I had a `Order` type in my schema, which resulted in my prisma library exporting an `Order` type, which colludes with `@acme/core`'s `Order`. But you can always change it since this is just a template.

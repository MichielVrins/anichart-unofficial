# AniChart-Unofficial

AniChart-Unofficial is a seasonal anime browser built with Next.js and the public
[AniList GraphQL API](https://docs.anilist.co/). It ranks a season by
popularity and shows episode counts, airing status, studios, ratings, and live
countdowns for upcoming episodes—including multi-episode premieres.

## Features

- Browse anime by year and season
- See upcoming episode countdowns that update in the browser
- Detect closely scheduled multi-episode premieres
- Switch between light, dark, and system themes
- Generate fully typed GraphQL operations from the AniList schema

## Tech stack

The project uses a trimmed-down version of the T3 Stack, retaining the parts
that suit this app without the full T3 feature set.

- Next.js 16 with React 19
- TypeScript
- Tailwind CSS and Radix UI
- GraphQL Request and GraphQL Code Generator
- `@t3-oss/env-nextjs` with Zod for environment validation

## Getting started

Requirements:

- Node.js 20.9 or newer
- pnpm 11.10.0

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

The app does not currently require environment variables. If variables are
added later, document them in `.env.example` and validate them in `src/env.js`.

## Scripts

| Command             | Purpose                                 |
| ------------------- | --------------------------------------- |
| `pnpm dev`          | Start the development server            |
| `pnpm build`        | Create a production build               |
| `pnpm start`        | Run the production server               |
| `pnpm lint`         | Run ESLint                              |
| `pnpm typecheck`    | Check TypeScript types                  |
| `pnpm format`       | Format the repository with Prettier     |
| `pnpm format:check` | Check formatting without changing files |
| `pnpm codegen`      | Regenerate GraphQL types and operations |

## GraphQL code generation

GraphQL operations live in `src/graphql/seasonal.graphql`. After changing an
operation or fragment, regenerate `src/generated/graphql.ts`:

```bash
pnpm codegen
```

The generated file is committed so a fresh checkout can type-check and build
without contacting the AniList schema endpoint.

## Data and attribution

Anime metadata and images come from AniList. This project is not affiliated
with or endorsed by AniList. Please follow the
[AniList API terms of use](https://anilist.gitbook.io/anilist-apiv2-docs/overview/rate-limiting)
when deploying or extending the application.

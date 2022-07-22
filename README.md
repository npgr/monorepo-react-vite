# Stack

- pnpm monorepo
- React 18
- typescript
- vite (react-ts template)

Conventional commits

## Install dependencies first time

pnpm i

## build ui-lib

pnpm build:ui
## start application

pnpm start:app

## Create app with vite

pnpm create vite

## add workspace package to app

pnpm add ui-lib --filter vite-react --workspace

pnpm run --parallel -r build (run on all repos)

pnpm add nx -D -w 

npx nx build shared-ui
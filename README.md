[![Tests](https://github.com/npgr/monorepo-react-vite/actions/workflows/tests.yml/badge.svg)](https://github.com/npgr/monorepo-react-vite/actions/workflows/tests.yml)

[![Netlify Status](https://api.netlify.com/api/v1/badges/1b50b6e4-7a4e-4cd9-9751-317745c38672/deploy-status)](https://app.netlify.com/sites/sb-ui/deploys)

## Stack

[Storybook UI lib in Netlify](https://sb-ui.netlify.app/)

- pnpm (workspace - monorepo)
- React 18
- Typescript
- Vite
- Vitest
- Storybook
- MSW
- Cypress
- @toptal/picasso (ui lib)
- tailwind

https://github.com/vitest-dev/vitest/blob/main/examples/react-storybook/

Conventional commits

### Install dependencies first time:

```bash
pnpm config set auto-install-peers true
```

```bash
pnpm i
```

### Build ui-lib:

```bash
pnpm build:ui
```

### Start application:

```bash
pnpm start:app
```

### Run tests in ui-lib:

```bash
pnpm test:ui
```

### Run storybook in ui-lib:

```bash
pnpm sb:ui
```

### Create app with vite:

```bash
pnpm create vite
```

### Some util commands (ommit Nx):

pnpm add ui-lib --filter vite-react --workspace

pnpm run --parallel -r build (run on all repos)

pnpm add nx -D -w

npx nx build shared-ui

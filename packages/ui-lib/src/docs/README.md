## Stack

- pnpm (workspace - monorepo)
- React 18
- typescript
- vite
- storybook
- @toptal/picasso (ui lib)

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

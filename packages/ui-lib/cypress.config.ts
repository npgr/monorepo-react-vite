import { defineConfig } from 'cypress';

export default defineConfig({
  video: false,
  projectId: '6zegkn',
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

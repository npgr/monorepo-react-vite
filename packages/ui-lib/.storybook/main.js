module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook_vitest_addon',
    '@storybook/addon-postcss',
    '@storybook/node-logger',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
  // async viteFinal(config) {
  //   config.optimizeDeps = {
  //     ...(config.optimizeDeps || {}),
  //     include: [...(config?.optimizeDeps?.include || []), 'msw-storybook-addon'],
  //   };
  //   return config;
  // },
};

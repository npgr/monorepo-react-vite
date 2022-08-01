import { globaldecorators } from './decorators';
import { mswDecorator, initialize } from 'msw-storybook-addon';
// TODO: check if this is necessary
// import { initializeMSW } from './msw-initialize';

initialize();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    //expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [mswDecorator, ...globaldecorators];

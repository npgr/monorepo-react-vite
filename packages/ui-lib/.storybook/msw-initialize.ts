import { initialize, SetupApi } from 'msw-storybook-addon';

// Initialize MSW
declare global {
  interface Window {
    msw: {
      worker: SetupApi;
    };
  }
}

export const initializeMSW = () => {
  const worker = initialize();

  window.msw = {
    worker,
  };
};

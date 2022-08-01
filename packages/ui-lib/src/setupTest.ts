import '@testing-library/jest-dom';
// import { setGlobalConfig } from '@storybook/testing-react';
//import { getWorker } from 'msw-storybook-addon'
// import * as globalStorybookConfig from '../.storybook/preview';
import { server } from './mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

// setGlobalConfig(globalStorybookConfig);

// TODO: Check if necessary
// Ensure MSW connections are closed
///ts-expect-error https://github.com/mswjs/msw-storybook-addon/issues/65
// afterAll(() => getWorker().close())

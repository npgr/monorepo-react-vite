import '@testing-library/jest-dom/extend-expect';
import { setGlobalConfig } from '@storybook/testing-react';
//import { getWorker } from 'msw-storybook-addon'
import * as globalStorybookConfig from '../.storybook/preview';

setGlobalConfig(globalStorybookConfig);

// Ensure MSW connections are closed
///ts-expect-error https://github.com/mswjs/msw-storybook-addon/issues/65
// afterAll(() => getWorker().close())

// ------------------------------------------------------
// import { server } from './mocks/server'

// beforeAll(() => {
//   // Enable the mocking in tests.
//   server.listen()
// })

// afterEach(() => {
//   // Reset any runtime handlers tests may use.
//   server.resetHandlers()
// })

// afterAll(() => {
//   // Clean up once the tests are done.
//   server.close()
// })

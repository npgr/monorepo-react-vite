import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userHandlers } from '../mocks/responses/users';
import { DataFetch } from './DataFetch';

export default {
  title: 'UI/DataFetch - MSW POC',
  component: DataFetch,
  parameters: {
    // layout: 'fullscreen',
  },
  argTypes: {},
} as ComponentMeta<typeof DataFetch>;

const Template: ComponentStory<typeof DataFetch> = (args) => <DataFetch />;

export const BasicDataFetch = Template.bind({});

BasicDataFetch.parameters = {
  // msw: { handlers: [rest.get('/data', (req, res, ctx) => res(ctx.json(['some', 'data'])))] },
  // jest: ['ExampleContainer.test'],
  msw: {
    handlers: userHandlers,
  },
};

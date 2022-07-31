import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { within, userEvent } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';
import { Sidebar } from './Sidebar';
// import results from '../unit-tests/unit-test-results.json';

export default {
  title: 'UI/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    // vitest: {
    //   testFile: 'Button.test.tsx',
    //   testResults: results,
    // },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar />;

export const Basic = Template.bind({});
Basic.args = {
  width: '20',
};

// Names.argTypes = {
//   children: {
//     control: 'inline-radio',
//     options: ['Name 1', 'Name 2', 'Name 3'],
//   },
// };

// Basic.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const Button = await canvas.getByRole('button', { name: /Basic/i });
//   // @ts-expect-error - Error toBeInTheDocument on build, but not in test or storybook
//   await expect(Button).toBeInTheDocument();
// };

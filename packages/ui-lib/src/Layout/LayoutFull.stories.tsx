import { ComponentStory, ComponentMeta } from '@storybook/react';
import LayoutFull from './LayoutFull';

export default {
  title: 'UI/Layout Full',
  component: LayoutFull,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof LayoutFull>;

const Template: ComponentStory<typeof LayoutFull> = (args) => <LayoutFull />;

export const Layout = Template.bind({});

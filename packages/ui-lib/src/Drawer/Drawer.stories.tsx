import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Drawer } from './Drawer';
import { Button } from '../Button';

export default {
  title: 'UI/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    anchor: {
      control: 'inline-radio',
      options: ['left', 'right', undefined],
    },
  },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => (
  <div>
    <div>Content already existing on screen</div>
    <Drawer {...args} />
  </div>
);

export const BasicDrawer = Template.bind({});
BasicDrawer.args = {
  title: 'Drawer Title',
  anchor: 'left',
  open: true,
  children: 'Drawer content',
};

import Picasso from '@toptal/picasso-provider';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Picasso>
    <Button {...args} />
  </Picasso>
);

export const Basic = Template.bind({});

Basic.args = {
  children: 'Hola',
  onClick: () => console.log('jellow'),
};

// import Picasso from '@toptal/picasso-provider';
// import { DecoratorFn } from '@storybook/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

// const PicassoProvider: DecoratorFn = (StoryFn) => {
//   return (
//     <Picasso>
//       <StoryFn />
//     </Picasso>
//   );
// };

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'padded', // 'centered', 'fullscreen',  (default)
  },
  // args: {
  //   onClick: () => console.log('jellow'),
  // },
  // decorators: [PicassoProvider],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  // <Picasso> -> decorators -> preview.js
  <Button {...args} />
  // </Picasso>
);

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic',
};

export const Names = Template.bind({});
Names.args = {
  children: 'Name 1',
};
Names.argTypes = {
  children: {
    control: 'inline-radio',
    options: ['Name 1', 'Name 2', 'Name 3'],
  },
};
// import Picasso from '@toptal/picasso-provider';
// import { DecoratorFn } from '@storybook/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from './Layout';

// const PicassoProvider: DecoratorFn = (StoryFn) => {
//   return (
//     <Picasso responsive={false} loadFavicon={false} fixViewport={false}>
//       <StoryFn />
//     </Picasso>
//   );
// };

export default {
  title: 'UI/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  // decorators: [PicassoProvider],
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

const rightContent = (
  <b style={{ color: 'white', textDecoration: 'underline' }}>{'Right content'}</b>
);
const sideMenu = (
  <div style={{ width: '8rem', height: '100vh', backgroundColor: '#ddd' }}>{'side menu'}</div>
);
const content = <div style={{ color: 'blue' }}>{'page Content'}</div>;

export const BasicLayout = Template.bind({});
BasicLayout.args = {
  title: 'Basic Layout title',
  rightContent: rightContent,
  sideMenu: sideMenu,
  children: content,
};

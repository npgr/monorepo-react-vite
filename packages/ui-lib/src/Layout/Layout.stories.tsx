import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from './Layout';

export default {
  title: 'UI/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>; // TODO (ts) as ComponentMeta<typeof Layout>;

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

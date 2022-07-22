import React from 'react';
import Picasso from '@toptal/picasso-provider';
//import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from './Layout';

export default {
  title: 'UI/Layout',
  component: Layout,
  // includeStories: ['BasicLayout'],
}; // TODO (ts) as ComponentMeta<typeof Layout>;

const Template = (args) => (
  <Picasso>
    <Layout {...args} />
  </Picasso>
);

export const BasicLayout = Template.bind({});

const rightContent = <b style={{ textDecoration: 'underline' }}>{'Right content'}</b>;
const sideMenu = (
  <div style={{ width: '2rem', height: '100vh', backgroundColor: 'gray' }}>{'side menu'}</div>
);
const content = <div style={{ color: 'blue' }}>{'page Content'}</div>;

BasicLayout.args = {
  title: 'Basic Layout title',
  rightContent: 'rightContent',
  sideMenu: 'sideMenu',
  children: 'content',
};

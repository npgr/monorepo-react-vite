import { Page } from '@toptal/picasso';
import PicassoProvider from '@toptal/picasso-provider';
// TODO: Fix

interface LayoutProps {
  title: string;
  rightContent?: React.ReactNode;
  sideMenu?: React.ReactNode;
  children: React.ReactNode;
  // TODO: Footer: React.ReactNode;
}

export const Layout = ({ title, rightContent = '', sideMenu = '', children }: LayoutProps) => {
  <PicassoProvider loadFavicon={false} fixViewport={false}>
    <Page>
      <Page.TopBar rightContent={'rightContent'} title={'title'} />
      <Page.Content>
        {'sideMenu'}
        <Page.Article>{'children'}</Page.Article>
      </Page.Content>
      {/* <Page.Footer /> */}
    </Page>
  </PicassoProvider>;
};

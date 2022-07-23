import { Page } from '@toptal/picasso';

interface LayoutProps {
  title: string;
  rightContent?: React.ReactNode;
  sideMenu?: React.ReactNode;
  children: React.ReactNode;
  // TODO: Footer: React.ReactNode;
}

export const Layout = ({ title, rightContent = '', sideMenu = '', children }: LayoutProps) => {
  return (
    <Page>
      <Page.TopBar rightContent={rightContent} title={title} />
      <Page.Content>
        {sideMenu}
        <Page.Article>{children}</Page.Article>
      </Page.Content>
      {/* <Page.Footer /> */}
    </Page>
  );
};

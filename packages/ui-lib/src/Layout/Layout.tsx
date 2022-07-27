import { Page } from '@toptal/picasso';
import { Globe16, Profile16, PortfolioDesigner16 } from '@toptal/picasso/Icon';
import '../index.css';

interface LayoutProps {
  title: string;
  rightContent?: React.ReactNode;
  sideMenu?: React.ReactNode;
  children: React.ReactNode;
  // TODO: Footer: React.ReactNode;
}

const SidebarMenu = () => (
  <Page.Sidebar>
    <Page.Sidebar.Menu>
      <Page.Sidebar.Item icon={<PortfolioDesigner16 />}>Home</Page.Sidebar.Item>
      <Page.Sidebar.Item icon={<Profile16 />}>Contacts</Page.Sidebar.Item>
      <Page.Sidebar.Item icon={<Globe16 />}>Team</Page.Sidebar.Item>
    </Page.Sidebar.Menu>
  </Page.Sidebar>
);

export const Layout = ({ title, rightContent = '', sideMenu = '', children }: LayoutProps) => {
  return (
    <div className="h-screen">
      <Page width="full">
        <Page.TopBar rightContent={rightContent} title={title} />
        <Page.Content>
          <SidebarMenu />
          <Page.Article>{children}</Page.Article>
        </Page.Content>
        {/* <Page.Footer /> */}
      </Page>
    </div>
  );
};

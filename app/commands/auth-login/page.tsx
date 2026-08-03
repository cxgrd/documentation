import Content from './content.mdx';
import {Metadata} from 'next';

export const metadata : Metadata = {
    metadataBase: new URL("https://docs.cxgrd.com"),
    title : 'Command - auth-login | CXGRD Docs',
    description : 'The authentication command for CXGRD',
    alternates: {
      canonical: "/commands/auth-login",
    }
};

export default function Page() {
  return <Content />;
}
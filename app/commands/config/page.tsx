import Content from './content.mdx';
import {Metadata} from 'next';

export const metadata : Metadata = {
    metadataBase: new URL("https://docs.cxgrd.com"),
    title : 'Command - config | CXGRD Docs',
    description : 'The config command, used for managing configurations',
    alternates: {
      canonical: "/commands/config",
    }
};

export default function Page() {
  return <Content />;
}
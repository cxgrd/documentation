import Content from './content.mdx';
import {Metadata} from 'next';

export const metadata: Metadata = {
    metadataBase: new URL("https://docs.cxgrd.com"),
    title : 'cxgrd plugin | CXGRD Docs',
    description : 'Claude code plugin for cxgrd ',
    alternates: {
      canonical: "/commands/cxgrd-plugin",
    }
};

export default function Page() {
  return <Content />;
}
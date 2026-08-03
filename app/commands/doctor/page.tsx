import Content from './content.mdx';
import {Metadata} from 'next';

export const metadata : Metadata = {
    metadataBase: new URL("https://docs.cxgrd.com"),
    title : 'Command - doctor | CXGRD Docs',
    description : 'Check the readiness and availability of tools before starting strict checks',
    alternates: {
      canonical: "/commands/doctor",
    }
};

export default function Page() {
  return <Content />;
}
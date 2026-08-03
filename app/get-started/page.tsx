import Content from './content.mdx';
import {Metadata} from 'next';

export const metadata: Metadata = {
    metadataBase: new URL("https://docs.cxgrd.com"),
    title : 'Installation | CXGRD Docs',
    description : 'Learn about the requirements for running, installing and using CXGRD ',
    alternates: {
    canonical: "/get-started",
  },
};

export default function Page() {
  return <Content />;
}
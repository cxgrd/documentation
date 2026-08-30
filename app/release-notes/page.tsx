import Content from './content.mdx';
import {Metadata} from 'next';

export const metadata: Metadata = {
    metadataBase: new URL("https://docs.cxgrd.com"),
    title : 'Release Notes | CXGRD Docs',
    description : 'Know what is there in the latest major release',
    alternates: {
    canonical: "/release-notes",
  },
};

export default function Page() {
  return <Content />;
}
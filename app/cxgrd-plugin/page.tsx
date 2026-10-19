import Content from './content.mdx';
import {Metadata} from 'next';

export const metadata: Metadata = {
    metadataBase: new URL("https://docs.cxgrd.com"),
    title : 'cxgrd plugin | CXGRD Docs',
    description : 'Claude code plugin for cxgrd ',
    alternates: {
      canonical: "/commands/cxgrd-plugin",
    },
    openGraph: {
    url: "/cxgrd-plugin",
    title: 'cxgrd plugin — CXGRD Docs',
    description: 'Learn about the cxgrd plugin and how to use it.',
    type: 'website',
    images: '/Homepage.png',
  },
};

export default function Page() {
  return <Content />;
}
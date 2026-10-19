import Content from './content.mdx';
import {Metadata} from 'next';

export const metadata: Metadata = {
    metadataBase: new URL("https://docs.cxgrd.com"),
    title : 'Installation | CXGRD Docs',
    description : 'Learn about the requirements for running, installing and using CXGRD ',
    alternates: {
    canonical: "/get-started",
  },
  openGraph: {
    url: "/get-started",
    title: 'Get Started — CXGRD Docs',
    description: 'Learn about the requirements for running, installing and using CXGRD.',
    type: 'website',
    images: '/Homepage.png',
  },
};

export default function Page() {
  return <Content />;
}
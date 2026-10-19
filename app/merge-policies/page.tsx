import Content from './content.mdx';
import {Metadata} from 'next';

export const metadata: Metadata = {
    metadataBase: new URL("https://docs.cxgrd.com"),
    title : 'Merge Policies | CXGRD Docs',
    description : 'Learn how CXGRD enforces merge policies using deterministic blast radius calculation before code ships.',
    alternates: {
    canonical: "/merge-policies",
  },
  openGraph: {
    url: "/merge-policies",
    title: 'Merge Policies — CXGRD Docs',
    description: 'Learn how CXGRD enforces merge policies using deterministic blast radius calculation before code ships.',
    type: 'website',
    images: '/Homepage.png',
  },
};

export default function Page() {
  return <Content />;
}
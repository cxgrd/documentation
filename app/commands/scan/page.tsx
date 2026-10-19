import Content from './content.mdx';
import {Metadata} from 'next';

export const metadata: Metadata = {
    metadataBase: new URL("https://docs.cxgrd.com"),
    title : 'Command - scan | CXGRD Docs',
    description : 'Analyze your project directory and build dependency graph, helps in calculating blast radius for changes',
    alternates: {
      canonical: "/commands/scan",
    },
    openGraph: {
      url: "/commands/scan",
      title: 'scan — CXGRD Docs',
      description: 'Analyze your project directory and build dependency graph, helps in calculating blast radius for changes',
      type: 'website',
      images: '/Homepage.png',
    },
};

export default function Page() {
  return <Content />;
}
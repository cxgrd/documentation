import Content from './content.mdx';
import {Metadata} from 'next';

export const metadata: Metadata = {
    metadataBase: new URL("https://docs.cxgrd.com"),
    title : 'Command - scan | CXGRD Docs',
    description : 'Analyze your project directory and build dependency graph, helps in calculating blast radius for changes',
    alternates: {
      canonical: "/commands/scan",
    }
};

export default function Page() {
  return <Content />;
}
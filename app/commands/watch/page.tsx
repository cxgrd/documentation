import Content from './content.mdx';
import {Metadata} from 'next';

export const metadata: Metadata = {
    metadataBase: new URL("https://docs.cxgrd.com"),
    title : 'Command - watch | CXGRD Docs',
    description : 'Monitor your codebase for dependency changes in real time',
    alternates: {
      canonical: "/commands/watch",
    },
    openGraph: {
      url: "/commands/watch",
      title: 'watch — CXGRD Docs',
      description: 'Monitor your codebase for dependency changes in real time',
    },
};

export default function Page() {
  return <Content />;
}
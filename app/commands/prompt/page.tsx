import Content from './content.mdx';
import {Metadata} from 'next';

export const metadata: Metadata = {
    metadataBase: new URL("https://docs.cxgrd.com"),
    title : 'Command - prompt | CXGRD Docs',
    description : 'Get a more architecturally accurate prompt for your AI tool using prompt command',
    alternates: {
      canonical: "/commands/prompt",
    },
    openGraph: {
      url: "/commands/prompt",
      title: 'prompt — CXGRD Docs',
      description: 'Get a more architecturally accurate prompt for your AI tool using prompt command',
      type: 'website',
      images: '/Homepage.png',
    },
};

export default function Page() {
  return <Content />;
}
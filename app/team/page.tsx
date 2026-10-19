import Content from './content.mdx';
import {Metadata} from 'next';

export const metadata : Metadata = {
    metadataBase: new URL("https://docs.cxgrd.com"),
    title : 'Team | CXGRD Docs',
    description : 'Learn about the Team tier, how it works, merge policy enforcement and audit logs',
    alternates: {
    canonical: "/team",
  },
  openGraph: {
    url: "/team",
    title: 'Team — CXGRD Docs',
    description: 'Learn about the Team tier, how it works, merge policy enforcement and audit logs.',
    type: 'website',
    images: '/Homepage.png',
  },
}

export default function Page() {
  return <Content />;
}
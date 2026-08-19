import {Metadata} from 'next';
import Content from './content.mdx';

export const metadata : Metadata = {
  metadataBase: new URL("https://docs.cxgrd.com"),
  title: 'CXGRD GitHub Action | CXGRD Docs',
  description: 'Learn how to use the CXGRD GitHub Action to integrate deterministic analysis into your CI/CD pipeline.',
  alternates: {
    canonical: "/cxgrd-action",
  },
}

export default function Page() {
  return <Content />;
}
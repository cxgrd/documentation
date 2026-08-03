import {Metadata} from 'next';
import Content from './content.mdx';

export const metadata : Metadata = {
  metadataBase: new URL("https://docs.cxgrd.com"),
  title: 'Deterministic Analysis vs. AI Agents | CXGRD Docs',
  description: 'Why CXGRD uses dependency graph traversal instead of AI agent interpretation to compute blast radius.',
  alternates: {
    canonical: "/ai-vs-cxgrd",
  },
}

export default function Page() {
  return <Content />;
}
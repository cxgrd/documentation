import DocsLayoutClient from './layout-client'
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.cxgrd.com"),
  title: 'CXGRD Docs',
  description: 'Getting started with CXGRD. Understanding what it is and what does a typical workflow look like.',
  icons: {
    icon: "/cxgrdlogo.png",
  },
  openGraph: {
    title: "CXGRD Docs | AI Architectural Guardrail for Your Codebase",
    description: "Getting started with CXGRD. Understanding what it is and what does a typical workflow look like.",
    url: "https://docs.cxgrd.com",
    siteName: "CXGRD Docs",
    images: [
      {
        url: "https://cxgrd.com/Homepage.png",
        width: 1200,
        height: 630,
        alt: "CXGRD Logo",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "/",
  }
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <DocsLayoutClient>{children}</DocsLayoutClient>
}
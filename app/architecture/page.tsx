import {Metadata} from 'next';
import Image from "next/image";

export const metadata : Metadata = {
  metadataBase: new URL("https://docs.cxgrd.com"),
  title: 'Architecture of CXGRD | CXGRD Docs',
  description: 'An overview of the architectural design decisions behind CXGRD and its approach to computing blast radius.',
  alternates: {
    canonical: "/architecture",
  },
}

export default function ArchitecturePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#05070f] text-slate-100 px-4 md:px-8">
        <div>
            <h1 className="text-4xl font-bold mb-4">Architecture of CXGRD</h1>
            <p className="text-lg mb-6">
                This diagram illustrates the architecture of cxgrd and some of its ecosystem components:
            </p>
        </div>

        <div className="mt-7 w-full overflow-x-auto">
            <div className="min-w-[700px] md:min-w-0 mx-auto">
                <Image
                    src="/cxgrd_design.png"
                    alt="CXGRD Architecture Diagram"
                    width={1200}
                    height={800}
                    className="rounded-xl w-full h-auto"
                    sizes="(max-width: 768px) 700px, 1000px"
                />
            </div>
        </div>
    </div>
  )
}
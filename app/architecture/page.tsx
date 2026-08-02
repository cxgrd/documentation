import {Metadata} from 'next';
import Image from "next/image";

export const metadata : Metadata = {
  title: 'Architecture of CXGRD | CXGRD Docs',
  description: 'An overview of the architectural design decisions behind CXGRD and its approach to computing blast radius.',
}

export default function ArchitecturePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#05070f] text-slate-100">
        <div>
            <h1 className="text-4xl font-bold mb-4">Architecture of CXGRD</h1>
            <p className="text-lg mb-6">
                This diagram illustrates the architecture of cxgrd and some of its ecosystem components:
            </p>
        </div>

        <div className="flex-1 flex justify-center mt-20">
            <Image
                src="/cxgrd_design.png"
                alt="CXGRD Architecture Diagram"
                width={600}
                height={400}
                className="rounded-xl scale-120"
            />
        </div>
    </div>
  )
}
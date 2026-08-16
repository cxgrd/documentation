'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Footer } from '@/components/Footer'
import { TableOfContents } from '@/components/TableOfContents'
import { PrevNextNav } from '@/components/PrevNextNav'
import { nav } from '@/lib/nav'
import './globals.css'
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DocsLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [commandsOpen, setCommandsOpen] = useState(
    true || pathname.startsWith('/commands')
  )
  const [menuOpen, setMenuOpen] = useState(false)

  const renderNav = (mobile = false) => (
    <nav className={`flex flex-col gap-1 ${mobile ? 'w-full' : ''}`}>
      {nav.map((item) =>
        'children' in item && item.children ? (
          <div key={item.title}>
            <button
              onClick={() => setCommandsOpen((o) => !o)}
              className="w-full flex items-center justify-between text-sm text-slate-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-colors"
            >
              {item.title}
              <span className="text-xs">{commandsOpen ? '▾' : '▸'}</span>
            </button>
            {commandsOpen && (
              <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3">
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm py-1 transition-colors ${
                      pathname === child.href
                        ? 'text-white'
                        : 'text-slate-500 hover:text-slate-200'
                    }`}
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            key={item.href}
            href={item.href!}
            onClick={() => setMenuOpen(false)}
            className={`text-sm px-3 py-1.5 rounded-md transition-colors ${
              pathname === item.href
                ? 'text-white bg-white/5'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.title}
          </Link>
        )
      )}
    </nav>
  )

  return (
    <html lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body>
        <div className="min-h-screen flex flex-col bg-[#05070f] text-slate-200">
          <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/cxgrdlogo.png" alt="cxgrd" width={24} height={24} className="rounded-md" />
              <span className="font-semibold text-sm">cxgrd docs</span>
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 md:hidden"
              aria-label="Toggle docs navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <div className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-4 rounded-full bg-current" />
                <span className="block h-0.5 w-4 rounded-full bg-current" />
                <span className="block h-0.5 w-4 rounded-full bg-current" />
              </div>
            </button>
          </header>

          {menuOpen && (
            <div className="border-b border-white/10 bg-[#05070f]/95 px-6 py-4 md:hidden">
              <div className="mx-auto max-w-3xl">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">Docs</p>
                {renderNav(true)}
              </div>
            </div>
          )}

          <div className="flex flex-1">
            <aside className="w-56 shrink-0 border-r border-white/10 px-4 py-8 hidden md:block">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Docs</p>
              {renderNav()}
            </aside>

            <main id="docs-content" className="flex-1 px-8 py-10 max-w-3xl prose prose-invert prose-slate">
              {children}
              <PrevNextNav />
            </main>

            <aside className="w-56 shrink-0 px-4 py-10 hidden xl:block">
              <div className="sticky top-10">
                <TableOfContents />
              </div>
            </aside>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  )
}

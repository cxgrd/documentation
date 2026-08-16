'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { flatNav } from '@/lib/nav'

export function PrevNextNav() {
  const pathname = usePathname()
  const index = flatNav.findIndex((item) => item.href === pathname)

  if (index === -1) return null

  const prev = index > 0 ? flatNav[index - 1] : null
  const next = index < flatNav.length - 1 ? flatNav[index + 1] : null

  if (!prev && !next) return null

  return (
    <nav
      aria-label="Page navigation"
      className="not-prose mt-16 flex items-stretch justify-between gap-4 border-t border-white/10 pt-6"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group flex max-w-[48%] flex-col rounded-lg border border-white/10 px-4 py-3 text-sm transition-colors hover:border-white/20 hover:bg-white/5"
        >
          <span className="mb-1 text-xs text-slate-500">← Previous</span>
          <span className="truncate text-slate-200 group-hover:text-white">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group ml-auto flex max-w-[48%] flex-col items-end rounded-lg border border-white/10 px-4 py-3 text-right text-sm transition-colors hover:border-white/20 hover:bg-white/5"
        >
          <span className="mb-1 text-xs text-slate-500">Next →</span>
          <span className="truncate text-slate-200 group-hover:text-white">{next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}

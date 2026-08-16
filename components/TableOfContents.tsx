'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const pathname = usePathname()
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  // Rebuild the heading list whenever the route changes
  useEffect(() => {
    const container = document.getElementById('docs-content')
    if (!container) {
      setHeadings([])
      return
    }

    const elements = Array.from(
      container.querySelectorAll('h2, h3')
    ) as HTMLElement[]

    setHeadings(
      elements
        .filter((el) => el.id)
        .map((el) => ({
          id: el.id,
          text: el.textContent ?? '',
          level: el.tagName === 'H3' ? 3 : 2,
        }))
    )
  }, [pathname])

  // Scrollspy: highlight whichever heading is currently in view
  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 1.0 }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav aria-label="On this page" className="flex flex-col gap-0.5">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
        On this page
      </p>
      {headings.map((h) => (
        <a
          key={h.id}
          href={`#${h.id}`}
          className={`text-sm py-1 border-l transition-colors ${
            h.level === 3 ? 'pl-6' : 'pl-3'
          } ${
            activeId === h.id
              ? 'text-white border-white'
              : 'text-slate-500 hover:text-slate-200 border-white/10 hover:border-white/30'
          }`}
        >
          {h.text}
        </a>
      ))}
    </nav>
  )
}

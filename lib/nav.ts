export interface NavLink {
  title: string
  href: string
}

export interface NavItem {
  title: string
  href?: string
  children?: NavLink[]
}

export const nav: NavItem[] = [
  { title: 'Introduction', href: '/' },
  { title: 'Quickstart', href: '/get-started' },
  { title: 'Architecture', href: '/architecture' },
  {
    title: 'Commands',
    children: [
      { title: 'scan', href: '/commands/scan' },
      { title: 'input', href: '/commands/input' },
      { title: 'prompt', href: '/commands/prompt' },
      { title: 'check', href: '/commands/check' },
      { title: 'auth login', href: '/commands/auth-login' },
      { title: 'doctor', href: '/commands/doctor' },
      { title: 'init-hooks', href: '/commands/init-hooks' },
      { title: 'watch', href: '/commands/watch' },
      { title: 'config', href: '/commands/config' },
    ],
  },
  { title: 'Team', href: '/team' },
  { title: 'How Merge Policies work', href: '/merge-policies' },
  { title: 'Deterministic Analysis vs. AI Agents', href: '/ai-vs-cxgrd' },
]

// Flattened, in-order list of every real page (Commands' children inlined
// where the parent sits). This is the order Prev/Next buttons walk through.
export const flatNav: NavLink[] = nav.flatMap((item) =>
  item.children ? item.children : [{ title: item.title, href: item.href! }]
)

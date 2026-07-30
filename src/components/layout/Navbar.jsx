import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { to: '/', label: 'home' },
  { to: '/projects', label: 'projects' },
  { to: '/about', label: 'about' },
  { to: '/resume', label: 'resume' },
  { to: '/contact', label: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `font-mono text-sm transition-colors ${
      isActive
        ? 'text-signal'
        : 'text-muted-light hover:text-ink dark:text-muted-dark dark:hover:text-paper'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-border-light bg-paper/90 backdrop-blur dark:border-border-dark dark:bg-ink/90">
      <div className="container-page flex h-16 items-center justify-between">
        <NavLink to="/" className="font-mono text-sm font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <span className="text-signal">~/</span>hassan-ali
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((prev) => !prev)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border-light dark:border-border-dark"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border-light px-5 py-4 dark:border-border-dark md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

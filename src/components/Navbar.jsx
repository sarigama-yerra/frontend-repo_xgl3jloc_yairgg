import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md/50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            Matteo Metelli
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-slate-200/90 hover:text-white transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full px-4 py-2 text-sm font-medium bg-slate-900/70 border border-violet-500/30 text-white hover:border-violet-400/70 shadow-[0_0_25px_rgba(139,92,246,0.25)] hover:shadow-[0_0_35px_rgba(139,92,246,0.45)] transition-all"
          >
            Let’s talk
          </a>
        </nav>
        <button
          className="md:hidden text-white/90"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 space-y-2">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-slate-200/90 hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center rounded-full px-4 py-2 text-sm font-medium bg-slate-900/70 border border-violet-500/30 text-white hover:border-violet-400/70 shadow-[0_0_25px_rgba(139,92,246,0.25)] hover:shadow-[0_0_35px_rgba(139,92,246,0.45)] transition-all"
            >
              Let’s talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

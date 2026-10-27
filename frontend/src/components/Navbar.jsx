import { useState, useEffect } from 'react'
import { Menu, X, Code2, Send, Zap } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Beranda', href: '#home', id: 'home' },
  { name: 'Tentang', href: '#about', id: 'about' },
  { name: 'Keahlian', href: '#skills', id: 'skills' },
  { name: 'Proyek', href: '#projects', id: 'projects' },
  { name: 'Pengalaman', href: '#experience', id: 'experience' },
  { name: 'Kontak', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const pos = window.scrollY + 120
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id)
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(id)
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#05060a]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Brand */}
        <a href="#home" id="brand-logo-link" className="group flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-[1.5px] bg-[#08090f] rounded-[9px] flex items-center justify-center">
              <Code2 className="w-4 h-4 text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
            </div>
          </div>
          <span className="font-bold text-[17px] tracking-tight text-white">
            Dinda<span className="text-cyan-400">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.07] backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              id={`nav-${link.id}`}
              className={`px-4 py-1.5 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                active === link.id
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA + Availability */}
        <div className="hidden lg:flex items-center gap-3">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to work
          </span>
          <a
            href="#contact"
            id="cta-hire-btn"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#05060a] text-sm font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-px transition-all duration-200"
          >
            <Send className="w-3.5 h-3.5" />
            Hire Me
          </a>
        </div>

        {/* Mobile Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a href="#contact" className="px-3 py-1.5 text-xs font-bold rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/25">
            Hire Me
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-2 mx-4 rounded-2xl bg-[#0a0c14]/95 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl">
          <div className="p-4 space-y-1">
            <div className="flex items-center gap-2 px-3 py-2 mb-3 rounded-xl bg-emerald-500/8 border border-emerald-500/15 text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Tersedia untuk proyek freelance & kontrak
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'bg-cyan-500/12 text-cyan-400 border border-cyan-500/20'
                    : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/[0.07]">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-[#05060a] font-bold text-sm"
              >
                <Send className="w-4 h-4" />
                Mulai Diskusi Proyek
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

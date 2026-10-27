import { useState, useEffect } from 'react'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('id'))
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.pushState(null, '', href)
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner" id="navbar">
      <div className="container navbar__inner">
        <a
          href="#hero"
          className="navbar__logo"
          aria-label="Kembali ke atas"
          onClick={e => handleLinkClick(e, '#hero')}
        >
          <span className="logo-dot"></span>
          <span>DA<span className="logo-accent">.</span></span>
        </a>

        <nav className="navbar__links" aria-label="Navigasi utama">
          {[
            { href: '#about', label: 'About' },
            { href: '#projects', label: 'Projects' },
            { href: '#experience', label: 'Experience' },
            { href: '#education', label: 'Education' },
            { href: '#gallery', label: 'Galeri' },
            { href: '#contact', label: 'Contact' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              onClick={e => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            id="theme-toggle"
            className="btn-icon"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
          >
            <svg
              className="icon-sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <svg
              className="icon-moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <button
            className={`btn-icon navbar__hamburger ${mobileOpen ? 'open' : ''}`}
            id="hamburger"
            aria-label="Buka menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav
        className={`mobile-menu ${mobileOpen ? 'open' : ''}`}
        id="mobile-menu"
        aria-label="Menu mobile"
        aria-hidden={!mobileOpen}
      >
        {[
          { href: '#about', label: 'About' },
          { href: '#projects', label: 'Projects' },
          { href: '#experience', label: 'Experience' },
          { href: '#education', label: 'Education' },
          { href: '#gallery', label: 'Galeri' },
          { href: '#contact', label: 'Contact' },
        ].map(link => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            onClick={e => handleLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

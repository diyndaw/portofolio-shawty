export default function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.pushState(null, '', id)
    }
  }

  return (
    <section id="hero" className="hero" aria-label="Perkenalan">
      <div className="hero__bg-image" role="presentation" aria-hidden="true">
        <img src="/assets/images/hero_bg.webp" alt="" loading="eager" fetchpriority="high" />
        <div className="hero__bg-overlay"></div>
      </div>
      <div className="orb orb--1" aria-hidden="true"></div>
      <div className="orb orb--2" aria-hidden="true"></div>
      <div className="orb orb--3" aria-hidden="true"></div>

      <div className="container hero__container">
        {/* Kolom Kiri: Teks */}
        <div className="hero__col-text">
          <div className="hero__badge">
            <span className="badge-dot"></span> Open to Work · Sistem Informasi
          </div>
          <h1 className="hero__name">
            Halo, saya<br />
            <span className="gradient-text">Dinda Alya Ainsani</span>
          </h1>
          <p className="hero__tagline">
            Fresh Graduate Sistem Informasi dengan pengalaman <span className="text-accent">Android Development</span>, administrasi, dan layanan pelanggan.
          </p>
          <div className="hero__cta">
            <a
              href="/assets/images/CV_Dinda_Alya_Ainsani.pdf"
              download
              className="btn btn--primary"
              id="btn-download-cv"
              aria-label="Download CV Dinda Alya Ainsani"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
            <a
              href="#contact"
              className="btn btn--outline"
              id="btn-contact-hero"
              aria-label="Hubungi saya"
              onClick={e => handleScrollTo(e, '#contact')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Hubungi Saya
            </a>
          </div>
          <div className="hero__socials">
            <a
              href="https://www.linkedin.com/in/dindaalyaainsani/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/dindalyya"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="mailto:dindalyyaa@gmail.com" className="social-link" aria-label="Email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Foto Profil Estetik */}
        <div className="hero__col-photo">
          <div className="hero__photo-wrapper">
            <div className="hero__photo-glow" aria-hidden="true"></div>
            <div className="hero__photo-ring" aria-hidden="true"></div>
            <div className="hero__photo-frame">
              <img
                src="/assets/images/three.webp"
                alt="Foto Dinda Alya Ainsani"
                width="320"
                height="340"
                loading="eager"
                fetchpriority="high"
                className="hero__photo-img"
              />
              <div className="hero__photo-overlay" aria-hidden="true"></div>
            </div>

            {/* Cute Aesthetic Sparkle */}
            <div className="hero__photo-sparkle" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero__scroll-cue"
        aria-label="Scroll ke bawah"
        onClick={e => handleScrollTo(e, '#about')}
      >
        <div className="scroll-arrow"></div>
      </a>
    </section>
  )
}

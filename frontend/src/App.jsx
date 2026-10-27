import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import CertModal from './components/CertModal'
import Lightbox from './components/Lightbox'

export default function App() {
  const STORAGE_KEY = 'portfolio-theme'

  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem(STORAGE_KEY) ||
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    )
  })

  const [certModalOpen, setCertModalOpen] = useState(false)
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    photos: [],
    activeIndex: 0,
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  // Fade-in observer on scroll
  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    fadeEls.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  const handleOpenLightbox = (photos, startIndex = 0) => {
    setLightboxState({
      isOpen: true,
      photos,
      activeIndex: startIndex,
    })
    document.body.style.overflow = 'hidden'
  }

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({
      ...prev,
      isOpen: false,
    }))
    // Only release body overflow if certModal is also closed
    if (!certModalOpen) {
      document.body.style.overflow = ''
    }
  }

  const handleOpenCertModal = () => {
    setCertModalOpen(true)
  }

  const handleCloseCertModal = () => {
    setCertModalOpen(false)
    if (!lightboxState.isOpen) {
      document.body.style.overflow = ''
    }
  }

  return (
    <>
      <a href="#main" className="skip-link">Lewati ke konten utama</a>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Experience onOpenLightbox={handleOpenLightbox} />
        <Education />
        <Gallery
          onOpenLightbox={handleOpenLightbox}
          onOpenCertModal={handleOpenCertModal}
        />
        <Contact />
      </main>

      <Footer />

      <BackToTop />

      <CertModal
        isOpen={certModalOpen}
        onClose={handleCloseCertModal}
        onOpenLightbox={handleOpenLightbox}
      />

      <Lightbox
        isOpen={lightboxState.isOpen}
        photos={lightboxState.photos}
        activeIndex={lightboxState.activeIndex}
        onClose={handleCloseLightbox}
        onIndexChange={newIdx =>
          setLightboxState(prev => ({ ...prev, activeIndex: newIdx }))
        }
      />
    </>
  )
}

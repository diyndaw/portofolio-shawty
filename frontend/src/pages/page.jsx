/**
 * pages/page.jsx — Portfolio Page Assembler
 * 
 * Folder ini berisi file "page" yang menggabungkan semua section/komponen 
 * menjadi satu halaman lengkap. Analoginya seperti Next.js App Router.
 * 
 * Struktur:
 *   src/
 *   ├── components/     ← Komponen UI individu (Navbar, Hero, dll)
 *   ├── data/           ← Data statis portofolio
 *   ├── pages/
 *   │   └── page.jsx    ← Assembler halaman utama (INI FILE INI)
 *   └── App.jsx         ← Root app, import dari pages/page.jsx
 */

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function PortfolioPage() {
  return (
    <>
      {/* ─── Navigation ─────────────────────────────── */}
      <Navbar />

      {/* ─── Page Sections ──────────────────────────── */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      {/* ─── Footer ─────────────────────────────────── */}
      <Footer />
    </>
  )
}

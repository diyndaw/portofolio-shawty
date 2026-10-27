import { useState } from 'react'
import { ArrowRight, Mail, Terminal, Copy, Check, Sparkles } from 'lucide-react'
import { InstagramIcon, LinkedinIcon } from './Icons'
import { personalInfo, stats } from '../data/portfolioData'

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText('npx dinda-dev')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#05060a] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 badge badge-emerald">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to work
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight text-white">
              Halo, Saya
              <br />
              <span className="gradient-text">Dinda</span>
              <span className="cursor-blink text-cyan-400">_</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 font-medium">
              Full-Stack Engineer & UI Designer
            </p>
          </div>

          {/* Bio — singkat */}
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Membangun aplikasi web modern dengan React, TypeScript & Node.js.<br className="hidden sm:block" />
            Fokus pada performa, estetika, dan pengalaman pengguna.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              id="hero-projects-btn"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#05060a] font-bold text-sm shadow-xl shadow-cyan-500/25 hover:-translate-y-px transition-all duration-200"
            >
              Lihat Proyek
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              id="hero-contact-btn"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] text-slate-200 font-semibold text-sm transition-all duration-200 hover:-translate-y-px"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              Hubungi Saya
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-2">
            <a href={personalInfo.instagram} target="_blank" rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-slate-500 hover:text-white hover:border-white/20 transition-colors" aria-label="Instagram">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-slate-500 hover:text-white hover:border-white/20 transition-colors" aria-label="LinkedIn">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-slate-500 hover:text-white hover:border-white/20 transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
            <div className="w-px h-5 bg-white/10 mx-1" />
            <button onClick={copy}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-slate-500 hover:text-slate-300 font-mono text-xs transition-colors">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              npx dinda-dev
              {copied
                ? <Check className="w-3.5 h-3.5 text-emerald-400" />
                : <Copy className="w-3 h-3 opacity-40" />}
            </button>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <div key={i} className="py-7 px-6 bg-[#08090e] hover:bg-[#0c0e16] transition-colors text-center sm:text-left">
              <div className="text-3xl font-extrabold gradient-text">{s.value}</div>
              <div className="text-xs text-slate-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

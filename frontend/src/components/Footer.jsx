import { ArrowUp, Code2, Mail, Heart } from 'lucide-react'
import { InstagramIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-90" />
            <div className="absolute inset-[1.5px] bg-[#08090f] rounded-[9px] flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            </div>
          </div>
          <span className="font-bold text-base text-white tracking-tight">
            Dinda<span className="text-cyan-400">.dev</span>
          </span>
        </a>

        {/* Copyright */}
        <p className="text-xs text-slate-600 font-mono flex items-center gap-1.5">
          © {new Date().getFullYear()} {personalInfo.fullName || personalInfo.name}
          <span className="mx-1 opacity-30">·</span>
          Built with <Heart className="w-3 h-3 text-rose-500 fill-rose-500 mx-0.5" /> React 19
        </p>

        {/* Socials + back to top */}
        <div className="flex items-center gap-2">
          <a href={personalInfo.instagram} target="_blank" rel="noreferrer"
            className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.07] text-slate-500 hover:text-white transition-colors" aria-label="Instagram">
            <InstagramIcon className="w-3.5 h-3.5" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
            className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.07] text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
          <a href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.07] text-slate-500 hover:text-white transition-colors" aria-label="Email">
            <Mail className="w-3.5 h-3.5" />
          </a>
          <div className="w-px h-4 bg-white/[0.08] mx-1" />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.07] text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Back to top">
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

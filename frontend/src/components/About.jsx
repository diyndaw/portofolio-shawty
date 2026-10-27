import { Sparkles } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const PILLARS = [
  { emoji: '⚡', title: 'Performa', desc: 'Core Web Vitals 95+, SSR & edge caching.' },
  { emoji: '🔒', title: 'Arsitektur', desc: 'TypeScript strict, clean architecture, automated tests.' },
  { emoji: '🤝', title: 'Kolaborasi', desc: 'Agile, remote-friendly, komunikasi transparan.' },
  { emoji: '🎨', title: 'UI/UX', desc: 'Pixel-perfect, responsif, aksesibel.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 badge badge-purple mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Tentang
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sedikit <span className="gradient-text">Tentang Saya</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Bio */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                alt={personalInfo.name}
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-cyan-500/30"
              />
              <div>
                <p className="font-bold text-white text-lg">{personalInfo.fullName || personalInfo.name}</p>
                <p className="text-sm text-cyan-400">{personalInfo.role}</p>
                <p className="text-xs text-slate-500 mt-0.5">{personalInfo.location} · {personalInfo.timezone}</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Saya seorang full-stack engineer dengan 4+ tahun pengalaman membangun produk digital. Saya senang merancang antarmuka yang indah sekaligus memastikan backend-nya solid dan skalabel.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {personalInfo.availability}
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-2 gap-4">
            {PILLARS.map((p, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#0e1018] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1 text-left">
                <span className="text-2xl mb-3 block">{p.emoji}</span>
                <h4 className="font-bold text-white text-sm mb-1">{p.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

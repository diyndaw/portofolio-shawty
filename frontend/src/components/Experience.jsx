import { Calendar, CheckCircle2, Building2, Sparkles } from 'lucide-react'
import { experienceData } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#07080d]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 badge badge-emerald mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Pengalaman
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Riwayat <span className="gradient-text">Karir</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-7 border-l border-white/[0.08] space-y-8">
          {experienceData.map((exp, i) => (
            <div key={i} className="relative group">
              <div className="timeline-dot" />
              <div className="ml-4 p-5 rounded-2xl bg-[#0e1018] border border-white/[0.06] group-hover:border-white/[0.12] transition-all duration-300 text-left">

                {/* Role & period */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-white">{exp.role}</h3>
                    <p className="text-sm text-cyan-400 flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {exp.company}
                      <span className="text-[10px] font-mono text-slate-600 ml-1">{exp.type}</span>
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 bg-white/[0.03] border border-white/[0.06] px-3 py-1 rounded-lg">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>

                {/* Achievements — hanya 1-2 poin */}
                <div className="space-y-1.5 mb-4">
                  {exp.achievements.slice(0, 2).map((a, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      {a}
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                  {exp.tech.slice(0, 5).map((t, j) => (
                    <span key={j} className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-cyan-500/8 text-cyan-300 border border-cyan-500/12">
                      {t}
                    </span>
                  ))}
                  {exp.tech.length > 5 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono text-slate-600">+{exp.tech.length - 5}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

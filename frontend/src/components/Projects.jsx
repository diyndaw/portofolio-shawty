import { useState } from 'react'
import { ArrowUpRight, Eye, Sparkles } from 'lucide-react'

import { projectsData } from '../data/portfolioData'
import ProjectModal from './ProjectModal'

const FILTERS = ['Semua', 'Full-Stack', 'Frontend', 'UI/UX', 'AI & Cloud']

export default function Projects() {
  const [filter, setFilter] = useState('Semua')
  const [modal, setModal]   = useState(null)

  const list = filter === 'Semua' ? projectsData : projectsData.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 badge badge-purple mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Proyek
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Karya <span className="gradient-text">Pilihan</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  filter === f
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-[#05060a] shadow-md shadow-cyan-500/20'
                    : 'bg-white/[0.04] border border-white/[0.07] text-slate-400 hover:text-white'
                }`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map(p => (
            <article key={p.id}
              className="group flex flex-col rounded-2xl bg-[#0e1018] border border-white/[0.06] hover:border-white/[0.14] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 text-left">

              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img src={p.image} alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1018] via-[#0e1018]/20 to-transparent" />

                {p.featured && (
                  <span className="absolute top-3 right-3 badge bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px]">
                    ★ Featured
                  </span>
                )}

                {/* Hover overlay */}
                <button onClick={() => setModal(p)}
                  className="absolute inset-0 flex items-center justify-center bg-[#05060a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-semibold">
                    <Eye className="w-3.5 h-3.5 text-cyan-300" />
                    Detail
                  </span>
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <span className="text-[10px] font-mono text-slate-600 uppercase">{p.category}</span>
                  <h3 className="font-bold text-white text-sm leading-snug mt-0.5 group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {p.title}
                  </h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {p.tags.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-500">{t}</span>
                  ))}
                  {p.tags.length > 3 && <span className="px-2 py-0.5 text-[10px] font-mono text-slate-600">+{p.tags.length - 3}</span>}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] mt-auto">
                  <button onClick={() => setModal(p)}
                    className="text-xs text-slate-500 hover:text-cyan-400 transition-colors">
                    Case study →
                  </button>
                  <div className="flex gap-1.5">

                    <a href={p.liveUrl} target="_blank" rel="noreferrer"
                      className="p-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </section>
  )
}

import { X, ExternalLink, Activity } from 'lucide-react'


export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#05060a]/85 backdrop-blur-md" />

      {/* Dialog */}
      <div
        className="scale-in relative w-full max-w-2xl bg-[#0e1018] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl text-left"
        onClick={e => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative h-56 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1018] to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white backdrop-blur border border-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-5 right-5">
            <span className="badge badge-cyan text-[10px] mb-2 inline-flex">{project.category}</span>
            <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[50vh] overflow-y-auto">
          {project.metrics && (
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/8 border border-cyan-500/15 text-cyan-300 text-xs font-mono">
              <Activity className="w-3.5 h-3.5 shrink-0" />
              {project.metrics}
            </div>
          )}
          <div>
            <p className="text-[11px] font-mono uppercase text-slate-600 mb-2 tracking-wider">Deskripsi Arsitektur</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-mono uppercase text-slate-600 mb-3 tracking-wider">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, i) => (
                <span key={i} className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.04] border border-white/[0.07] text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 p-5 bg-[#09090f] border-t border-white/[0.06]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-xl hover:bg-white/[0.05] transition-colors"
          >
            Tutup
          </button>
          <div className="flex gap-3">

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#05060a] text-sm font-bold shadow-lg shadow-cyan-500/20 transition-all"
            >
              Live Demo
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

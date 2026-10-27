import { useState } from 'react'
import { Code2, Database, Cloud, Palette, Sparkles } from 'lucide-react'
import { skillsData } from '../data/portfolioData'

const TABS = [
  { id: 'frontend', label: 'Frontend', icon: Code2 },
  { id: 'backend',  label: 'Backend',  icon: Database },
  { id: 'devops',   label: 'DevOps',   icon: Cloud },
  { id: 'design',   label: 'Design',   icon: Palette },
]

export default function Skills() {
  const [active, setActive] = useState('frontend')
  const skills = skillsData[active] || []

  return (
    <section id="skills" className="py-24 bg-[#07080d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 badge badge-cyan mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Keahlian
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-[#0e1018] border border-white/[0.07]">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => setActive(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-[#05060a] shadow-lg shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}>
                <Icon className={`w-3.5 h-3.5 ${active === id ? 'text-[#05060a]' : 'text-cyan-400'}`} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill list — compact rows */}
        <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
          {skills.map((s, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-[#0e1018] border border-white/[0.06] hover:border-white/[0.12] transition-colors group">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:shadow-[0_0_8px_#22d3ee] transition-all" />
                <span className="text-sm font-medium text-slate-200">{s.name}</span>
                <span className="text-[10px] font-mono text-slate-600">{s.tag}</span>
              </div>
              <span className="text-xs font-mono text-cyan-400 tabular-nums">{s.level}%</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

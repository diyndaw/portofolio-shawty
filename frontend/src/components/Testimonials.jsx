import { Star, Sparkles } from 'lucide-react'
import { testimonialsData } from '../data/portfolioData'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 badge badge-purple mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Testimoni
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kata <span className="gradient-text">Mereka</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-3 gap-5 text-left">
          {testimonialsData.map((t, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-[#0e1018] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote — dipotong lebih singkat */}
              <p className="text-slate-400 text-sm leading-relaxed italic flex-1 line-clamp-4">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <img src={t.avatar} alt={t.name}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-white/10" />
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-[11px] text-slate-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

import { useState } from 'react'
import { Mail, Send, Copy, Check, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const submit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Isi semua field terlebih dahulu.')
      return
    }
    setError('')
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    }, 1000)
  }

  const inputCls = "w-full px-4 py-3 rounded-xl bg-[#080a10] border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors"

  return (
    <section id="contact" className="py-24 bg-[#07080d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 badge badge-cyan mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Kontak
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mulai <span className="gradient-text">Diskusi</span>
          </h2>
          <p className="text-slate-500 text-sm mt-3">Respon dalam &lt; 12 jam · Konsultasi pertama gratis</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Email */}
            <div className="p-5 rounded-2xl bg-[#0e1018] border border-white/[0.06]">
              <p className="text-xs text-slate-600 font-mono uppercase mb-3">Email</p>
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-mono text-slate-300 truncate">{personalInfo.email}</span>
                <button onClick={copyEmail} className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-500 hover:text-white transition-colors shrink-0">
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Status */}
            <div className="p-5 rounded-2xl bg-emerald-500/8 border border-emerald-500/18">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Tersedia
              </div>
              <p className="text-xs text-emerald-300/60">{personalInfo.availability}</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-7 rounded-2xl bg-[#0e1018] border border-white/[0.06]">
              {sent ? (
                <div className="py-10 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <p className="font-bold text-white">Pesan terkirim! 🎉</p>
                  <p className="text-sm text-slate-500">Saya akan membalas dalam 12–24 jam.</p>
                  <button onClick={() => setSent(false)}
                    className="mt-2 text-xs text-slate-500 hover:text-slate-300 transition-colors underline">
                    Kirim lagi
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-600 mb-1.5">Nama *</label>
                      <input type="text" required value={form.name} onChange={set('name')} placeholder="Nama kamu" className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-600 mb-1.5">Email *</label>
                      <input type="email" required value={form.email} onChange={set('email')} placeholder="email@kamu.com" className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-600 mb-1.5">Pesan *</label>
                    <textarea rows={4} required value={form.message} onChange={set('message')}
                      placeholder="Ceritakan proyek atau kebutuhanmu..."
                      className={`${inputCls} resize-none`} />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-rose-400 text-xs">
                      <AlertCircle className="w-3.5 h-3.5" /> {error}
                    </div>
                  )}

                  <button type="submit" disabled={sending}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#05060a] font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer">
                    {sending
                      ? <div className="w-4 h-4 border-2 border-[#05060a]/30 border-t-[#05060a] rounded-full animate-spin" />
                      : <><Send className="w-3.5 h-3.5" /> Kirim Pesan</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

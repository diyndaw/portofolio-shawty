import { experiencePhotos } from '../data/portfolioData'

export default function Experience({ onOpenLightbox }) {
  const experiences = [
    {
      id: 'aslab',
      title: 'Asisten Laboratorium',
      company: 'Universitas Respati Indonesia',
      dateText: 'Januari 2025 — Oktober 2026',
      datetime: '2025-01/2026-10',
      bullets: [
        'Membantu dosen dalam mempersiapkan dan mendukung kegiatan praktikum.',
        'Membantu menyiapkan perangkat, bahan, dan kebutuhan praktikum.',
        'Terlibat sebagai mentor/pengajar robotik dan scratch dalam kegiatan ekskul untuk memberikan pembelajaran dan pendampingan kepada siswa sekolah dasar.',
      ],
      chips: ['Robotik', 'Scratch', 'Mentoring'],
    },
    {
      id: 'android-dev',
      title: 'Android Developer (Magang)',
      company: 'Bank Sampah Sumber Jaya Kranggan',
      dateText: 'September 2024 — Januari 2025',
      datetime: '2024-09/2025-01',
      bullets: [
        'Mengembangkan aplikasi berbasis Android sesuai dengan kebutuhan sistem.',
        'Mengimplementasikan dan menguji fitur aplikasi.',
        'Melakukan perbaikan dan pengembangan aplikasi.',
      ],
      chips: ['Java', 'Android Studio', 'Firebase', 'Testing'],
    },
    {
      id: 'cs-igo',
      title: 'Customer Service (Full Time)',
      company: 'Toko Online IGO Indonesia',
      dateText: 'Agustus 2021 - Desember 2022',
      datetime: '2021-08/2022-12',
      bullets: [
        'Bertanggung jawab mengoordinasikan tim Customer Service dalam melayani pelanggan.',
        'Menangani pertanyaan, keluhan, dan kendala terkait pesanan.',
        'Memantau kualitas pelayanan dan memastikan kebutuhan pelanggan tertangani dengan baik.',
      ],
      chips: ['Leadership', 'Team Work', 'Komunikasi', 'Problem Solving'],
    },
    {
      id: 'ga-astra',
      title: 'General Affair (Praktik Kerja Lapangan)',
      company: 'PT. Astra Otoparts Tbk. Divisi Winteq',
      dateText: 'April 2019 — Juli 2019',
      datetime: '2019-04/2019-07',
      bullets: [
        'Membantu pengelolaan administrasi dan dokumen perusahaan.',
        'Melakukan pendataan kebutuhan dan fasilitas perusahaan.',
        'Mendukung kegiatan General Affair dalam menunjang kelancaran operasional perusahaan.',
      ],
      chips: ['Administrasi', 'Pendataan'],
    },
  ]

  const placeholderSvgFallback =
    "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%231e1e2a'/%3E%3Cpath d='M140 180l40-50 50 60h-90zm90-20l30 40h-60l30-40z' fill='%236366f1'/%3E%3Ccircle cx='160' cy='110' r='14' fill='%23a855f7'/%3E%3Ctext x='50%25' y='245' text-anchor='middle' fill='%238888a8' font-family='sans-serif' font-size='13' font-weight='600'%3EDokumentasi Foto%3C/text%3E%3C/svg%3E"

  return (
    <section id="experience" className="section section--alt" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-header fade-in visible">
          <span className="section-tag">03 · Experience</span>
          <h2 id="experience-heading" className="section-title">Pengalaman</h2>
        </div>
        <div className="timeline">
          {experiences.map(exp => {
            const photos = experiencePhotos.filter(p => p.experienceId === exp.id)
            const maxVisible = 4
            const visiblePhotos = photos.slice(0, maxVisible)
            const hasMore = photos.length > maxVisible
            const remainingCount = photos.length - maxVisible

            return (
              <div key={exp.id} className="timeline-item fade-in visible">
                <div className="timeline-dot" aria-hidden="true"></div>
                <div className="timeline-card">
                  <div className="timeline-card__header">
                    <div>
                      <h3 className="timeline-card__title">{exp.title}</h3>
                      <p className="timeline-card__company">{exp.company}</p>
                    </div>
                    <time className="timeline-card__date" dateTime={exp.datetime}>
                      {exp.dateText}
                    </time>
                  </div>
                  <ul className="timeline-card__list">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="timeline-card__chips">
                    {exp.chips.map(chip => (
                      <span key={chip} className="chip-sm">{chip}</span>
                    ))}
                  </div>

                  {photos.length > 0 && (
                    <div className="doc-gallery" aria-label={`Galeri dokumentasi ${exp.title}`}>
                      <div className="doc-gallery__label">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span>Dokumentasi ({photos.length} foto)</span>
                      </div>
                      <div className="doc-gallery__strip">
                        {visiblePhotos.map((photo, idx) => {
                          const isLastWithMore = hasMore && idx === maxVisible - 1
                          return (
                            <button
                              key={idx}
                              type="button"
                              className={`doc-thumb${isLastWithMore ? ' doc-thumb--more' : ''}`}
                              aria-label={
                                isLastWithMore
                                  ? `Lihat foto dokumentasi: ${photo.caption} (dan ${remainingCount} foto lainnya)`
                                  : `Lihat foto dokumentasi: ${photo.caption}`
                              }
                              onClick={() => onOpenLightbox(photos, idx)}
                            >
                              <img
                                src={photo.src.startsWith('/') ? photo.src : `/${photo.src}`}
                                alt={photo.caption || `Foto dokumentasi ${idx + 1}`}
                                loading="lazy"
                                onError={e => {
                                  e.currentTarget.onerror = null
                                  e.currentTarget.src = placeholderSvgFallback
                                }}
                              />
                              {isLastWithMore && (
                                <span className="doc-thumb__more-overlay" aria-hidden="true">
                                  +{remainingCount}
                                </span>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect, useRef } from 'react'
import { galleryData } from '../data/portfolioData'

export default function CertModal({ isOpen, onClose, onOpenLightbox }) {
  const [batchCount, setBatchCount] = useState(1)
  const closeBtnRef = useRef(null)
  const BATCH_SIZE = 24

  const placeholderSvgFallback =
    "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%231e1e2a'/%3E%3Cpath d='M140 180l40-50 50 60h-90zm90-20l30 40h-60l30-40z' fill='%236366f1'/%3E%3Ccircle cx='160' cy='110' r='14' fill='%23a855f7'/%3E%3Ctext x='50%25' y='245' text-anchor='middle' fill='%238888a8' font-family='sans-serif' font-size='13' font-weight='600'%3EDokumentasi Foto%3C/text%3E%3C/svg%3E"

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const timer = setTimeout(() => {
        closeBtnRef.current?.focus()
      }, 80)
      return () => clearTimeout(timer)
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const allCerts = galleryData.certificates
  const totalCount = allCerts.length
  const displayedCount = Math.min(batchCount * BATCH_SIZE, totalCount)
  const batchList = allCerts.slice(0, displayedCount)
  const hasMore = displayedCount < totalCount

  const handleThumbClick = (index) => {
    const lightboxPhotos = allCerts.map(c => ({
      src: c.image.startsWith('/') ? c.image : `/${c.image}`,
      caption: `${c.title} — ${c.issuer} (${c.year})`,
    }))
    onOpenLightbox(lightboxPhotos, index)
  }

  const handleClose = () => {
    setBatchCount(1)
    onClose()
  }

  return (
    <div
      id="cert-modal"
      className="certmodal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certmodal-title"
      aria-hidden="false"
    >
      <div className="certmodal-backdrop" id="certmodal-backdrop" onClick={handleClose}></div>
      <div className="certmodal-dialog" role="document">
        {/* Sticky Header */}
        <header className="certmodal-header">
          <div className="certmodal-header__top">
            <div className="certmodal-header__title-group">
              <h2 id="certmodal-title" className="certmodal-title">Semua Sertifikat</h2>
              <span className="certmodal-title-count" id="certmodal-title-count" aria-label="Jumlah total sertifikat">
                ({totalCount})
              </span>
            </div>
            <button
              ref={closeBtnRef}
              type="button"
              className="certmodal-close"
              id="certmodal-close"
              aria-label="Tutup panel semua sertifikat (Esc)"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </header>

        {/* Modal Body (Grid Thumbnail) */}
        <div className="certmodal-body" id="certmodal-body">
          <div className="certmodal-grid" id="certmodal-grid" aria-label="Daftar thumbnail sertifikat">
            {batchList.map((cert, idx) => {
              const imgSrc = cert.image.startsWith('/') ? cert.image : `/${cert.image}`
              return (
                <button
                  key={cert.title + idx}
                  type="button"
                  className="certmodal-thumb fade-in visible"
                  aria-label={`Perbesar sertifikat: ${cert.title} dari ${cert.issuer} (${cert.year})`}
                  onClick={() => handleThumbClick(idx)}
                >
                  <div className="certmodal-thumb__img-wrap">
                    <img
                      src={imgSrc}
                      alt={`Sertifikat ${cert.title} dari ${cert.issuer} (${cert.year})`}
                      width="300"
                      height="225"
                      loading="lazy"
                      decoding="async"
                      className="certmodal-thumb__img"
                      onError={e => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = placeholderSvgFallback
                      }}
                    />
                    <div className="certmodal-thumb__overlay" aria-hidden="true">
                      <span className="certmodal-thumb__title">{cert.title}</span>
                      <span className="certmodal-thumb__issuer">{cert.issuer}</span>
                      <span className="certmodal-thumb__year">{cert.year}</span>
                    </div>
                  </div>
                  <div className="certmodal-thumb__touch-caption" aria-hidden="true">
                    <span className="certmodal-thumb__touch-title">{cert.title}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Load More Batch Button */}
          {hasMore && (
            <div className="certmodal-more-wrap" id="certmodal-more-wrap">
              <button
                type="button"
                className="btn btn--outline certmodal-more-btn"
                id="certmodal-btn-more"
                onClick={() => setBatchCount(prev => prev + 1)}
              >
                <span id="certmodal-btn-more-text">
                  Muat lebih banyak ({totalCount - displayedCount} tersisa)
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

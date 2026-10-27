import { useState, useMemo } from 'react'
import { galleryData } from '../data/portfolioData'

export default function Gallery({ onOpenLightbox, onOpenCertModal }) {
  const [activeTab, setActiveTab] = useState('certificates')

  const placeholderSvgFallback =
    "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%231e1e2a'/%3E%3Cpath d='M140 180l40-50 50 60h-90zm90-20l30 40h-60l30-40z' fill='%236366f1'/%3E%3Ccircle cx='160' cy='110' r='14' fill='%23a855f7'/%3E%3Ctext x='50%25' y='245' text-anchor='middle' fill='%238888a8' font-family='sans-serif' font-size='13' font-weight='600'%3EDokumentasi Foto%3C/text%3E%3C/svg%3E"

  // Sorted certificates (newest first)
  const sortedCertificates = useMemo(() => {
    return [...galleryData.certificates].sort(
      (a, b) => parseInt(b.year, 10) - parseInt(a.year, 10)
    )
  }, [])

  const displayedCertificates = useMemo(() => {
    return sortedCertificates.slice(0, 6)
  }, [sortedCertificates])

  const handleOpenFeaturedCert = (index) => {
    const photos = displayedCertificates.map(c => ({
      src: c.image.startsWith('/') ? c.image : `/${c.image}`,
      caption: `${c.title} — ${c.issuer} (${c.year})`,
    }))
    onOpenLightbox(photos, index)
  }

  const handleOpenAlbum = (album) => {
    const photos = album.photos.map(p => ({
      src: p.src.startsWith('/') ? p.src : `/${p.src}`,
      caption: p.caption,
    }))
    onOpenLightbox(photos, 0)
  }

  return (
    <section id="gallery" className="section" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="section-header fade-in visible">
          <span className="section-tag">05 · Gallery</span>
          <h2 id="gallery-heading" className="section-title">Sertifikat &amp; Dokumentasi</h2>
          <p className="section-subtitle">Bukti nyata pembelajaran dan kegiatan selama kuliah.</p>
        </div>

        {/* Gallery Tabs */}
        <div className="gallery-tabs-wrap fade-in visible">
          <div className="gallery-tabs" role="tablist" aria-label="Pilihan galeri">
            <button
              type="button"
              className={`gallery-tab ${activeTab === 'certificates' ? 'active' : ''}`}
              role="tab"
              id="tab-certificates"
              aria-selected={activeTab === 'certificates'}
              aria-controls="panel-certificates"
              tabIndex={activeTab === 'certificates' ? 0 : -1}
              onClick={() => setActiveTab('certificates')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="gallery-tab__icon"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
              <span>Sertifikat</span>
            </button>
            <button
              type="button"
              className={`gallery-tab ${activeTab === 'activities' ? 'active' : ''}`}
              role="tab"
              id="tab-activities"
              aria-selected={activeTab === 'activities'}
              aria-controls="panel-activities"
              tabIndex={activeTab === 'activities' ? 0 : -1}
              onClick={() => setActiveTab('activities')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="gallery-tab__icon"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span>Kegiatan Kuliah</span>
            </button>
          </div>
        </div>

        {/* Gallery Panels */}
        <div className="gallery-panels">
          {/* Tab Panel: Sertifikat */}
          <div
            id="panel-certificates"
            className={`gallery-panel ${activeTab === 'certificates' ? 'active fade-in-show' : ''}`}
            role="tabpanel"
            aria-labelledby="tab-certificates"
            tabIndex={0}
            hidden={activeTab !== 'certificates'}
          >
            <div className="cert-featured-grid" id="cert-featured-grid" aria-label="Sertifikat terbaru">
              {displayedCertificates.map((cert, idx) => {
                const hasLink = Boolean(cert.link && cert.link.trim() !== '')
                const imgSrc = cert.image.startsWith('/') ? cert.image : `/${cert.image}`

                return (
                  <article
                    key={cert.title + idx}
                    className="cert-card fade-in visible"
                    tabIndex={0}
                    role="button"
                    aria-haspopup="dialog"
                    aria-label={`Sertifikat ${cert.title} dari ${cert.issuer} (${cert.year})`}
                    onClick={e => {
                      if (!e.target.closest('a')) {
                        handleOpenFeaturedCert(idx)
                      }
                    }}
                    onKeyDown={e => {
                      if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('a')) {
                        e.preventDefault()
                        handleOpenFeaturedCert(idx)
                      }
                    }}
                  >
                    <div className="cert-card__media-wrap">
                      <button
                        type="button"
                        className="cert-card__media"
                        aria-label={`Perbesar foto: ${cert.title}`}
                        onClick={e => {
                          e.stopPropagation()
                          handleOpenFeaturedCert(idx)
                        }}
                      >
                        <img
                          src={imgSrc}
                          alt={`Sertifikat ${cert.title} dari ${cert.issuer} (${cert.year})`}
                          width="400"
                          height="300"
                          loading="lazy"
                          decoding="async"
                          className="cert-card__img"
                          onError={e => {
                            e.currentTarget.onerror = null
                            e.currentTarget.src = placeholderSvgFallback
                          }}
                        />
                        <div className="cert-card__overlay" aria-hidden="true">
                          <span className="cert-card__zoom-badge">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              aria-hidden="true"
                            >
                              <circle cx="11" cy="11" r="8" />
                              <line x1="21" y1="21" x2="16.65" y2="16.65" />
                              <line x1="11" y1="8" x2="11" y2="14" />
                              <line x1="8" y1="11" x2="14" y2="11" />
                            </svg>
                            Perbesar
                          </span>
                        </div>
                      </button>
                    </div>
                    <div className="cert-card__body">
                      <div className="cert-card__header-meta">
                        <time className="cert-card__year" dateTime={cert.year}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="cert-card__year-icon"
                            aria-hidden="true"
                          >
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          {cert.year}
                        </time>
                      </div>
                      <h3 className="cert-card__title">{cert.title}</h3>
                      <p className="cert-card__issuer">{cert.issuer}</p>
                      {hasLink && (
                        <div className="cert-card__footer">
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-card__link-btn"
                            aria-label={`Lihat Kredensial ${cert.title} (buka tab baru)`}
                          >
                            <span>Lihat Kredensial</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              aria-hidden="true"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Tombol Buka Modal Semua Sertifikat */}
            <div className="cert-all-action">
              <button
                type="button"
                className="btn btn--outline cert-all-btn"
                id="btn-open-cert-modal"
                aria-haspopup="dialog"
                onClick={onOpenCertModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="cert-all-btn__icon"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
                <span id="btn-open-cert-modal-text">
                  Lihat Semua Sertifikat ({galleryData.certificates.length})
                </span>
              </button>
            </div>
          </div>

          {/* Tab Panel: Kegiatan Kuliah (Album Grid) */}
          <div
            id="panel-activities"
            className={`gallery-panel ${activeTab === 'activities' ? 'active fade-in-show' : ''}`}
            role="tabpanel"
            aria-labelledby="tab-activities"
            tabIndex={0}
            hidden={activeTab !== 'activities'}
          >
            <div className="album-grid" id="album-grid" aria-label="Daftar kegiatan kuliah">
              {galleryData.albums.map((album, aIdx) => {
                const firstPhoto =
                  album.photos && album.photos[0]
                    ? album.photos[0]
                    : { src: placeholderSvgFallback, caption: album.title }
                const coverSrc = firstPhoto.src.startsWith('/') ? firstPhoto.src : `/${firstPhoto.src}`
                const photoCount = album.photos ? album.photos.length : 0

                return (
                  <article
                    key={album.title + aIdx}
                    className="album-card fade-in visible"
                    tabIndex={0}
                    role="button"
                    aria-haspopup="dialog"
                    aria-label={`Buka kegiatan ${album.title} (${photoCount} foto)`}
                    onClick={() => handleOpenAlbum(album)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        handleOpenAlbum(album)
                      }
                    }}
                  >
                    <div className="album-card__cover-wrap">
                      <span className="album-card__count-badge">
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
                        {photoCount} foto
                      </span>
                      <img
                        src={coverSrc}
                        alt={`Foto utama ${album.title}`}
                        width="600"
                        height="375"
                        loading="lazy"
                        className="album-card__cover"
                        onError={e => {
                          e.currentTarget.onerror = null
                          e.currentTarget.src = placeholderSvgFallback
                        }}
                      />
                      <div className="album-card__overlay" aria-hidden="true">
                        <span className="album-card__action-hint">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                          Lihat Semua Foto
                        </span>
                      </div>
                    </div>
                    <div className="album-card__body">
                      <h3 className="album-card__title">{album.title}</h3>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

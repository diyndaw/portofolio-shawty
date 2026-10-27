import { useEffect, useRef, useState, useCallback } from 'react'

export default function Lightbox({ isOpen, photos = [], activeIndex = 0, onClose, onIndexChange }) {
  const closeBtnRef = useRef(null)
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 })
  const [imgAnim, setImgAnim] = useState({ opacity: 1, scale: 1 })

  const placeholderSvgFallback =
    "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%231e1e2a'/%3E%3Cpath d='M140 180l40-50 50 60h-90zm90-20l30 40h-60l30-40z' fill='%236366f1'/%3E%3Ccircle cx='160' cy='110' r='14' fill='%23a855f7'/%3E%3Ctext x='50%25' y='245' text-anchor='middle' fill='%238888a8' font-family='sans-serif' font-size='13' font-weight='600'%3EDokumentasi Foto%3C/text%3E%3C/svg%3E"

  const triggerTransition = useCallback((newIdx) => {
    setImgAnim({ opacity: 0, scale: 0.96 })
    setTimeout(() => {
      onIndexChange(newIdx)
      setImgAnim({ opacity: 1, scale: 1 })
    }, 120)
  }, [onIndexChange])

  const handlePrev = useCallback(() => {
    if (!photos.length) return
    const prev = (activeIndex - 1 + photos.length) % photos.length
    triggerTransition(prev)
  }, [photos.length, activeIndex, triggerTransition])

  const handleNext = useCallback(() => {
    if (!photos.length) return
    const next = (activeIndex + 1) % photos.length
    triggerTransition(next)
  }, [photos.length, activeIndex, triggerTransition])

  useEffect(() => {
    if (!isOpen) return

    closeBtnRef.current?.focus()

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleNext, handlePrev, onClose])

  const handleTouchStart = (e) => {
    setTouchStart({
      x: e.changedTouches[0].screenX,
      y: e.changedTouches[0].screenY,
    })
  }

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].screenX
    const endY = e.changedTouches[0].screenY
    const deltaX = endX - touchStart.x
    const deltaY = endY - touchStart.y

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        handlePrev()
      } else {
        handleNext()
      }
    }
  }

  if (!isOpen || !photos.length) return null

  const currentPhoto = photos[activeIndex] || {}
  const imgSrc = (currentPhoto.src || '').startsWith('/')
    ? currentPhoto.src
    : `/${currentPhoto.src || ''}`

  return (
    <div
      id="lightbox"
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Lightbox galeri foto"
      aria-hidden="false"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={e => {
        if (e.target.id === 'lightbox' || e.target.id === 'lightbox-backdrop') {
          onClose()
        }
      }}
    >
      <div className="lightbox__backdrop" id="lightbox-backdrop"></div>
      <div className="lightbox__container">
        <button
          ref={closeBtnRef}
          className="lightbox__close"
          id="lightbox-close"
          aria-label="Tutup galeri (Esc)"
          onClick={onClose}
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

        <button
          className="lightbox__nav lightbox__nav--prev"
          id="lightbox-prev"
          aria-label="Foto sebelumnya (panah kiri)"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <figure className="lightbox__figure">
          <img
            id="lightbox-img"
            src={imgSrc}
            alt={currentPhoto.caption || 'Foto dokumentasi'}
            className="lightbox__image"
            style={{
              opacity: imgAnim.opacity,
              transform: `scale(${imgAnim.scale})`,
              transition: 'opacity 0.15s ease, transform 0.15s ease',
            }}
            onError={e => {
              e.currentTarget.onerror = null
              e.currentTarget.src = placeholderSvgFallback
            }}
          />
          <figcaption id="lightbox-caption" className="lightbox__caption">
            {currentPhoto.caption || ''}
          </figcaption>
        </figure>

        <button
          className="lightbox__nav lightbox__nav--next"
          id="lightbox-next"
          aria-label="Foto berikutnya (panah kanan)"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <p className="lightbox__counter" id="lightbox-counter" aria-live="polite">
          {activeIndex + 1} / {photos.length}
        </p>
      </div>
    </div>
  )
}

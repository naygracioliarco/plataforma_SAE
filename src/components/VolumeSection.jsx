import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function VolumeSection({ volume, onOpenModal }) {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true)
        })
      },
      { rootMargin: '-10% 0px -10% 0px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id={`volume-${volume.id}`}
      className={`volume ${visible ? 'visible' : ''}`}
      data-volume={volume.id}
    >
      <div className="volume-header">
        <span className="volume-badge">{volume.badge}</span>
        <h2 className="volume-section-title">Livros Digitais</h2>
        <p className="volume-desc">{volume.description}</p>
      </div>

      {/* Cards dos capítulos */}
      <div className="chapters-cards">
        {volume.chapters.slice(0, 6).map((chapter, i) => (
          <button
            key={i}
            type="button"
            className="chapter-card"
            onClick={() => onOpenModal('volume' + volume.id)}
          >
            <div className="chapter-card-inner">
              <span className="chapter-card-num">Cap. {i + 1}</span>
            </div>
            <div className="chapter-card-band">
              <span className="chapter-card-title">{chapter}</span>
              <span className="chapter-card-arrow" aria-hidden>→</span>
            </div>
          </button>
        ))}
      </div>

      {/* Vídeo ou GIF centralizado */}
      <div className="volume-media-wrap">
        <div className="volume-media">
          <div className="placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M10 9l5 3-5 3V9z" />
            </svg>
            {volume.mediaPlaceholder}
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className="volume-actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onOpenModal('volume' + volume.id)}
        >
          Ver capítulos
        </button>
        <Link to={`/volume/${volume.id}`} className="btn btn-secondary">
          Ver página completa
        </Link>
      </div>
    </section>
  )
}

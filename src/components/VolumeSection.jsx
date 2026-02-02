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
      className={`volume ${visible ? 'visible' : ''}`}
      data-volume={volume.id}
    >
      <div className="volume-header">
        <span className="volume-badge">{volume.badge}</span>
        <h2>{volume.title}</h2>
        <p className="volume-desc">{volume.description}</p>
      </div>
      <div className="volume-media">
        <div className="placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M10 9l5 3-5 3V9z" />
          </svg>
          {volume.mediaPlaceholder}
        </div>
      </div>
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

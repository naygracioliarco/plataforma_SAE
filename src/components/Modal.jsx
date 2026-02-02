import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Modal({ isOpen, onClose, title, chapters, volumeId }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div
      className="modal-overlay open"
      aria-hidden="false"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        <div className="modal-header">
          <h3>{title}</h3>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Fechar"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <ul className="chapters-list">
            {chapters.map((chapter, i) => (
              <li key={i}>
                <span className="chapter-num">{i + 1}</span>
                {chapter}
              </li>
            ))}
          </ul>
        </div>
        <div className="modal-footer">
          <Link to={`/volume/${volumeId}`} className="btn btn-primary" onClick={onClose}>
            Ver página completa do volume
          </Link>
        </div>
      </div>
    </div>
  )
}

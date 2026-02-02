import { useState, useEffect } from 'react'
import { volumes } from '../data/volumes'

const menuItems = volumes.map((v) => ({
  label: v.sectionTitle,
  id: `volume-${v.id}`,
}))

export default function Nav() {
  const [activeId, setActiveId] = useState('volume-1')

  useEffect(() => {
    const sections = menuItems.map((item) => document.getElementById(item.id)).filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="nav-bar" aria-label="Menu principal">
      <div className="nav-bar-inner">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-link ${activeId === item.id ? 'nav-link--active' : ''}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

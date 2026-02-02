import { useState } from 'react'
import Hero from '../components/Hero'
import VolumeSection from '../components/VolumeSection'
import Modal from '../components/Modal'
import BackToTop from '../components/BackToTop'
import { volumes } from '../data/volumes'

export default function Home() {
  const [openModalId, setOpenModalId] = useState(null)
  const volume = openModalId ? volumes.find((v) => 'volume' + v.id === openModalId) : null

  return (
    <>
      <Hero />
      <main>
        {volumes.map((v) => (
          <VolumeSection
            key={v.id}
            volume={v}
            onOpenModal={setOpenModalId}
          />
        ))}
      </main>
      {volume && (
        <Modal
          isOpen={!!openModalId}
          onClose={() => setOpenModalId(null)}
          title={`${volume.badge} — Capítulos`}
          chapters={volume.chapters}
          volumeId={volume.id}
        />
      )}
      <BackToTop />
    </>
  )
}

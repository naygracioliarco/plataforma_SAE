import { Link, useParams } from 'react-router-dom'
import { volumes } from '../data/volumes'

export default function VolumeDetalhe() {
  const { id } = useParams()
  const volume = volumes.find((v) => v.id === id)

  if (!volume) {
    return (
      <div className="detalhe-page">
        <Link to="/" className="back">← Voltar para Inovações por Volume</Link>
        <h1>Volume não encontrado</h1>
        <p>O volume solicitado não existe.</p>
      </div>
    )
  }

  return (
    <div className="detalhe-page">
      <Link to="/" className="back">← Voltar para Inovações por Volume</Link>
      <h1>{volume.badge} — {volume.title}</h1>
      <p>
        Esta é a página de detalhe do {volume.badge}. Aqui você pode listar todos os capítulos,
        links para os livros digitais, jogos e recursos de RA. Personalize o conteúdo conforme seu material.
      </p>
    </div>
  )
}

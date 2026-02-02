import { Link, useParams } from 'react-router-dom'
import { volumes, SEGMENTOS } from '../data/volumes'

export default function VolumeDetalhe() {
  const { id } = useParams()
  const volume = volumes.find((v) => v.volumeId === id || v.id === id)

  if (!volume) {
    return (
      <div className="detalhe-page">
        <Link to="/" className="back">← Voltar para Inovações por Volume</Link>
        <h1>Página não encontrada</h1>
        <p>A página solicitada não existe.</p>
      </div>
    )
  }

  return (
    <div className="detalhe-page">
      <Link to="/" className="back">← Voltar para Inovações por Volume</Link>
      <h1 className="detalhe-page-title">{volume.sectionTitle}</h1>
      <p className="detalhe-page-desc">{volume.description}</p>

      <div className="detalhe-segmentos">
        {SEGMENTOS.map((segmento) => (
          <section key={segmento} className="segmento">
            <h2 className="segmento-titulo">{segmento}</h2>
            <div className="segmento-conteudo">
              <p className="segmento-placeholder">
                Conteúdo de <strong>{segmento}</strong> para {volume.sectionTitle}. 
                Inclua aqui os materiais, links ou recursos específicos deste segmento.
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

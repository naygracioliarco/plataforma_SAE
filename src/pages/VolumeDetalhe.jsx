import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { volumes, SEGMENTOS } from '../data/volumes'

export default function VolumeDetalhe() {
  const { id } = useParams()
  const volume = volumes.find((v) => v.volumeId === id || v.id === id)
  const [segmentoAtivo, setSegmentoAtivo] = useState(SEGMENTOS[0])

  if (!volume) {
    return (
      <div className="detalhe-page detalhe-page--erro">
        <Link to="/" className="back">← Voltar para Inovações por Volume</Link>
        <h1>Página não encontrada</h1>
        <p>A página solicitada não existe.</p>
      </div>
    )
  }

  return (
    <div className="detalhe-page">
      <aside className="detalhe-sidebar">
        <div className="detalhe-filtros-header">
          <span className="detalhe-filtros-icon" aria-hidden>▾</span>
          <h2 className="detalhe-filtros-titulo">Filtros</h2>
        </div>
        <nav className="detalhe-filtros-nav" aria-label="Segmentos">
          {SEGMENTOS.map((segmento) => (
            <button
              key={segmento}
              type="button"
              className={`detalhe-filtro-item ${segmentoAtivo === segmento ? 'detalhe-filtro-item--ativo' : ''}`}
              onClick={() => setSegmentoAtivo(segmento)}
            >
              <span className="detalhe-filtro-item-texto">{segmento}</span>
              <span className="detalhe-filtro-item-chevron" aria-hidden>▼</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="detalhe-main">
        <Link to="/" className="back">← Voltar para Inovações por Volume</Link>

        <section className="detalhe-conteudo">
          <h1 className="detalhe-conteudo-titulo">{segmentoAtivo}</h1>
          <div className="detalhe-conteudo-corpo">
            <p className="segmento-placeholder">
              Conteúdo de <strong>{segmentoAtivo}</strong> para {volume.sectionTitle}. 
              Inclua aqui os materiais, links ou recursos específicos deste segmento.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

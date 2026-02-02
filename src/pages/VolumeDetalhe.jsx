import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { volumes, SEGMENTOS, COMPONENTES_CURRICULARES } from '../data/volumes'

function FiltroBloco({ titulo, opcoes, valorAtivo, onChange, aberto, onToggle, comScroll }) {
  return (
    <div className="filtro-bloco">
      <button
        type="button"
        className="filtro-bloco-header"
        onClick={onToggle}
        aria-expanded={aberto}
      >
        <span className="filtro-bloco-titulo">{titulo}</span>
        <span className="filtro-bloco-chevron" aria-hidden>{aberto ? '▲' : '▼'}</span>
      </button>
      {aberto && (
        <div className={`filtro-bloco-opcoes ${comScroll ? 'filtro-bloco-opcoes--scroll' : ''}`}>
          {opcoes.map((opcao) => (
            <label
              key={opcao}
              className={`filtro-opcao ${valorAtivo === opcao ? 'filtro-opcao--ativo' : ''}`}
            >
              <input
                type="radio"
                name={titulo.replace(/\s/g, '-')}
                value={opcao}
                checked={valorAtivo === opcao}
                onChange={() => onChange(opcao)}
                className="filtro-opcao-input"
              />
              <span className="filtro-opcao-radio" aria-hidden />
              <span className="filtro-opcao-texto">{opcao}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default function VolumeDetalhe() {
  const { id } = useParams()
  const volume = volumes.find((v) => v.volumeId === id || v.id === id)
  const [segmentoAtivo, setSegmentoAtivo] = useState(SEGMENTOS[0])
  const [componenteAtivo, setComponenteAtivo] = useState(COMPONENTES_CURRICULARES[0])
  const [segmentosAberto, setSegmentosAberto] = useState(true)
  const [componenteAberto, setComponenteAberto] = useState(true)

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
        <FiltroBloco
          titulo="Segmentos"
          opcoes={SEGMENTOS}
          valorAtivo={segmentoAtivo}
          onChange={setSegmentoAtivo}
          aberto={segmentosAberto}
          onToggle={() => setSegmentosAberto((a) => !a)}
        />
        <FiltroBloco
          titulo="Componente Curricular"
          opcoes={COMPONENTES_CURRICULARES}
          valorAtivo={componenteAtivo}
          onChange={setComponenteAtivo}
          aberto={componenteAberto}
          onToggle={() => setComponenteAberto((a) => !a)}
          comScroll
        />
      </aside>

      <main className="detalhe-main">
        <Link to="/" className="back">← Voltar para Inovações por Volume</Link>

        <section className="detalhe-conteudo">
          <h1 className="detalhe-conteudo-titulo">{segmentoAtivo} — {componenteAtivo}</h1>
          <div className="detalhe-conteudo-corpo">
            <p className="segmento-placeholder">
              Conteúdo de <strong>{segmentoAtivo}</strong> e <strong>{componenteAtivo}</strong> para {volume.sectionTitle}. 
              Inclua aqui os materiais, links ou recursos específicos.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

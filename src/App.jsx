import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VolumeDetalhe from './pages/VolumeDetalhe'
import './App.css'

// Para GitHub Pages: base sem barra no final (ex: /plataforma_SAE)
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volume/:id" element={<VolumeDetalhe />} />
      </Routes>
    </BrowserRouter>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VolumeDetalhe from './pages/VolumeDetalhe'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volume/:id" element={<VolumeDetalhe />} />
      </Routes>
    </BrowserRouter>
  )
}

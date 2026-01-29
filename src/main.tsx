import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import Layout from './components/Layout.tsx'
import App from './App.tsx'
import Invatare from './pages/Invatare.tsx'
import Dosar from './pages/Dosar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/invatare" element={<Invatare />} />
          <Route path="/dosar" element={<Dosar />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)

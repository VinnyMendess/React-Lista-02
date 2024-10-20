import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Botao from './components/Botao'
import Paragrafo from './components/Corinthians'
import OlaMundo from './components/Hellloword'
import Imagem from './components/Imagem'
import Link from './components/Link'
import ListaOL from './components/ListaOL'
import Sinopse from './components/Sinopse.jsx'
import Boa from './components/Educacao.jsx'
import Estilo from './components/Estilo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <OlaMundo/>
    <Paragrafo/>
    <ListaOL/>
    <Imagem/>
    <br/>
    <Botao/>
    <Link/>
    <br/>
    <Sinopse/>
    <Boa Boat={false} />
    <br/>
    <Estilo/>
      
  </StrictMode>,
)

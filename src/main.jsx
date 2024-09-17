import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GetMovie from './component/GetMovie'
import './asset/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GetMovie />
  </StrictMode>,
)

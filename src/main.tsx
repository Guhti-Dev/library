import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/Router/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
    <App />
  </StrictMode>,
)

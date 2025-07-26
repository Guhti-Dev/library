import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/home.tsx'
//import Login from './pages/Login/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
    <Home/>
  </StrictMode>,
)

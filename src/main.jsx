import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/Index'
import './styles/global.css'
import './styles/responsivo.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
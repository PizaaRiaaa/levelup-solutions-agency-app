import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './App.css'
import { Routes } from './router/router'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Routes />
    </StrictMode>
)

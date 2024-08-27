import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './Contexts/ContextProvider.jsx'
import { AuthContextProvider } from './Contexts/AuthContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ContextProvider>
  </React.StrictMode>,
)

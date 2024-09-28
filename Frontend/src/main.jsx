import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
  <div className='dark:bg-sslate-900 dark:text-white'>
  <App></App>
  </div>
  </AuthProvider>
  </BrowserRouter>
)

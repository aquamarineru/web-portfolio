import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import './index.css'
const router = createBrowserRouter([
  {
    path: '/',  
    element: <div className='main'>
      <Header />
      <Home />
    </div>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

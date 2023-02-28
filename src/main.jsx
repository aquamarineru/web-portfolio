import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
//import Expirience from './components/expirience/Expirience'
//import data from './components/expirience/data.json'
import Social from './components/home/Social'
import Contact from './components/contact/Contact'
import './index.css'
const router = createBrowserRouter([
  {
    path: '/',  
    element: <div className='main'>
      <Header />
      <Social />
      <Home />
      <About />
      <Skills />
      <Services />
{/* <Expirience data={data}/> */}
      <Contact />
    </div>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

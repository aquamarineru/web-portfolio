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
import Footer from './components/footer/Footer'
import Impressum from './components/impressum/Impressum'
import ScrollUp from './components/scrollup/ScrollUp'
import Work from './components/work/Work'
import './index.css'
const router = createBrowserRouter([
  {
    path: '/',  
    element: <>
    <main className='main'>
      <Header />
      <Social />
      <Home />
      <About />
      <Skills />
      <Services />
      <Work />
{/* <Expirience data={data}/> */}
      <Contact />
    </main>
    <Footer />
    <ScrollUp />
    </>
  },
  {
    path: '/impressum',
    element: <Impressum />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

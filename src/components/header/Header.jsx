import React, { useState} from 'react'
import './header.scss'
import {AiOutlineHome, AiOutlineUser, AiOutlineSend, AiOutlineFileDone, AiOutlinePicture, AiOutlineClose, AiOutlineAppstore} from 'react-icons/ai'
import {MdOutlineHomeRepairService} from 'react-icons/md'

export default function Header() {
    /* Toggle menu */
    const [navOpen, setNavOpen] = useState(false)
    const [activeNav, setActiveNav] = useState("")

    /* Change background header */
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
    //when the scroll is higher than 200 viewport height, add the scroll-header class to the a tag with header tag
        if (this.scrollY >= 80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
       })
  return (
    <div>
      <header className="header">
        <nav className="nav container">
            <a href="#home" className="nav__logo">Aquamarine</a>
            <div className={navOpen ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className={activeNav === "#home" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#home')}>
                            <AiOutlineHome className="nav__icon" size={25}/> Home
                        </a>
                        </li>
                    <li className="nav__item">
                        <a href="#about" className={activeNav === "#about" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#about')}>
                            <AiOutlineUser className="nav__icon" size={25}/>About
                        </a>
                        </li>
                    <li className="nav__item">
                        <a href="#skills" className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#skills')}>
                            <AiOutlineFileDone className="nav__icon" size={25}/>Skills
                        </a>
                        </li>
                    
                    <li className="nav__item">
                        <a href="#services" className={activeNav === "#services" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#services')}>
                            <MdOutlineHomeRepairService className="nav__icon" size={25}/> Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#portfolio')}>
                            <AiOutlinePicture className="nav__icon" size={25}/> Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#contact')}>
                            <AiOutlineSend className="nav__icon" size={25}/> Contact
                        </a>
                    </li>
                </ul>
                <AiOutlineClose className="nav__close" id="nav-close" onClick={() => setNavOpen(!navOpen)}/>
            </div>
            <div className="nav__toggle" onClick={() => setNavOpen(!navOpen)}>
                <AiOutlineAppstore className="nav__hamburger" id="nav-toggle" size={25}/>
            </div>
        </nav>
      </header>
    </div>
  )
}

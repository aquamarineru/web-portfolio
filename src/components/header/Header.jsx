import React, { useState} from 'react'
import './header.scss'
import {AiOutlineHome, AiOutlineUser, AiOutlineSend, AiOutlineFileDone, AiOutlinePicture, AiOutlineClose, AiOutlineAppstore} from 'react-icons/ai'
import {MdOutlineHomeRepairService} from 'react-icons/md'

export default function Header() {
    /* Toggle menu */
    const [navOpen, setNavOpen] = useState(false)
  return (
    <div>
      <header className="header">
        <nav className="nav container">
            <a href="#" className="nav__logo">Aquamarine</a>
            <div className={navOpen ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link ">
                            <AiOutlineHome className="nav__icon" size={25}/> Home
                        </a>
                        </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <AiOutlineUser className="nav__icon" size={25}/>About
                        </a>
                        </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <AiOutlineFileDone className="nav__icon" size={25}/>Skills
                        </a>
                        </li>
                    
                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <MdOutlineHomeRepairService className="nav__icon" size={25}/> Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <AiOutlinePicture className="nav__icon" size={25}/> Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
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

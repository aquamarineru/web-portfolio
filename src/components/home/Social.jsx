import React from 'react'
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin} from 'react-icons/fi'
import { TbBrandTelegram } from 'react-icons/tb'
import './social.scss'

export default function Social() {
  return (
    <div className="social">
        <ul className="social__items">
            <li><a href="https://github.com/aquamarineru" className="social__icon" target='_blank'><FiGithub /></a></li>
            <li><a href="https://github.com/aquamarineru" className="social__icon" target='_blank'><FiLinkedin /></a></li>
            <li><a href="https://github.com/aquamarineru" className="social__icon" target='_blank'><FiTwitter /></a></li>
            <li><a href="https://github.com/aquamarineru" className="social__icon" target='_blank'><FiInstagram /></a></li>
            <li><a href="https://github.com/aquamarineru" className="social__icon" target='_blank'><TbBrandTelegram /></a></li>
        </ul>
        <div className="social__email">
            <a className="social__email-item" href="mailto:info@codecrafters.online">info@codecrafters.online</a>
        </div>
       {/*  <a href="https://github.com/aquamarineru" className="home__social-icon" target='_blank'>
            <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/ilyushina/" className="home__social-icon" target='_blank'>
            <FiLinkedin />
        </a>
        <a href="https://twitter.com/aquamarine_gr" className="home__social-icon" target='_blank'>
            <FiTwitter />
        </a>
        <a href="https://www.instagram.com/aquamarine.it/" className="home__social-icon" target='_blank'>
            <FiInstagram />
        </a>
        <a href="https://t.me/aquamarine_gr" className="home__social-icon" target='_blank'>
            <TbBrandTelegram />
        </a> */}
    </div>
  )
}

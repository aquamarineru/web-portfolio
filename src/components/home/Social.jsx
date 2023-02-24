import React from 'react'
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin} from 'react-icons/fi'
import {FaTelegramPlane} from 'react-icons/fa'

export default function Social() {
  return (
    <div className="home__social">
        <a href="https://github.com/aquamarineru" className="home__social-icon" target='_blank'>
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
    </div>
  )
}

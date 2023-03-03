import React, {Link} from 'react'
import { FiInstagram, FiTwitter, FiLinkedin} from 'react-icons/fi'
import { TbBrandTelegram } from 'react-icons/tb'
import Impressum from '../impressum/Impressum'
import './footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Aquamarine</h1>
            <div className="footer__content">
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                        </li>
                    <li>
                        <a href="#project" className="footer__link">Projects</a>
                        </li>
                    <li>
                        <a href="#services" className="footer__link">Services</a>
                        </li>
                    <li>
                        <a href="#" className="footer__link">Impressum</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <div className="footer__social-group">
                        {/* <a href="https://github.com/aquamarineru" className="footer__social-icon" target='_blank'>
                            <FiGithub />
                        </a> */}
                        <a href="https://www.linkedin.com/in/ilyushina/" className="footer__social-icon" target='_blank'>
                            <FiLinkedin />
                        </a>
                        <a href="https://twitter.com/aquamarine_gr" className="footer__social-icon" target='_blank'>
                            <FiTwitter />
                        </a>
                    </div>
                    <div className="footer__social-group">
                        <a href="https://www.instagram.com/aquamarine.it/" className="footer__social-icon" target='_blank'>
                            <FiInstagram />
                        </a>
                        <a href="https://t.me/aquamarine_gr" className="footer__social-icon" target='_blank'>
                            <TbBrandTelegram />
                        </a>
                    </div>
                </div>
            </div>
            <span className="footer__copy">&#169; Aquamarine. All rights reserved</span>
        </div>
    </footer>
  )
}

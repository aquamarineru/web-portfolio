import React from 'react'
import './impressum.scss'

export default function Impressum() {
  return (
    <section className="impressum section">
      <div className="section__title">Impressum</div>
      <div className="section__subtitle"> </div>
      <div className="impressum__container container grid">
        <div className="impressum__data">
          <h3 className="impressum__subtitle">Information according to § 5 TMG:</h3>
          <span className="impressum__text">Max Mustermann</span>
          <span className="impressum__text">Musterstraße 1</span>
          <span className="impressum__text">12345 Musterstadt</span>
          <span className="impressum__text">Germany</span>
        </div>
        <div className="impressum__data">
          <h3 className="impressum__subtitle">Contact:</h3>
          <span className="impressum__text">Phone: +49 123 456789</span>
          <span className="impressum__text">E-Mail:
            <a href="mailto: info@maxmustermann.de" className="impressum__link">  info@maxmustermann.de</a>
          </span>
        </div>
        <div className="impressum__data">
          <h3 className="impressum__subtitle">VAT identification number according to § 27 <br /> a of the German Value Added Tax Act:</h3>
          <span className="impressum__text">DE123456789</span>
        </div>
        <div className="impressum__data">
          <h3 className="impressum__subtitle">Responsible for the content according <br /> to § 55 Abs. 2 RStV:</h3>
          <span className="impressum__text">Max Mustermann</span>
          <span className="impressum__text">Musterstraße 1</span>
          <span className="impressum__text">12345 Musterstadt</span>
          <span className="impressum__text">Germany</span>
        </div>
        <div className="impressum__disclamer">
          <h3 className="impressum__subtitle">Disclaimer:</h3>
          <p className="impressum__text">Despite careful control of the content, we do not assume any liability for the content of external links. <br /> The operators of the linked pages are solely responsible for their content.</p>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import './skills.scss'

export default function Skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <div className="section__subtitle">My technical level</div>
        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

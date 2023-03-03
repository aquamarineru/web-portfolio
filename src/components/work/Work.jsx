import React from 'react'
import Works from './Works'
import './work.scss'

export default function Work() {
  return (
    <section className="work section" id='portfolio'>
        <h2 className="section__title">Portfolio</h2>
        <div className="section__subtitle">My recent works</div>
        <Works />
    </section>
  )
}

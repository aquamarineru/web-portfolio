import React from 'react'
import './expirience.scss'
import { FaGraduationCap } from 'react-icons/fa'
import { FiCalendar } from 'react-icons/fi'


export default function Expirience(props) {
  return (
    <section className="expirience section">
        <h2 className="section__title">Qualification</h2>
        <div className="section__subtitle">My personal journey</div>
        <div className="expirience__container container">
            <div className="expirience__tabs">
                    <FaGraduationCap className="expirience__icon" />
                    Education
                
            </div>
            <div className="expirience__section">
                {
                    props.data.map(content =>(
                <div className="expirience__content expirience__active">
                    <div className="expirience__data">
                        <div>
                            <span className="expirience__tag" style={{background:content.category.color}}>{content.category.tag}</span>
                            <h3 className="expirience__title">{content.title}</h3>
                            <span className="expirience__subtitle">{content.company}</span>
                            <div className="expirience__calendar">
                                <FiCalendar className="expirience__icon" />
                                {content.date}
                            </div>
                            <div className="expirience__description">{content.description}</div>
                            {content.link && (
                            <a href={content.link.url} target="_blank" rel="noopener noreferrer" className='expirience__link'>{content.link.text}</a>
                        )}
                        </div>
                        <div>
                            <span className="expirience__rounder"></span>
                            <span className="vertical"></span>
                        </div>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

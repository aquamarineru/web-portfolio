import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'

export default function WorksItem({item}) {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="work" className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <div className="work__btns">
          <a href={item.url} className="work__button"> Demo
              <AiOutlineArrowRight className="work__button-icon" />
          </a>
          <a href={item.github} className="work__github work__button">
              <FiGithub className="work__github-icon" />
              <AiOutlineArrowRight className="work__icon work__button-icon" />
          </a>
        </div>
    </div>
  )
}

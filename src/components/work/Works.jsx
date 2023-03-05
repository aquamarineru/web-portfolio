import React, { useState, useEffect } from 'react'
import { projectsData } from './Data'
import  { projectsNav } from './Data'
import WorksItem from './WorksItem'

export default function Works() {
    const [item, setItem] = useState({ name: 'all' })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
       if(item.name === 'all') {
           setProjects(projectsData)
       } else {
              const newProjects = projectsData.filter(project => project.category.toLowerCase() === item.name)
              setProjects(newProjects)
       }
    }, [item])
    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() })
        setActive(index)
    }
  return (
    <>
        <div className="work__filters">
            {projectsNav.map((item, index) => {
                return (
                    <span 
                    onClick={(e) => {
                        handleClick(e, index)
                    }}
                    key={index} 
                    className={`${active === index ? 'active-work' : ''} work__item`}
                    >
                        {item.name}
                    </span> //or <a href="#">{item.name}</a>
                )
            })}
        </div>
        <div className="work__container container grid">
            {projects.map((item) => {
                return <WorksItem item={item} key={item.id}/>
            })}
        </div>
    </>
  )
}

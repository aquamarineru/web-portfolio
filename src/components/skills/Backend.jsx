import React from 'react'
import {BiBadgeCheck} from 'react-icons/bi'

export default function Backend() {
  return (
    <div className='skills__content'>
        <h3 className="skills__title">Backend Development</h3>
        <div className="skills__box">
            <ul className="skills__group">
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Node.js</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </li>
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Unit testing</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </li>
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </li>
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">PostgreSQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </li>
            </ul>
            <ul className="skills__group">
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">REST API</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </li>
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">AWS</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </li>
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Contentful</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </li>
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </li>

            </ul>
        </div>
      
    </div>
  )
}

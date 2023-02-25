import React from 'react'
import {BiBadgeCheck} from 'react-icons/bi'

export default function Frontend() {
  return (
    <div className='skills__content'>
        <h3 className="skills__title">Frontend Development</h3>
        <div className="skills__box">
            <ul className="skills__group">
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </li>
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">CSS/SASS/SCSS</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </li>
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Tailwind</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </li>
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </li>
            </ul>
            <ul className="skills__group">
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </li>
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </li>
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">TypeScript</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </li>
                <li className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Git & GitHub</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </li>

            </ul>
        </div>
      
    </div>
  )
}

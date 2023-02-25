import React, { useState } from 'react'
import './services.scss'
import { BsPencilSquare } from 'react-icons/bs'
import { AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai'
import { CiBookmarkCheck } from 'react-icons/ci'
import { FaLaptopCode } from 'react-icons/fa'
import { BiCheckCircle } from 'react-icons/bi'


export default function Services() {
    const [modal, setModal] = useState(0)

    const handleModal = (id) => {
        setModal(id)
    }


  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <div className="section__subtitle">What I offer</div>
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <BsPencilSquare className="services__icon" />
                    <h3 className="services__title">UX/UI <br /> Design</h3>
                </div>
                <span className="services__button" onClick={() => handleModal(1)}>View More 
                    <AiOutlineArrowRight className='services__button-icon'/>
                </span>
                <div className={modal === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <AiOutlineClose className="services__modal-close" onClick={() => handleModal(0)}/>
                        <h3 className="services__modal-title"> UX/UI Design</h3>
                        <p className="services__modal-description">
                        UX (User Experience) design focuses on understanding the user's behavior, needs, and preferences to create a seamless and enjoyable experience. UI (User Interface) design focuses on the visual and interactive elements of the digital product, such as layout, typography, color, and iconography.
                        </p>

                        <ul className="services__modal-services">
                            <li className="services__modal-service">
                                <BiCheckCircle className="services__modal-icon"/>
                                <p className="services__modal-info">User research</p>
                            </li>
                            <li className="services__modal-service">
                                <BiCheckCircle className="services__modal-icon"/>
                                <p className="services__modal-info">Information architecture </p>
                            </li>
                            <li className="services__modal-service">
                                <BiCheckCircle className="services__modal-icon"/>
                                <p className="services__modal-info">Wireframing</p>
                            </li>
                            <li className="services__modal-service">
                                <BiCheckCircle className="services__modal-icon"/>
                                <p className="services__modal-info">Visual design</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <FaLaptopCode className="services__icon" />
                    <h3 className="services__title">Web & App <br/> Development</h3>
                </div>
                <span className="services__button" onClick={() => handleModal(2)}>View More 
                    <AiOutlineArrowRight className='services__button-icon'/>
                </span>
                <div className={modal === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <AiOutlineClose className="services__modal-close" onClick={() => handleModal(0)}/>
                        <h3 className="services__modal-title">Web & App Development</h3>
                        <p className="services__modal-description">
                            Web and app development services involve the design, development, and maintenance of websites and mobile applications to help businesses reach their target audiences and achieve their goals.
                        </p>

                        <ul className="services__modal-services">
                            <li className="services__modal-service">
                                <BiCheckCircle className="services__modal-icon"/>
                                <p className="services__modal-info"> developing the code, integrating features and SEO.</p>
                            </li>
                            <li className="services__modal-service">
                                <BiCheckCircle  className="services__modal-icon"/>
                                <p className="services__modal-info">maintenance and support, such as updates, bug fixes. </p>
                            </li>
                            <li className="services__modal-service">
                                <BiCheckCircle size={25} className="services__modal-icon"/>
                                <p className="services__modal-info"> development of wireframes and prototypes, coding, testing, and deployment.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

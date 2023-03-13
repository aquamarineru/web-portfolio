import React, { useState } from 'react'
import './services.scss'
import { BsPencilSquare } from 'react-icons/bs'
import { AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai'
import { FaLaptopCode } from 'react-icons/fa'
import { MdOutlineHardware } from 'react-icons/md'


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
                            <img src="src/img/uxui.png" alt="" className="services__img" />
                            <p className="services__modal-description">
                            These services include:
                            </p>
    
                            <ul className="services__modal-services">
                                <li className="services__modal-service">
                                <div className="services__modal-info">
                                    <h3 className="services__modal-sub"> Accessibility:</h3>
                                        <p>Ensuring that the product is accessible to users with disabilities and meets accessibility standards.</p>
                                    </div>
                                </li>
                                <li className="services__modal-service">
                                    <div className="services__modal-info">
                                        <h3 className="services__modal-sub">User interface design</h3>
                                        <p>Designing interfaces that are intuitive, easy to navigate, and visually appealing.</p>
                                        </div>
                                </li>
                                <li className="services__modal-service">
                                    <div className="services__modal-info">
                                    <h3 className="services__modal-sub"> Visual and Interaction design:</h3>
                                        <p>Designing how users interact with the product, including animations, transitions, and feedback.</p>
                                    </div>
                                </li>
                                <li className="services__modal-service">
                                <div className="services__modal-info">
                                    <h3 className="services__modal-sub"> Information architecture:</h3>
                                        <p>Organizing content and information in a way that is easy to understand and find</p>
                                    </div>
                                </li>
                                <li className="services__modal-service">
                                <div className="services__modal-info">
                                    <h3 className="services__modal-sub"> Accessibility:</h3>
                                        <p>Ensuring that the product is accessible to users with disabilities and meets accessibility standards.</p>
                                    </div>
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
                            <img src="src/img/programming.png" alt="" className="services__img" />
                            <p className="services__modal-description">
                            These services include:
                            </p>
    
                            <ul className="services__modal-services">
                                <li className="services__modal-service">
                                <div className="services__modal-info">
                                    <h3 className="services__modal-sub"> Front-end development:</h3>
                                        <p>Developing the user interface and user experience of the application using technologies such as React or Vue.</p>
                                    </div>
                                </li>
                                <li className="services__modal-service">
                                <div className="services__modal-info">
                                    <h3 className="services__modal-sub"> Back-end development:</h3>
                                        <p>Creating the server-side logic, APIs, and database management systems using technologies such as Node.js,  Content Managment System (CMS)</p>
                                    </div>
                                </li>
                                <li className="services__modal-service">
                                <div className="services__modal-info">
                                    <h3 className="services__modal-sub"> Testing and debugging:</h3>
                                        <p>Testing and debugging the application to ensure that it functions properly and is free of errors.</p>
                                    </div>
                                </li>
                                <li className="services__modal-service">
                                <div className="services__modal-info">
                                    <h3 className="services__modal-sub"> Maintenance and support: </h3>
                                        <p>Providing ongoing maintenance and support to keep the application up-to-date and running smoothly.</p>
                                    </div>
                                </li>
                                <li className="services__modal-service">
                                <div className="services__modal-info">
                                    <h3 className="services__modal-sub"> Integration:</h3>
                                        <p>Integrating the application with other third-party services such as payment gateways, social media platforms, and analytics tools.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <MdOutlineHardware className="services__icon" />
                        <h3 className="services__title">PC Builds & <br /> Upgrades </h3>
                    </div>
                    <span className="services__button" onClick={() => handleModal(3)}>View More 
                        <AiOutlineArrowRight className='services__button-icon'/>
                    </span>
                    <div className={modal === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <AiOutlineClose className="services__modal-close" onClick={() => handleModal(0)}/>
                            <h3 className="services__modal-title"> PC Builds & Upgrades </h3>
                            <img src="src/img/pc.png" alt="" className="services__img" />
                            <p className="services__modal-description">
                            These services include:
                            </p>
    
                            <ul className="services__modal-services">
                                <li className="services__modal-service">
                                <div className="services__modal-info">
                                    <h3 className="services__modal-sub"> Custom PC builds: </h3>
                                        <p>Building custom desktop computers to meet the specific needs of the user, including selecting components such as processors, motherboards, graphics cards, and memory.</p>
                                    </div>
                                </li>
                                <li className="services__modal-service">
                                <div className="services__modal-info">
                                    <h3 className="services__modal-sub"> Upgrades:</h3>
                                        <p>Upgrading the components of an existing desktop computer to improve performance and capabilities, including upgrading the CPU, GPU, RAM, or storage.</p>
                                    </div>
                                </li>
                                <li className="services__modal-service">
                                <div className="services__modal-info">
                                    <h3 className="services__modal-sub"> Maintenance and support: </h3>
                                        <p>Providing ongoing maintenance and support to keep the computer running smoothly and addressing any issues that arise.</p>
                                    </div>
                                </li>
                                <li className="services__modal-service">
                                <div className="services__modal-info">
                                    <h3 className="services__modal-sub"> Installation and configuration: </h3>
                                        <p>Installing and configuring software, hardware, and peripherals such as printers, scanners, and gaming accessories.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
}

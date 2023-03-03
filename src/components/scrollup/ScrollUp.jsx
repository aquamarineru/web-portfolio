import React from 'react'
import './scrollUp.scss'
import { AiOutlineArrowUp } from 'react-icons/ai'

export default function ScrollUp() {
   window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup")
//when the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scrollup class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll")
    else scrollUp.classList.remove("show-scroll")
   })
  return (
    <a href="#" className="scrollup">
        <AiOutlineArrowUp />
    </a>
  )
}

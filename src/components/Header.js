// src/components/Header.js

import React, { useState } from "react"
import { Link } from "gatsby"
import "./header.scss"
import "./LogoFlip.scss"
import logo from "../images/kanda.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>    
      <div className="logo-rotate-container">
      <div className="logo-rotate">
        <img src={logo} alt="Logo" />
      </div>
    </div> 
      <div className="moving-text-container">
        <h1 className="moving-text">Gurdwara Charan Kamal Sahib</h1>
      </div>
      <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li><Link to="#home" activeClassName="active">Home</Link></li>
          <li><Link to="#about" activeClassName="active">About</Link></li>
          <li><Link to="#services" activeClassName="active">Services</Link></li>
          <li><Link to="#contact" activeClassName="active">Contact</Link></li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={isOpen ? "bar active" : "bar"}></div>
        <div className={isOpen ? "bar active" : "bar"}></div>
        <div className={isOpen ? "bar active" : "bar"}></div>
      </div>
    </header>
  )
}

export default Header

// src/components/Hero.js

import React from "react"
import background from "../images/gurudwarasahib.jpeg"
import "./hero.scss"

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero-content">
        {/* <h1>Welcome to Our Website</h1>
        <p>This is the Home section of our single-page website.</p> */}
      </div>
    </section>
  )
}

export default Hero

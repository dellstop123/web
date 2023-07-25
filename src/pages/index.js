// src/pages/index.js

import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"
import "../styles/main.scss"

const HomePage = () => {
  return (
    <div>
      {/* <Helmet>
        <title>Responsive Single-Page Website</title>
      </Helmet> */}
      <Header />
      <Hero />
      <About />
      <Contact />
    </div>
  )
}

export default HomePage

// src/pages/index.js

import React from "react"
// import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"
// import LocationMap from "../components/LocationMap"
import "../styles/main.scss"
import SEO from "../components/SEO"
// import {graphql} from "gatsby"


const HomePage = () => {

  return (
    <div>
      <SEO />
      <Header />
      <Hero />
      <About />
      {/* <LocationMap /> */}
      <Contact />
    </div>
  )
}

export default HomePage


// src/components/Hero.js

import React from "react"
import background from "../images/gurudwarasahib.jpeg"
import "./hero.scss"
// import {useStaticQuery, graphql} from "gatsby"

const Hero = () => {
  //   const data = useStaticQuery(graphql`
  //   query {
  //       allMarkdownRemark {
  //         nodes {
  //           frontmatter {
  //             Title
  //             Date
  //             Keywords
  //             image
  //           }
  //         }
  //       }
  //     }
  // `)
  // const image = data.allMarkdownRemark.nodes[0].frontmatter.image
  return (
    <section className="hero" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero-content">
    </div>
    </section>
  )
}

export default Hero

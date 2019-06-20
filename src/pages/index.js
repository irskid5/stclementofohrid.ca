import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div id="body" className="mainBody">
        <SEO
          title="Home"
          keywords={[
            `St.Clement`,
            `Church`,
            `Macedonia`,
            `Orthodox`,
            `Cathedral`,
            `Christianity`,
          ]}
        />
        <Img
          fluid={data.fileName.childImageSharp.fluid}
          alt="Picture of St.Clement of Ohrid MOC"
          className="startingImage"
        />
      </div>
    )}
  />
)

const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/test_index_photo_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 10000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage

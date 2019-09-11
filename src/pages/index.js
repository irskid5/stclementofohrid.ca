import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

import "./index.css"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
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
            <div className="mainImageContainer">
              <Img
                fluid={data.fileName1.childImageSharp.fluid}
                alt="Picture of St.Clement of Ohrid MOC"
                className="startingImage"
              />
              <div className="welcomeTextContainer">
                <h1>Welcome to St. Clement of Ohrid</h1>
                <h2>Macedonian Orthodox Cathedral</h2>
                <h2>Toronto, Canada</h2>
              </div>
            </div>
            <div className="sermonImageContainer">
              <Img
                fluid={data.fileName2.childImageSharp.fluid}
                alt="Picture of St.Clement of Ohrid MOC"
                className="startingImage"
              />
            </div>
          </div>
        )}
      />
    )
  }
}

const query = graphql`
  query {
    fileName1: file(relativePath: { eq: "images/indexImage2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 10000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fileName2: file(relativePath: { eq: "images/imageOfChurchInside.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 10000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage

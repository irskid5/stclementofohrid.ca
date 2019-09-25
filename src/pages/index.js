import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Link from "gatsby-link"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"
import { Button } from "react-bootstrap"

import SEO from "../components/seo"

import "./index.css"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: "d",
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.updateWindowDimensions()
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    let width = window.innerWidth
    if (width > 1024) {
      this.setState({ size: "d" })
    } else if (width > 414) {
      this.setState({ size: "t" })
    } else {
      this.setState({ size: "m" })
    }
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
            <ScrollAnimation animateIn="fadeIn" duration={0.5}>
              <div className="mainImageContainer">
                <div className="welcomeTextContainer">
                  <h1>Welcome to St. Clement of Ohrid</h1>
                  <h2>Macedonian Orthodox Cathedral</h2>
                  <h2>Toronto, Canada</h2>
                </div>
                {this.state.size === "m" ? (
                  <Img
                    fluid={data.fileName2.childImageSharp.fluid}
                    alt="Picture of St.Clement of Ohrid"
                    className="startingImage"
                  />
                ) : this.state.size === "t" ? (
                  <Img
                    fluid={data.fileName2.childImageSharp.fluid}
                    alt="Picture of St.Clement of Ohrid"
                    className="startingImage"
                  />
                ) : (
                  <Img
                    fluid={data.fileName1.childImageSharp.fluid}
                    alt="Picture of St.Clement of Ohrid"
                    className="startingImage"
                  />
                )}
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              duration={1}
            >
              <div className="startingSermonImageContainer">
                <Img
                  fluid={data.fileName3.childImageSharp.fluid}
                  alt="Picture of St.Clement of Ohrid MOC"
                  className="startingSermonImage"
                />
                <div className="shadownOnImage" />
                <div className="lastWeekSermonContainer">
                  <div className="lastWeekSermonText">
                    <a>Want To Know More About Last Week's Sermon?</a>
                  </div>
                  <div className="lastWeekSermonButton">
                    <Link to="/">
                      <Button
                        variant="outline-secondary"
                        style={{ color: "#ffffff", borderColor: "#ffffff" }}
                        size="lg"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        )}
      />
    )
  }
}

const query = graphql`
  query {
    fileName1: file(relativePath: { eq: "images/indexImage8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 10000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fileName2: file(relativePath: { eq: "images/indexImage9.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 10000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fileName3: file(relativePath: { eq: "images/imageOfChurchInside.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 10000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage

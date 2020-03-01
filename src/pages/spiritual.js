import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Link from "gatsby-link"

import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"

import SEO from "../components/seo"

class SpiritualPage extends React.Component {
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
            <ScrollAnimation
              animateIn="fadeIn"
              duration={0.5}
            ></ScrollAnimation>
          </div>
        )}
      ></StaticQuery>
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

export default SpiritualPage

/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import logo from "../images/header.svg"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            menu {
              links {
                name
                link
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          menuLinks={data.site.siteMetadata.menu.links}
          siteTitle={data.site.siteMetadata.title}
          headerImage={logo}
        />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <footer style={{ "text-align": "center" }}>
          © {new Date().getFullYear()} St. Clement of Ohrid, Macedonian Orthodox
          Cathedral | Built by
          {` `}
          <a href="https://ca.linkedin.com/in/veletosevski">Vele Tosevski</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

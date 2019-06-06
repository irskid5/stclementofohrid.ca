/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Link from "gatsby-link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/fontawesome-free-brands"

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
        <footer>
          <div>
            <div>
              <Link to="/">
                <img src={logo} alt="Logo" style={{ width: "70px" }} />
              </Link>
            </div>
            <div>
              <h1 style={{ paddingBottom: "0.5em", fontSize: "14pt" }}>
                Contact Info
              </h1>
              <div style={{ alignItems: "center" }}>
                <a href="https://goo.gl/maps/jc7UHqgNUDNsAiNC9">
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                </a>
                <a style={{ paddingLeft: "0.6em", fontSize: "14pt" }}>
                  76 Overlea Blvd, East York, ON M4H 1C5
                </a>
              </div>
              <div style={{ alignItems: "center" }}>
                <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
                <a style={{ paddingLeft: "0.4em", fontSize: "14pt" }}>
                  (416) 421-7451
                </a>
              </div>
              <div style={{ alignItems: "center" }}>
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                <a style={{ paddingLeft: "0.4em", fontSize: "14pt" }}>
                  info@stclementofohrid.com
                </a>
              </div>
            </div>
            <div style={{ alignItems: "center" }}>
              <h1 style={{ paddingBottom: "0.5em", fontSize: "14pt" }}>
                Follow us on
              </h1>
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a
                  style={{ paddingLeft: "0.2em", paddingRight: "0.2em" }}
                  href="https://www.facebook.com/StClementMacedonianOrthodoxCathedralToronto/"
                >
                  <FontAwesomeIcon icon={faFacebook} fixedWidth size="2x" />
                </a>
                <a
                  style={{ paddingLeft: "0.2em", paddingRight: "0.2em" }}
                  href="https://www.instagram.com/st.clement_toronto/"
                >
                  <FontAwesomeIcon icon={faInstagram} fixedWidth size="2x" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ alignItems: "center", color: "grey", fontSize: "9pt" }}
            >
              <div style={{ textAlign: "center" }}>
                © {new Date().getFullYear()} St. Clement of Ohrid, Macedonian
                Orthodox Cathedral
              </div>
              <div>
                Built by&nbsp;
                <a href="https://ca.linkedin.com/in/veletosevski">
                  Vele Tosevski
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

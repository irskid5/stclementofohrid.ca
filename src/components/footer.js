import PropTypes from "prop-types"
import React, { Component } from "react"
// import Img from "gatsby-image"
import Link from "gatsby-link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/fontawesome-free-brands"

import { Button } from "react-bootstrap"

import "./footer.css"

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>
        <div>
          <div>
            <Link to="/">
              <img
                src={this.props.footerLogo}
                alt="Logo"
                style={{ maxHeight: "30vh" }}
              />
            </Link>
          </div>
          <div>
            <h1 style={{ paddingBottom: "0.5em", fontSize: "14pt" }}>
              Contact Info
            </h1>
            <div style={{ alignItems: "center" }}>
              <a
                href="https://goo.gl/maps/jc7UHqgNUDNsAiNC9"
                style={{ color: "#901B1C" }}
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
              </a>
              <a style={{ paddingLeft: "0.6em", fontSize: "14pt" }}>
                76 Overlea Blvd, East York, ON M4H 1C5
              </a>
            </div>
            <div style={{ alignItems: "center" }}>
              <a href="tel:+14164217451" style={{ color: "#901B1C" }}>
                <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
              </a>
              <a style={{ paddingLeft: "0.4em", fontSize: "14pt" }}>
                (416) 421-7451
              </a>
            </div>
            <div style={{ alignItems: "center" }}>
              <a
                href="mailto:info@stclementofohrid.com"
                style={{ color: "#901B1C" }}
              >
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
              <a style={{ paddingLeft: "0.4em", fontSize: "14pt" }}>
                info@stclementofohrid.com
              </a>
            </div>
          </div>
          <div>
            <h1 style={{ paddingBottom: "0.5em", fontSize: "14pt" }}>
              Office Hours
            </h1>
            <div>
              <a style={{}}>
                Mon - Fri: 9am - 5pm
                <br />
                Sat - Sun: 9am - 3pm
              </a>
            </div>
          </div>
          <div style={{ alignItems: "center" }}>
            <h1 style={{ paddingBottom: "0.5em", fontSize: "14pt" }}>
              Follow Us
            </h1>
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                style={{
                  paddingLeft: "0.2em",
                  paddingRight: "0.2em",
                  color: "#901B1C",
                }}
                href="https://www.facebook.com/StClementMacedonianOrthodoxCathedralToronto/"
              >
                <FontAwesomeIcon icon={faFacebook} fixedWidth size="2x" />
              </a>
              <a
                style={{
                  paddingLeft: "0.2em",
                  paddingRight: "0.2em",
                  color: "#901B1C",
                }}
                href="https://www.instagram.com/st.clement_toronto/"
              >
                <FontAwesomeIcon icon={faInstagram} fixedWidth size="2x" />
              </a>
            </div>
          </div>
          <div>
            <h1 style={{ paddingBottom: "0.5em", fontSize: "14pt" }}>
              We Need Your Help!
            </h1>
            <div>
              <Link to="/">
                <Button
                  variant="outline-danger"
                  style={{ color: "#901B1C", borderColor: "#901B1C" }}
                  disabled
                >
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div style={{ alignItems: "center", color: "grey", fontSize: "9pt" }}>
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
    )
  }
}

export default Footer

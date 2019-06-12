import PropTypes from "prop-types"
import React from "react"
// import Img from "gatsby-image"
import Link from "gatsby-link"

import {
  Navbar,
  Nav,
  NavDropdown,
  // Form,
  // FormControl,
  // Button,
} from "react-bootstrap"

import "./header.css"

const Header = ({ siteTitle, menuLinks, headerImage }) => (
  <Navbar bg="light" expand="lg" sticky="top" id="header">
    <div className="box-links">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/spiritual">
            Spiritual
          </Link>
          <Link className="nav-link" to="/banquethalls">
            Banquet Halls
          </Link>
          <Link className="nav-link" to="/events">
            Events
          </Link>
          <NavDropdown title="Groups" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/groups">
              Ensemble Makedonka
            </Link>
            <Link className="dropdown-item" to="/groups">
              Ladies Auxilary
            </Link>
            <Link className="dropdown-item" to="/groups">
              Bowling
            </Link>
            <Link className="dropdown-item" to="/groups">
              Sunday School
            </Link>
            <Link className="dropdown-item" to="/groups">
              MYNET
            </Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </div>
    <div className="box-logo">
      <Link className="nav-brand" to="/">
        <img src={headerImage} alt="Logo" className="navbarLogo" />
      </Link>
    </div>
    <div className="box-hamburger">
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        id="toggler-hamburger"
      >
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="sr-only">Toggle navigation</span>
      </Navbar.Toggle>
    </div>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// <Form inline>
//         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//         <Button variant="outline-success">Search</Button>
//       </Form>

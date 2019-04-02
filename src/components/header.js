import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import Link from "gatsby-link"

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"

import "./header.css"

const Header = ({ siteTitle, menuLinks, headerImage }) => (
  <Navbar bg="light" expand="lg">
    <Link className="nav-brand" to="/">
      <img src={headerImage} alt="Logo" className="navbarLogo" />
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
            MYNET
          </Link>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
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

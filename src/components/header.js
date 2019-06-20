import PropTypes from "prop-types"
import React, { Component } from "react"
// import Img from "gatsby-image"
import Link from "gatsby-link"

import { Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap"

import "./header.css"

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isTop: true,
      isMobile: false,
    }

    this.onScroll = this.onScroll.bind(this)
    this.onMobile = this.onMobile.bind(this)
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 50
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop)
      }
    })

    window.addEventListener("resize", () => {
      this.onMobile()
    })
  }

  onScroll(isTop) {
    this.setState({ isTop: isTop })
  }

  onMobile() {
    this.setState({
      isMobile: window.innerWidth < 991,
    })
  }

  render() {
    return (
      <Navbar
        expand="lg"
        sticky="top"
        id="header"
        className={this.state.isTop ? "" : "scroll"}
      >
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
              <Dropdown
                id="basic-nav-dropdown"
                drop={this.state.isMobile ? "right" : "down"}
              >
                <Dropdown.Toggle id="dropdown-toggle">Groups</Dropdown.Toggle>
                <Dropdown.Menu className={this.state.isTop ? "" : "scroll"}>
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
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="box-logo">
          <Link className="nav-brand" to="/">
            <img
              src={this.props.headerImage}
              alt="Logo"
              className="navbarLogo"
            />
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
  }
}

export default Header

// <Form inline>
//         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//         <Button variant="outline-success">Search</Button>
//       </Form>

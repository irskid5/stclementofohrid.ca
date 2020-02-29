import PropTypes from "prop-types"
import React, { Component } from "react"
// import Img from "gatsby-image"
import Link from "gatsby-link"

import {
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  Button,
  NavItem,
  Accordion,
} from "react-bootstrap"

import "./header.css"

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isTop: true,
      isMobile: false,
      dropdownOrAccordion: null,
      hamburgerToggle: false,
      isGroupsOpen: false,
      isSpiritualOpen: false,
    }

    this.onScroll = this.onScroll.bind(this)
    this.onMobile = this.onMobile.bind(this)
    this.onHamburgerToggle = this.onHamburgerToggle.bind(this)
    this.handleGroupsOpen = this.handleGroupsOpen.bind(this)
    this.handleGroupsClose = this.handleGroupsClose.bind(this)
    this.handleSpiritualOpen = this.handleSpiritualOpen.bind(this)
    this.handleSpiritualClose = this.handleSpirirualClose.bind(this)
  }

  componentDidMount() {
    this.onMobile()

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

  onHamburgerToggle() {
    this.setState({ hamburgerToggle: !this.state.hamburgerToggle })
  }

  handleGroupsOpen() {
    this.setState({ isGroupsOpen: true })
  }

  handleGroupsClose() {
    this.setState({ isGroupsOpen: false })
  }

  handleSpiritualOpen() {
    this.setState({ isSpiritualOpen: true })
  }

  handleSpirirualClose() {
    this.setState({ isSpiritualOpen: false })
  }

  onMobile() {
    this.setState({
      isMobile: window.innerWidth < 991,
      spiritualDropdownOrAccordion:
        window.innerWidth < 991 ? (
          <Accordion>
            <Accordion.Toggle
              as="div"
              variant="link"
              eventKey="0"
              className="accordion-collapse-header"
            >
              Spiritual
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <div id="accordion-collapse" className="accordion-collapse">
                <Link className="accordion-collapse-item" to="/spiritual">
                  Weekly Sermons
                </Link>
                <Link className="accordion-collapse-item" to="/spiritual">
                  Orthodox Articles
                </Link>
                <a
                  className="accordion-collapse-item"
                  href="http://preminportal.com.mk/verski-kalendar"
                >
                  Orthodox Calendar
                </a>
                <Link className="accordion-collapse-item" to="/spiritual">
                  Prayers
                </Link>
                <Link className="accordion-collapse-item" to="/spiritual">
                  History of MOC
                </Link>
                <Link className="accordion-collapse-item" to="/spiritual">
                  Fresco/Icon Painting
                </Link>
                <Link className="accordion-collapse-item" to="/spiritual">
                  Churches and Monasteries
                </Link>
              </div>
            </Accordion.Collapse>
          </Accordion>
        ) : (
          <Dropdown
            id="groups-nav-dropdown"
            onMouseEnter={this.handleSpiritualOpen}
            onMouseLeave={this.handleSpiritualClose}
            open={this.state.isSpiritualOpen}
            // drop={this.state.isMobile ? "right" : "down"}
          >
            <Dropdown.Toggle id="dropdown-toggle">Spiritual</Dropdown.Toggle>
            <Dropdown.Menu
              className={this.state.isTop ? "" : "dropdown-scroll"}
            >
              <Link className="dropdown-item" to="/spiritual">
                Weekly Sermons
              </Link>
              <Link className="dropdown-item" to="/spiritual">
                Orthodox Articles
              </Link>
              <a
                className="dropdown-item"
                href="http://preminportal.com.mk/verski-kalendar"
              >
                Orthodox Calendar
              </a>
              <Link className="dropdown-item" to="/spiritual">
                Prayers
              </Link>
              <Link className="dropdown-item" to="/spiritual">
                History of MOC
              </Link>
              <Link className="dropdown-item" to="/spiritual">
                Fresco/Icon Painting
              </Link>
              <Link className="dropdown-item" to="/spiritual">
                Churches and Monasteries
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        ),
      groupsDropdownOrAccordion:
        window.innerWidth < 991 ? (
          <Accordion>
            <Accordion.Toggle
              as="div"
              variant="link"
              eventKey="0"
              className="accordion-collapse-header"
            >
              Groups
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <div id="accordion-collapse" className="accordion-collapse">
                <Link className="accordion-collapse-item" to="/groups">
                  Ensemble Makedonka
                </Link>
                <Link className="accordion-collapse-item" to="/groups">
                  Ladies Auxilary
                </Link>
                <Link className="accordion-collapse-item" to="/groups">
                  Bowling
                </Link>
                <Link className="accordion-collapse-item" to="/groups">
                  Sunday School
                </Link>
                <Link className="accordion-collapse-item" to="/groups">
                  MYNET
                </Link>
              </div>
            </Accordion.Collapse>
          </Accordion>
        ) : (
          <Dropdown
            id="groups-nav-dropdown"
            onMouseEnter={this.handleGroupsOpen}
            onMouseLeave={this.handleGroupsClose}
            open={this.state.isGroupsOpen}
            // drop={this.state.isMobile ? "right" : "down"}
          >
            <Dropdown.Toggle id="dropdown-toggle">Groups</Dropdown.Toggle>
            <Dropdown.Menu
              className={this.state.isTop ? "" : "dropdown-scroll"}
            >
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
        ),
    })
  }

  render() {
    return (
      <Navbar
        expand="lg"
        sticky="top"
        id="header"
        className={
          this.state.isTop && !this.state.hamburgerToggle ? "" : "scroll"
        }
      >
        <div className="box-links">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/about">
                About
              </Link>
              {this.state.spiritualDropdownOrAccordion}
              <Link className="nav-link" to="/banquethalls">
                Banquet Halls
              </Link>
              <Link className="nav-link" to="/events">
                Events
              </Link>
              {this.state.groupsDropdownOrAccordion}
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
            onClick={this.onHamburgerToggle}
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

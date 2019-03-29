import React from "react"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"

import "./header.css"

import logo from "../images/MOC_logo.svg"

export default class NavbarStrap extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="navbarLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/spiritual">Spiritual</Nav.Link>
            <Nav.Link href="/banquethalls">Banquet Halls</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <NavDropdown title="Groups" id="basic-nav-dropdown">
              <NavDropdown.Item href="/groups">
                Ensemble Makedonka
              </NavDropdown.Item>
              <NavDropdown.Item href="/groups">
                Ladies Auxilary
              </NavDropdown.Item>
              <NavDropdown.Item href="/groups">MYNET</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

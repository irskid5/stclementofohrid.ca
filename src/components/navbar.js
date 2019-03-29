import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./navbar.css"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}

  render() {
    return (
      <div class="Navbar">
        <nav class="Navbar_Items">
          <div class="Navbar_Link Navbar_Link-brand">Website title</div>
          <div class="Navbar_Link">Link</div>
          <div class="Navbar_Link">Link</div>
          <div class="Navbar_Link">Link</div>
        </nav>
        <nav class="Navbar_Items Navbar_Items--right">
          <div class="Navbar_Link">Link</div>
          <div class="Navbar_Link">Link</div>
        </nav>
      </div>
    )
  }
}

export default Navbar

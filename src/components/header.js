import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "./image"
import Navbar from "./navbar"
import "./header.css"
import logo from "../images/favicon.png"

const Header = ({ siteTitle, menuLinks }) => (
  <div className="navbarContainer">
    <div className="navbarLogoContainer">
      <img src={logo} alt="Logo" className="navbarLogo" />
    </div>
    <div className="navbarItemContainer">
      {menuLinks.map(link => (
        <li key={link.name} className="navbarItem">
          <Link to={link.link} className="navbarLink">
            {link.name}
          </Link>
        </li>
      ))}
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

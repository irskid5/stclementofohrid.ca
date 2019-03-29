import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//import "./header.css"
import logo from "../images/favicon.png"
import NavbarStrap from "../components/navbar"

const Header = ({ siteTitle, menuLinks }) => (
  <NavbarStrap />
  // <div className="navbarContainer">
  //   <div className="navbarLogoContainer">
  //     <img src={logo} alt="Logo" className="navbarLogo" />
  //   </div>
  //   <div className="navbarItemContainer">
  //     {menuLinks.map(link => (
  //       <li key={link.name} className="navbarItem">
  //         <Link to={link.link} className="navbarLink">
  //           {link.name}
  //         </Link>
  //       </li>
  //     ))}
  //   </div>
  // </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

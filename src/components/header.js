import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//import "./header.css"
import NavbarStrap from "../components/navbar"
import logo from "../images/MOC_logo.svg"

const Header = ({ siteTitle, menuLinks }) => (
  <NavbarStrap logo={logo} />
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

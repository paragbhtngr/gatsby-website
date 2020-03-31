import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle, theme }) => {
  const [showNavMenu, toggleShowNavMenu] = useState(false)

  return (
    <header className={theme}>
      <div>
        <h1 id="logo">
          <Link to="/"> {siteTitle} </Link>
        </h1>
      </div>
      <nav id="desktop-nav">
        <Link to="/art">Art</Link>
        <Link to="/design">Design</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <nav id="mobile-nav" class={showNavMenu ? "fixed" : ""}>
        <div 
          id="mobile-hamburger" 
          onClick={() => {
            toggleShowNavMenu(!showNavMenu)
          }}
        >ham</div>
        { showNavMenu && (
          <div class="menu">
            <Link to="/art">ART</Link>
            <Link to="/design">DESIGN</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  theme: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

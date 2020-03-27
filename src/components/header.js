import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, theme }) => (
  <header className={theme}>
    <div>
      <h1 id="logo">
        <Link to="/"> {siteTitle} </Link>
      </h1>
    </div>
    <nav id="desktop-nav">
      <Link to="/about"> ABOUT </Link>
      <Link to="/blog"> BLOG </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  theme: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

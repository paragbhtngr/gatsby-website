import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { myContext } from '../../../provider'

const SecondPage = () => (
  <myContext.Consumer>
    {context => (
      <Layout theme={context.theme}>
        <SEO title="Contact" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )}
  </myContext.Consumer>
)

export default SecondPage

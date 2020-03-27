import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { myContext } from '../../provider'

const IndexPage = () => {
  return (
    <myContext.Consumer>
      {context => (
        <Layout theme={context.theme}>
          <SEO title="Home" />
          <h1>Hi people</h1>
          
          <h1 onClick={() => context.changeTheme("arty")}>I draw</h1>

          <h1 onClick={() => context.changeTheme("designy")}>I design</h1>

          <h1 onClick={() => context.changeTheme("codey")}>I develop</h1>

          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <Link to="/page-2/">Go to page 2</Link><br/>
          <Link to="/about/">Go to about</Link>
        </Layout>

      )}
    </myContext.Consumer>
  )
}

export default IndexPage

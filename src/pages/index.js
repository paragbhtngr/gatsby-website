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
          <div class="block" id="homeblock">
            <div class="titles">
              <h1 
                className="link" 
                onClick={() => context.changeTheme("arty")}
              >I draw</h1>

              <h1 
                className="link" 
                onClick={() => context.changeTheme("designy")}
              >I design</h1>

              <h1 
                className="link" 
                onClick={() => context.changeTheme("codey")}
              >I develop</h1>
            </div>
            
            <br/>
            <p>
              { context.theme === "arty" ? <>
                I am an illustrator - mostly digital at this point, but occasionally I will use traditional media.
              </> : context.theme === "designy" ? <>
                I do both graphic and UI/UX design, with experience working in human-computer interaction. You can check out some of my design projects, logos, posters etc on this site. 
              </> : context.theme === "codey" ? <> 
                I'm a CS Major from a Liberal Arts College <em>(yes, I've heard it all before)</em>. Mostly focusing on front-end web projects, but if it exists, I've probably dabbled in it at some point for a project or at a hackathon before. 
              </> : <> 
                Click to find out more
              </>
              } 
            </p>
          </div>
          {/* <Link to="/page-2/">Go to page 2</Link><br/>
          <Link to="/about/">Go to about</Link> */}
        </Layout>

      )}
    </myContext.Consumer>
  )
}

export default IndexPage

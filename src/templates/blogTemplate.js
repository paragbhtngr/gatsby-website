import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { myContext } from '../../provider'


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <myContext.Consumer>
      {context => (
        <Layout theme={context.theme}>
          <SEO title="Page two" />
          <div className="blog-post-container">
            <div className="blog-post block">
              <h1 className="blog-post-title">{frontmatter.title}</h1>
              <h3 className="blog-post-date">{frontmatter.date}</h3>

              <Image className="blog-post-featured-img" imgName={frontmatter.image}/>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </Layout>
      )}
    </myContext.Consumer>
    
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image
        tags
      }
    }
  }
`
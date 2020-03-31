import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { myContext } from '../../../provider'

export default function Blog({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  const posts = allMarkdownRemark.edges.map( post => post.node )
  return (
    <myContext.Consumer>
      {context => (
        <Layout theme={context.theme}>
          <SEO title="Blog" />
          <h1>Hi from the about page</h1>
          <div className="blog-post-container">
            { posts.map(post => {
              return (
                <>
                  <div className="blog-post">
                    <h2>{post.frontmatter.title}</h2>
                  </div>
                </>
              )
            })}
          </div>
          <p>Welcome to page 2</p>
          <Link to="/">Go back to the homepage</Link>
        </Layout>
      )}
    </myContext.Consumer>
  )
}

export const pageQuery = graphql`
  query AllDesignPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: {eq: "design"} } }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
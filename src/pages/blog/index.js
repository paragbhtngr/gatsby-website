import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default function Blog({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  const posts = allMarkdownRemark.edges.map( post => post.node )
  return (
    <Layout>
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
  )
}

export const pageQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
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
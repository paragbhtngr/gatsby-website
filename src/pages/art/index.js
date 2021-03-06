import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
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
          <SEO title="Art" />
          <h1>Drawings, Doodles, and Illustrations</h1>
          <div className="art-posts-container">
            { posts.map(post => {
              return (
                <>
                  <div className="art-card card">
                    <div className="card-img">
                      {post.frontmatter.images && <Image imgName={post.frontmatter.images[0]}/>}
                    </div>
                    <div className="card-content">
                      <Link to={post.frontmatter.path} className="title">
                        {post.frontmatter.title}
                      </Link>
                      <br/>
                    </div>
                    
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
  query AllArtPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: {eq: "art"} } }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            images
          }
        }
      }
    }
  }
`
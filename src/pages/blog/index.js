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
          <SEO title="Blog" />
          <h1>Random Ramblings about stuff I care about</h1>
          <div className="blog-posts-container">
            { posts.map(post => {
              return (
                <>
                  <div className="blog-card card">
                    <div className="blog-card-img">
                      <Image imgName={post.frontmatter.image}/>
                    </div>
                    <div className="blog-card-content">
                      <Link to={post.frontmatter.path}>
                        <h4>{post.frontmatter.title}</h4>
                      </Link>
                      { post.frontmatter.tags && post.frontmatter.tags.map((tag) => {
                          return(<span class="badge">{tag}</span>)
                        }) } 
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
  query AllBlogPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: {eq: "blog"} } }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            tags
            image
          }
        }
      }
    }
  }
`
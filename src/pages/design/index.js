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
          <SEO title="Design" />
          <h1>Design</h1>
          <div className="design-posts-container">
            { posts.map(post => {
              return (
                <>
                  <div className="design-card card">
                    <div className="card-img" style={{
                      backgroundColor: post.frontmatter.backgroundColor || 'white'
                    }}>
                      {post.frontmatter.backgroundImage && <Image className="design-bg" imgName={post.frontmatter.backgroundImage}/>}
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
            images
            backgroundImage
            backgroundColor
          }
        }
      }
    }
  }
`
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const artPostTemplate = path.resolve(`src/templates/artTemplate.js`)
  const designPostTemplate = path.resolve(`src/templates/designTemplate.js`)


  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if(node.frontmatter.type === "art") {
      createPage({
        path: node.frontmatter.path,
        component: artPostTemplate,
        context: {}, // additional data can be passed via context
      })
    } else if(node.frontmatter.type === "design") {
      createPage({
        path: node.frontmatter.path,
        component: designPostTemplate,
        context: {}, // additional data can be passed via context
      })
    } else {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    }
  })
}
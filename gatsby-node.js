const _ = require('lodash')
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')


exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    fmImagesToRelative(node) // convert image paths for gatsby images
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
             frontmatter{
              template
            }
          }
        }
      }
    }
  `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            const template = node.frontmatter.template;
            createPage({
                           path: node.fields.slug,
                           component: path.resolve(`./src/templates/${template}.js`),
        context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
        },
    })
})
})
}
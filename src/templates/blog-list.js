import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Main from "../components/main"

export default ({ data }) => {
  const post = data.thisFile
  console.log(post)
    return (
        <Main footer={post.frontmatter.title}>
            <div>
                <h1>
                    Amazing Pandas Eating Things
                </h1>

                <h4>{data.all.totalCount} Posts</h4>
                {data.all.edges.map(({ node }) => (
                    <div key={node.id}>
                        <Link to={node.fields.slug} >
                            <h3 >
                                {node.frontmatter.title}{" "}
                                <span>
                  — {node.frontmatter.date}
    </span>
                            </h3>

                            <p>{node.excerpt}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </Main>
    )
}

export const query = graphql`
  query($slug: String!) {
   thisFile: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
          images {
          childImageSharp {
           fluid(toFormatBase64: PNG, fit: CONTAIN, base64Width: 1000) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        imageCheck
      }
    }
    all: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fields: {slug: {nin: "/blog/", regex: "/blog/"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import Main from "../components/main"
import Container from "../components/container"
import "../styles/styles.scss"
import GatsbyImage from 'gatsby-image';

export default ({ data }) => {
  const post = data.one
  const nodes = data.two.edges
  const imageCheck = post.frontmatter.imageCheck;
  const dataloop = post.frontmatter.dataMD;
  return (
    <div>
      <Main footer={post.frontmatter.title} location={post.fields.slug}>
        {/* Page Content */}
        <h1>{post.frontmatter.title}</h1>
        {nodes.map(({node} , i) => (
          <div key={i}>
            <Link to={node.fields.slug} >
              <h3 >
                {node.frontmatter.title}{" "}
                <span>

    </span>
              </h3>
            </Link>
          </div>
        ))}
        <div  className={"myPOst"} dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* End: Page Content */}
      </Main>
    </div>

    //
    // <div>
    //     <Layout>
    //         <h1>{post.frontmatter.title}</h1>
    //         {imageCheck ?( <img src={post.frontmatter.images.publicURL} />):('')}
    //         <div className={"myPOst"} dangerouslySetInnerHTML={{ __html: post.html }} />
    //         <div className={"Dasam"}>
    //             <hr/>
    //             <h1>Dasam</h1>
    //         </div>
    //         {dataloop.map(dataLoop =>
    //             <h2 className={"tag is-primary is-medium"} >{dataLoop}</h2>
    //         )}
    //     </Layout>
    // </div>
  )
}




export const query = graphql`
  query($slug: String!) {
    one: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields{
       slug
      }
      frontmatter {
        title
        dataMD{
          sample
          progress
        }
        imageCheck
      }
    }
    two:  allMarkdownRemark(filter: {fields: {slug: {regex: "/technologies/", ne: "/technologies/"}}}) {
    edges {
      node {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
  }
`

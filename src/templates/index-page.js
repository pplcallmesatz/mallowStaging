import React from "react"
import {graphql, Link} from "gatsby"
import Main from "../components/main"
import Container from 'react-bootstrap/Container'
import CardComponent from '../components/card/cardComponent'

export default ({ data }) => {
    const post = data.markdownRemark
    const imageCheck = post.frontmatter.imageCheck;
    return (

<React.Fragment>
        <Main footer={post.frontmatter.title}>
      <Container>
            {/* Page Content */}
            <h1>{post.frontmatter.title}</h1>

            {imageCheck ?( <img src={post.frontmatter.images.childImageSharp.fluid.src} alt={"alt text"} />):('')}
            <div className={"myPOst"} dangerouslySetInnerHTML={{ __html: post.html }} />
            {/* End: Page Content */}
      </Container>
        </Main>
</React.Fragment>


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
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
  }
`

import React from "react"
import {graphql, Link} from "gatsby"
import Main from "../components/main"
import Why from "../components/why/why"
import WhyMallow from "../components/why/why-mallow"


export default ({ data }) => {
  const post = data.markdownRemark
  const imageCheck = post.frontmatter.imageCheck;
  const dataloop = post.frontmatter.why;

  return (
    <div>
      <Main footer={post.frontmatter.title} location={post.fields.slug}>
        {/* Page Content */}
        <Why content={post.frontmatter}/>
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields{
       slug
      }
      frontmatter {
        title
        why
        whyMallow
        imageCheck
      }
    }
  }
`

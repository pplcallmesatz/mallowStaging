import React from "react"
import {graphql, Link} from "gatsby"
import Main from "../components/main"
import "../styles/technologies.scss"
import Why from "../components/why/why"
import Hero from "../components/hero/hero"



export default ({ data }) => {
  const post = data.markdownRemark
  const imageCheck = post.frontmatter.imageCheck;
  const dataloop = post.frontmatter.why;

  return (
    <div>
      <Main footer={post.frontmatter.title} location={post.fields.slug}>
        {/* Page Content */}
        {/* Start: Hero Secrion */}
        <Hero imageSource={post.frontmatter.heroImage.childImageSharp.fixed.src} title={post.frontmatter.title} description={post.frontmatter.description} />
        {/* End: Hero Secrion */}
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
        description
        why
        heroImage{
        childImageSharp {
          fixed(width: 3000) {
            src
          }
        }
        }
        whyMallow
      }
    }
  }
`

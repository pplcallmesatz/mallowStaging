import React from "react"
import { graphql } from "gatsby"
import Main from "../components/main"

export default ({ data }) => {
    const post = data.markdownRemark
    const imageCheck = post.frontmatter.imageCheck;
    var dataloop = post.frontmatter.dataLoop;


    return (
    <div>
        <Main>
            <h1>{post.frontmatter.title}</h1>
            {imageCheck ?( <img src={post.frontmatter.images.childImageSharp.fluid.base64} alt={"alt text"} />):('')}
            <div dangerouslySetInnerHTML={{__html: post.frontmatter.codeTm}}></div>
            <div className={"myPOst"} dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className={"Dasam"}>
                <hr/>
                <h1>Dasam</h1>
            </div>
                {dataloop.map(({dataLoop}, i)=>
                <h2 key={i} className={"tag is-primary is-medium"} >{dataloop[i]}</h2>
                )}
        </Main>
    </div>
)
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        codeTm
             images {
          childImageSharp {
                          fluid(toFormatBase64: PNG, fit: CONTAIN, base64Width: 1000) {
                base64
                srcSet
                src
                sizes
              }
          }
        }
        imageCheck
        dataLoop
      }
    }
  }
`

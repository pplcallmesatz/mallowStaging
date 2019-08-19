import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import Main from "../components/main"
import Container from "../components/container"
import "../styles/styles.scss"
import GatsbyImage from 'gatsby-image';

export default () => {


    return (
        <div>

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





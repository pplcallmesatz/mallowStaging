import React from "react"
import {graphql, Link} from "gatsby"
import "../styles/styles.scss"
// import CardComponent from '../components/cardComponent'
// import Main from '../components/main'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
export default ({ data }) => {

    const post=data.servicesList.edges[0].node
    console.log(post)
   const cardData=Object.keys(post.frontmatter).map((data,i)=>{
const cardData=post.frontmatter[data]
     return(
         <React.Fragment key={i}>
             <div>{cardData}</div>
         </React.Fragment>
     )
   })
    return(
        <div><h1>{cardData}</h1></div>
    )
}

export const query = graphql`
  query($slug: String!) {
    services : markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title

      }
    }
 servicesList: allMarkdownRemark(filter: {fields: {slug: {regex: "/services/", nin: "/services/"}}}) {
edges {
      node {
        frontmatter {
          title
          shortDescription
        }
      }
    }
  }
  }
`

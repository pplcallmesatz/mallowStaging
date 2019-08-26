import React from "react"
import {graphql,Link} from "gatsby"
import CardComponent from '../components/card/cardComponent'
import Main from '../components/main'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import GetBudget from '../components/getBudget/get-budget';
import Hero from '../components/hero/hero';
export default ({ data }) => {
   const post=data.servicesList;
    const servicePost=data.services.frontmatter
   const cardData=post.edges.map((data,i)=>{
            const cardImage = data.node.frontmatter.cardIcon.childImageSharp.fluid.src;
            const cardTitle = data.node.frontmatter.title
            const cardDescription = data.node.frontmatter.cardDescription;
            const slug = data.node.fields.slug
     return(
         <React.Fragment key={i}>
             <Col lg={4} md={6} >
                 <Link to={slug} className="link-card">
                 <CardComponent image={cardImage} link={"true"} slug={slug} content={cardDescription} title={cardTitle} buttonName={"Know more"} cardStyle="type-1"/>
                 </Link>
             </Col>
         </React.Fragment>
     )
   })
    return(
        <Main>
            <Hero title={servicePost.title} description={servicePost.description} imageSource={servicePost.heroImage.childImageSharp.fixed.src} />

            {/*Start: Card type 1 */}
            <section>
            <Container>
            <Row className="justify-content-md-center col-space">
            {cardData}
            </Row>
            </Container>
            </section>
            {/*End: Card type 1 */}
            {/*Start: Get Budget component */}
            <GetBudget/>
            {/*End: Get Budget component */}
        </Main>
    )
}
export const query = graphql`
  query($slug: String!) {
    services : markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
          heroImage{
        childImageSharp {
                 fixed(width: 3000) {
            src
          }
            }
         }     

      }
    }
 servicesList: allMarkdownRemark(filter: {fields: {slug: {regex: "/services/", nin: "/services/"}}}, sort: {fields: frontmatter___order}) {
edges {
      node {
        frontmatter {
          title
          cardTitle
          cardDescription
          cardIcon{
           childImageSharp {
           fluid(toFormatBase64: PNG, fit: CONTAIN, base64Width: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          order
        }
        fields {
          slug
        }
      }
          
    }
  } 
  }
`

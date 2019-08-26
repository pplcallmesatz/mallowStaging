import React from "react"
import {graphql, Link} from "gatsby"
import Main from "../components/main"
import "../styles/technologies.scss"
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardComponent from "../components/card/cardComponent";
import Hero from "../components/hero/hero"

export default ({ data }) => {
  const post = data.tech
  const allTechnologies = data.techDetailed
  const cardData=allTechnologies.edges.map((data,i)=>{
    const cardImage = data.node.frontmatter.cardIcon.childImageSharp.fluid.src;
    const cardTitle = data.node.frontmatter.title
    const cardDescription = data.node.frontmatter.cardDescription;
    const slug = data.node.fields.slug
    const buttonName = "Know More"
    return(
      <React.Fragment key={i}>
        <Col md={4} className="col-space" >
          <Link to={slug} className={" "}>
            <CardComponent image={cardImage} link={"true"} slug={slug} content={cardDescription} title={cardTitle} buttonName={"Know more"} cardStyle={"type-4"} />
          </Link>
          </Col>
      </React.Fragment>
    )
  })
  return (
    <div>
      <Main footer={post.frontmatter.title} location={post.fields.slug}>
        {/* Page Content */}
        {/* Start: Hero Section */}
        <Hero imageSource={post.frontmatter.heroImage.childImageSharp.fixed.src} title={post.frontmatter.title} description={post.frontmatter.description} />
        {/* End: Hero Section */}
        {/* Start: Technologies card data */}
        <section>
        <Container>
        <Row className={""}>
        {cardData}
        </Row>
      </Container>
      </section>
        {/* End: Technologies card data */}

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
    tech: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields{
       slug
      }
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
    techDetailed:  allMarkdownRemark(filter: {fields: {slug: {regex: "/technologies/", ne: "/technologies/"}}}) {
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
        }
        fields {
          slug
        }
      }
    }
  }
  }
`

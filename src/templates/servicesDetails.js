import React from "react"
import {graphql, Link} from "gatsby"
import "../styles/styles.scss"
import CardComponent from '../components/cardComponent'
import Main from '../components/main'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default ({ data }) => {
    const post = data.services
    const cardData=post.frontmatter.dataMD.map((data,i)=>{
        var imgData=data.sourceIcon
        const imgSrc = post.frontmatter[imgData].childImageSharp.fluid.src
        return (
            <React.Fragment key={i}>
                <Col md={4} >
                    <Link className="link-style-none" to="/contact/">
                        <CardComponent image={imgSrc} title={data.title} content={data.content} info={data.more}/>
                    </Link></Col>
            </React.Fragment>
        )
    });

    return (
        <Main>
            <Row className=" container justify-content-md-center">
            {cardData}
            </Row>

        </Main>
    )
}

export const query = graphql`
  query($slug: String!) {
    services: markdownRemark(fields: { slug: { eq: $slug } }) {
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
          imagesOne {
          childImageSharp {
           fluid(toFormatBase64: PNG, fit: CONTAIN, base64Width: 1000) {
                ...GatsbyImageSharpFluid
            }
          }
        }
          imagesTwo {
          childImageSharp {
           fluid(toFormatBase64: PNG, fit: CONTAIN, base64Width: 1000) {
                ...GatsbyImageSharpFluid
            }
          }
        }
          imagesThree {
          childImageSharp {
           fluid(toFormatBase64: PNG, fit: CONTAIN, base64Width: 1000) {
                ...GatsbyImageSharpFluid
            }
          }
        }
          imagesFour {
          childImageSharp {
           fluid(toFormatBase64: PNG, fit: CONTAIN, base64Width: 1000) {
                ...GatsbyImageSharpFluid
            }
          }
        }
          imagesFive {
          childImageSharp {
           fluid(toFormatBase64: PNG, fit: CONTAIN, base64Width: 1000) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        dataMD {
            content
            title
            sourceIcon
       
            }  
      }
    }

  }
`

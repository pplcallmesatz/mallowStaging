import React from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Main from '../components/main'
import CardComponent from '../components/card/cardComponent'
import GetBudget from '../components/getBudget/get-budget';
import Hero from "../components/hero/hero";
import '../styles/services.scss'
export default ({ data }) => {
    const post = data.services

    // Start: Iterating the applications card
    const cardData_One=post.frontmatter.application.map((data,i)=>{
        var imgData=data.sourceIcon;
        const imgSrc = post.frontmatter[imgData].childImageSharp.fluid.src;
        return (
            <React.Fragment key={i}>
                <Col md={6} lg={4} >
                    <CardComponent  image={imgSrc} title={data.title} content={data.content} cardStyle={"type-2"} />
                </Col>
            </React.Fragment>
        )
    });
    // End: Iterating the applications card

    // Start: Iterating the Process card
    const cardData_Two=post.frontmatter.process.map((data,i)=>{
        var imgData=data.sourceIcon;
        const imgSrc = post.frontmatter[imgData].childImageSharp.fixed.src;

        return (
            <React.Fragment key={i}>
                <Col md={6} lg={4}  >
                    <CardComponent  image={imgSrc} title={data.title} content={data.content} cardStyle={"type-3"}   />
                </Col>
            </React.Fragment>
        )
    });
    // End: Iterating the Process card
    return (
        <Main>
            {/*Start: Hero*/}
            <Hero title={post.frontmatter.title} description={post.frontmatter.description} imageSource={post.frontmatter.heroImage.childImageSharp.fixed.src} />
            {/*End: Hero*/}
            {/*Start: Card type 2 */}
            <section>
                <Container>
                    <Row className="justify-content-md-center col-space">
                        {cardData_One}
                    </Row>
                </Container>
            </section>
            {/*End: Card type 2 */}
            {/*Start: What we do */}
            <section  className="what-to-do text-center">
                <Container>
                        <h1>What we do</h1>
                        <p>
                            {post.frontmatter.whatToDo}
                        </p>
                </Container>
            </section>
            {/*End: What we do */}
            {/*Start: Card type 3 */}
            <section>
                <Container>
                    <Row className="justify-content-md-center col-space styled-icon">
                        {cardData_Two}
                    </Row>
                </Container>
            </section>
            {/*End: Card type 3 */}

            {/*Start: Get Budget component */}
            <GetBudget/>
            {/*End: Get Budget component */}
        </Main>
    )
}
export const query = graphql`
  query($slug: String!) {
    services: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        whatToDo       
       heroImage{
      childImageSharp {
                 fixed(width: 3000) {
            src
          }
            }
         }   
          applicationIconOne {
          childImageSharp {
          fixed {
                src
              }
          }
        }
          applicationIconTwo {
          childImageSharp {
        fixed {
                src
              }
          }
        }
          applicationIconThree {
          childImageSharp {
           fixed {
                src
              }
          }
        }
          applicationIconFour {
          childImageSharp {
           fixed {
                src
              }
          }
        }
          applicationIconFive {
          childImageSharp {
           fixed {
                src
              }
          }
        }
         applicationIconSix {
          childImageSharp {
           fixed {
                src
              }
          }
        }
         applicationIconSeven {
          childImageSharp {
           fixed {
                src
              }
          }
        }
         applicationIconEight {
          childImageSharp {
           fixed {
                src
              }
          }
        }
         applicationIconNine {
          childImageSharp {
          fixed {
                src
              }
          }
        }
         applicationIconTen {
          childImageSharp {
          fixed {
                src
              }
          }
        }
         processIconOne {
          childImageSharp {
           fixed {
                src
              }
          }
        }
         processIconTwo {
          childImageSharp {
           fixed {
                src
              }
          }
        }
         processIconThree {
          childImageSharp {
           fixed {
                src
              }
          }
        }
         processIconFour {
          childImageSharp {
           fixed {
                src
              }
          }
        }
         processIconFive {
          childImageSharp {
           fixed {
                src
              }
          }
        }
         processIconSix {
          childImageSharp {
           fixed {
                src
              }
          }
        }
         processIconSeven {
          childImageSharp {
          fixed {
                src
              }
          }
        }
         processIconEight {
          childImageSharp {
           fixed {
                src
              }
          }
        }
         processIconNine {
          childImageSharp {
           fixed {
                src
              }
          }
        }
         processIconTen {
          childImageSharp {
           fixed {
                src
              }
          }
        }
        application {
            content
            title
            sourceIcon
            }  
        process {
            content
            title
            sourceIcon
            } 
      }
    }
  }
`

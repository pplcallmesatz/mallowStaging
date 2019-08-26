import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import Main from "../components/main"
import CardOne from "../components/cardOne"
import CardTwo from "../components/cardTwo"
// import Container from "../components/container"

import CardThree from "../components/cardThree"
import CardFour from "../components/cardFour"
import Container from "../components/container"
import "../styles/styles.scss"
import GatsbyImage from 'gatsby-image';

class Card extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      card: "cardOne"
    };
  }
  cardChoose =(value)=>{
    this.setState({card:value})
  }
  renderCards(){
   if(this.state.card === "cardOne"){
     return(
       <CardOne />
     )
   }
   else if(this.state.card === "cardTwo"){
     return(
       <CardTwo />
     )
   }
   else if(this.state.card === "cardThree"){
     return(
       <CardThree />
     )
   }
   else{
     return(
       <CardFour />
     )
   }


  }
  render() {
    console.log(this.props);
    const post = this.props.data.markdownRemark
    const imageCheck = post.frontmatter.imageCheck;
    const check = true
    return (
      <div>
        <div>
          <Main footer={post.frontmatter.title}>
            {/* Page Content */}
            <h1>{post.frontmatter.title}</h1>
            {imageCheck ?( <img src={post.frontmatter.images.childImageSharp.fluid.src} />):('')}
            <div className={"myPOst"} dangerouslySetInnerHTML={{ __html: post.html }} />
            <button onClick={()=>this.cardChoose("cardOne")}>Card One</button>
            <button onClick={()=>this.cardChoose("cardTwo")}>Card Two</button>
            <button onClick={()=>this.cardChoose("cardThree")}>Card Three</button>
            <button onClick={()=>this.cardChoose("cardFour")}>Card Four</button>
            <div>
              {this.state.card === "cardOne"? <CardOne /> : <CardTwo />}
            </div>
            <div>{this.renderCards()}</div>
            {/* End: Page Content */}
          </Main>
        </div>
      </div>
    );
  }
}
export default Card



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
      }
    }
  }
`

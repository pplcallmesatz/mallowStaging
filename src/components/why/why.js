import React from "react";
import  {Card}  from 'react-bootstrap';
import "../../styles/styles.scss";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  "./why.scss";
import  WhyMallow from  "./why-mallow"
// Common card element for iteration
class IterateCard extends React.Component{
  render() {
    var count = this.props.number  + 1
    if(this.props.number < 9){
      // Convert to double digit
    count = "0"+ count
    }
    return (
      <Card className="">
        <div className={"count"}><span>{count}</span></div>
        <div className={"content"} key={this.props.number} >{this.props.content}</div>
      </Card>
    )
  }
}
export default class Why extends React.Component{
  render() {
    const cont = this.props.content.why
    const title = this.props.content.title
    const four = cont.map(function(why, i) {

    if(i <= 3){
      return(
        <Col lg={6} key={i}>
          <IterateCard number={i} content={why}/>
        </Col>
      )
    }
  })
    const five = cont.map(function(why, i) {

      if(i >= 4){
        return(
          <Col lg={4} key={i}>
            <IterateCard number={i} content={why}/>
          </Col>
        )
      }
    })

    return (
      <React.Fragment>
        <section  className={"why"}>
        <Container>
       <Row>
         <Col lg={4} className={"split-title"}>
           <h2 className={"lg-split-title"}>Why <span>{title} ?</span></h2>
         </Col>
         <Col lg={8}>
           <Row>
             {four}
           </Row>
         </Col>
       </Row>
        <Row>
          {five}
        </Row>
        </Container>
        </section>

        {/* Start: why mallow section*/}
        <WhyMallow content={this.props.content}/>
        {/* End: why mallow section*/}

      </React.Fragment>
    );
  }
}

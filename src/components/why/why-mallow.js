import React from "react";
import  {Card}  from 'react-bootstrap';
import "../../styles/styles.scss";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class WhyMallow extends React.Component{
  render() {
    const title = this.props.content.title
    const cont = this.props.content.whyMallow
    const cards = cont.map(function(contant, i) {
      var count = i + 1;
      if(count < 10){
        // Convert to double digit
        count = "0"+ count
      }
        return(
          <Col lg={6} key={i}>
            <div className={"--content"}>
              <span>{count}</span>
              <div>{contant}</div>
            </div>
          </Col>
        )
    })

    return (
      <React.Fragment>
        <section  className={"why-mallow"}>
          <Container>
            <h2 className={"title text-center"}>Why Mallow Tech for {title}?</h2>
          <Row>
            {cards}
          </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

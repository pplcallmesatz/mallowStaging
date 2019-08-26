import React from "react";
import Container from 'react-bootstrap/Container'
import  "./hero.scss"


export default class Hero extends React.Component{
  render() {

    return (
      <React.Fragment>
      <section className={"hero"} style ={ { backgroundImage: "url("+this.props.imageSource+")" } }>
        <Container className={"text-center"}>
          {this.props.title.toLowerCase() !== "no title"? (<h1 className={"title"}> {this.props.title}</h1>):("")}
          {this.props.description.toLowerCase() !== "no description"? (<p className={"description"}> {this.props.description}</p>):("")}
        </Container>
      </section>
      </React.Fragment>
    );
  }
}


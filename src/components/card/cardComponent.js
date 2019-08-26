import React from "react";
import {Card} from 'react-bootstrap';
import "./card.scss";

export default class CardComponent extends React.Component {
    render() {
        return (
          <Card className={this.props.cardStyle}>
              <Card.Body>
                  <div className="icon">
                      <img src={this.props.image} alt={this.props.title}/>
                  </div>
                  <h4 className="card-title">{this.props.title}</h4>
                  <Card.Text className="card-content">
                      {this.props.content}
                  </Card.Text>
                  {this.props.link === "true" ? (
                    <div><p className="link-button">{this.props.buttonName}</p></div>) : ("")}
              </Card.Body>
          </Card>
        );
    }
}
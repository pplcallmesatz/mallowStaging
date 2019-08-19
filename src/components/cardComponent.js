import React from "react";
import  {Card}  from 'react-bootstrap';
import "../styles/styles.scss";
export default class CardComponent extends React.Component{
    render() {
        return (
                        <Card className="card-box" onClick={this.handleClick}>

                            <img style={{width:"40px"}} src={this.props.image}/>

                            <Card.Body>
                                <h4 className="card-title">{this.props.title}</h4>
                                <Card.Text className="card-content">
                                    {this.props.content}
                                </Card.Text>
                            </Card.Body>
                            <h6>{this.props.info}</h6>
                        </Card>
        );
    }
}
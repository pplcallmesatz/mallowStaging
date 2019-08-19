import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby"
const ListLink = props => (

  <Link activeClassName="active" className={props.className} to={props.to}>{props.children}</Link>

)


export default class CardFour extends React.Component{
  render() {
    return (
      <div>
        <h1>Card Four</h1>
      </div>
    );
  }
}
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby"
const ListLink = props => (

  <Link activeClassName="active" className={props.className} to={props.to}>{props.children}</Link>

)


export default class CardThree extends React.Component{
  render() {
    return (
      <div>
        <h1>Card Three</h1>
      </div>
    );
  }
}
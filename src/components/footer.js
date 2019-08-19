import React from 'react';
import Logo from  "../../static/img/logo-white.png"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  "./footer.scss"
import { Helmet } from "react-helmet"

const ListLink = props => (

  <Link activeClassName="active" className={props.className} to={props.to}>{props.children}</Link>

)

function homeFooter(){
  return (
    <section>
    <div className={"featuredIn"}>
      <h1 className={"text-center"}>Sample</h1>
    </div>
    </section>
  )
}
function commonFooter(){
  return (
    <React.Fragment>

    <Container className={"main-footer"}>
      <Row>
        <Col lg={5}>
      <img className={"brand-logo"} src={Logo} alt="Logo" />
      <p>Mallow Technologies Private Limited is a Mobile and web app development Company located in Karur, Tamilnadu. The company
        was incorporated in the year 2010 by a team of experienced IT Professionals.
      </p>
        </Col>
        <Col lg={3}>
          <ul className={"b-r"}>
            <li className={"foo-title"}>Company</li>
            <li><Link to={"/"}>About us</Link></li>
            <li><Link to={"/"}>Services</Link></li>
            <li><Link to={"/"}>Portfolio</Link></li>
            <li><Link to={"/"}>Teams</Link></li>
            <li><Link to={"/"}>Career</Link></li>
          </ul>
        </Col>
        <Col lg={4}>
          <ul>
            <li className={"foo-title"}>Get in Touch</li>
            <li><a href={"mailto:contact@mallow-tech.com"}><i className="fa fa-address-card-o" aria-hidden="true"></i>
              contact@mallow-tech.com</a></li>
            <li><a href={"tel:+91 4324 232387"}><i className="fa fa-phone" aria-hidden="true"></i>
              +91 4324 232387</a></li>
            <li><a href={"tel:+91 98842 28063"}><i className="fa fa-mobile" aria-hidden="true"></i>
              +91 98842 28063</a></li>
          </ul>
          <div className={"social-icons"}>
            <ul>
            <li className={"facebook"}>
              <a href={"https://www.google.com"}><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
            </li>
            <li className={"twitter"}>
              <a href={"https://www.google.com"}><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </li>
            <li className={"linkedin"}>
              <a href={"https://www.google.com"}><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
            </li>
            <li className={"instagran"}>
              <a href={"https://www.google.com"}><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    <Container className={"sub-footer text-center"}>
      2019 <span className={"f-s-b"}><Link to={"/"}>Mallow technology</Link></span> | All rights reserved
    </Container>
    </React.Fragment>
  )
}
export default class Footer extends React.Component{
  render() {
    return (
      <React.Fragment>
        <footer>
        {this.props.page === "Index"?(homeFooter()):("")}
        {commonFooter()}
        </footer>
      </React.Fragment>

    );
  }
}
import React from 'react';
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import  "./navbar.scss"
import Container from 'react-bootstrap/Container'
import  "../../styles/button.scss"

import Logo from  "../../../static/img/logo.png"

import { Link } from "gatsby"
const ListLink = props => (
  <Link activeClassName="active" className={props.className} to={props.to}>{props.children}</Link>
)


export default class Main extends React.Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            tech: false,
            services: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    componentDidMount() {
        const winURL = window.location.pathname;
        this.setState({
            tech: winURL.includes("technologies"),
            services: winURL.includes("services")
        })
    }
    render() {
        const baseURL = this.props.pagelocation;
        return (
          <Navbar  bg="white" fixed="top" expand="lg">
              <Container>
                  {/* <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand> */}
                  <Link to="/" className={"navbar-brand"}><img className={"brand-logo"} src={Logo} alt="Logo" /></Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto">
                          <ListLink className={"nav-link"} to="/">Home</ListLink>
                          {/*<ListLink className={"nav-link"}  to="/about/">About</ListLink>*/}
                          <ListLink className={this.state.services?"nav-link active":"nav-link"}   to="/services/">Services</ListLink>
                          <ListLink className={"nav-link"} to="/portfolio/">Portfolio</ListLink>
                          <ListLink className={this.state.tech?"nav-link active":"nav-link"}  to="/technologies/">Technologies</ListLink>
                          <ListLink className={"nav-link"}  to="/career/">Career</ListLink>
                          {/*<ListLink className={"nav-link"}  to="/blog/">Blog</ListLink>*/}
                          <ListLink className={"nav-link nav-btn btn-rounded btn-primary"}  to="/contact/">Contact</ListLink>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
    );
    }
    }


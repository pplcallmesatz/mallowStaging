import React from 'react';
import Navbar from './navbar/navbar';
import { Helmet } from "react-helmet"
import Footer from "../components/footer"
import "../styles/title.scss"

import { Link } from "gatsby"
const ListLink = props => (

<Link activeClassName="active" className={props.className} to={props.to}>{props.children}</Link>

)


class Main extends React.Component{
    render() {
        return (
          <React.Fragment>
                {/* Head content */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My Title</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                </Helmet>

            {/* Navigation Bar */}
            <header className={this.props.cardStyle}>
                <Navbar pagelocation={this.props.location}/>
            </header>
        {/* End: Navigation Bar */}
        {/* Body Content */}
            <div>
            { this.props.children }
            </div>
        {/* End: Body Content */}

        {/* Footer */}
            <Footer page={this.props.footer}/>
        {/* End: Footer */}

          </React.Fragment>
    );
    }
}
export default Main
import React from "react";
import "./getBudget.scss";
import {Link} from "gatsby";
import Container from 'react-bootstrap/Container';
export default class GetBudget extends React.Component{
    render() {
        return (
            <React.Fragment>
                <section>
                    <Container>
                        <div className="get-budget text-center">
                            <h2 className="title">want to work with us</h2>
                            <div>
                                <Link to="/contact" className="btn btn-primary"> Get Budget</Link>
                            </div>
                        </div>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
<li>
<Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
<div >
<header >
<Link to="/" >
<h3 >MySweetSite</h3>
</Link>
<ul >
<ListLink to="/">Home</ListLink>
    <ListLink to="/about/">About</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
    </ul>
    </header>
{children}
</div>
)
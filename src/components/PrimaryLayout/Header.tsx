import { Link } from "gatsby"
import * as React from "react"
import { container } from "../../styles/base.css"
import Avatar from "../Avatar"
import { links } from "./PrimaryLayout.css"

const Header: React.FC = () => {
	return (
		<header>
			<div className={ container }>
				<Link to="/">
					<Avatar />
				</Link>
				<ul className={ links }>
					<li><Link to="/blog">Blog</Link></li>
					<li><Link to="/speaking">Speaking</Link></li>
					<li><Link to="/about">About Me</Link></li>
				</ul>
			</div>
		</header>
	)
}

export default Header

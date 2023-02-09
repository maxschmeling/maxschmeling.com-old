import { Link } from "gatsby"
import * as React from "react"
import Avatar from "../../Avatar"
import { name, title, wrapper } from "./Overview.css"

const Overview: React.FC = () => {
	return (
		<div className={ wrapper }>
			<header>
				<Avatar />
				<Link to="/about">About Me</Link>
			</header>
			<div style={ { padding: "1rem", paddingBottom: "5rem" } }>
				<h1 className={ name }>Max Schmeling</h1>
				<h2 className={ title }>Full-stack Developer</h2>
				<p>I'm a software developer based in Lenexa, Kansas. I've been building software professionally for about 17 years. I have worked with everything from native video rendering to the latest web frameworks. I'm passionate about building useful things with software.</p>
				<ul>
					<li><Link to="/blog">Latest blog posts</Link></li>
					<li><Link to="/speaking">Public speaking</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Overview

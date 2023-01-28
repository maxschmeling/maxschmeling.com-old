import * as React from "react"
import { Link } from "gatsby"
import { container, menuWrapper } from "../../styles/base.css"
import { menu } from "./MainMenu.css"
import Avatar from "../Avatar"

const MainMenu: React.FC = () => {
	return (
		<div className={ `${ container } ${ menuWrapper }` }>
			<Avatar />
			<ul className={ menu }>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/uses">Uses</Link></li>
				<li><Link to="/speaking">Speaking</Link></li>
				{/* <li><Link to="/courses">Courses</Link></li> */}
				<li><Link to="/contact">Contact</Link></li>
			</ul>
		</div>
	)
}

export default MainMenu

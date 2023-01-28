import * as React from "react"
import { themeClass, container, page, mainContent } from "../styles/base.css"
import MainMenu from "./MainMenu"

const Layout: React.FC< React.PropsWithChildren > = ({ children }) => {
	return <div className={ `${ themeClass } ${ page }` }>
		<header>
			<MainMenu />
		</header>
		<main>
			<div className={ `${ container } ${ mainContent }` }>
				{ children }
			</div>
		</main>
	</div>
}

export default Layout

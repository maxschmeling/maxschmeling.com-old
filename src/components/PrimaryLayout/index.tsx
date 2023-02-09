import * as React from "react"
import { themeClass, page, container } from "../../styles/base.css"
import Header from "./Header"

const Layout: React.FC< React.PropsWithChildren > = ({ children }) => {
	return <div className={ `${ themeClass } ${ page }` }>
		<Header />
		<main className={ container }>
			{ children }
		</main>
	</div>
}

export default Layout

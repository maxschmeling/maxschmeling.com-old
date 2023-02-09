import { HeadFC } from "gatsby"
import * as React from "react"
import { themeClass } from "../styles/base.css"
import { section, stickySection, scrollSnapContainer } from "../components/HomeContent/Home.css"
import KansasCity from "../components/HomeContent/KansasCity"
import Overview from "../components/HomeContent/Overview"
import ReachOut from "../components/HomeContent/ReachOut"

const HomePage: React.FC = () => {
	return (
		<div className={ `${ scrollSnapContainer } ${ themeClass }` }>
			<div className={ section }>
				<Overview />
			</div>
			<div className={ stickySection }>
				<KansasCity />
			</div>
			{/* <div className={ stickySection } style={ { backgroundColor: "blue" } }>
				<div style={{ padding: 5}}><p>My name is Max.</p></div>
			</div>
			<div className={ stickySection } style={ { backgroundColor: "purple" } }>
				<div style={{ padding: 5}}><p>I'm a software developer.</p></div>
			</div> */}
			<div className={ stickySection }>
				<ReachOut />
			</div>
		</div>
	)
}

( HomePage as any ).layout = null

export default HomePage

export const Head: HeadFC = () => <title>Max Schmeling</title>

import * as React from "react"
import { name, title, wrapper } from "./ReachOut.css"

const ReachOut: React.FC = () => {
	return (
		<div className={ wrapper }>
			<p>I'm not available for hire, but you're welcome to reach out to me about anything on this site or just anything in general. No promises that I get back to you, but I'll try!</p>
			<p>The best place to reach me is probably on Twitter at <a href="https://twitter.com/MaxSchmeling">@maxschmeling</a>. If you don't want to reach out on Twitter, you can try email at <a href="mailto:max@maxschmeling.me">max@maxschmeling.me</a>. All I can say about email though is "best of luck to you".</p>
		</div>
	)
}

export default ReachOut

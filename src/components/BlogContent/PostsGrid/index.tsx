import { Link } from "gatsby"
import * as React from "react"
import { listing } from "./PostsGrid.css"

type Props = {
	posts: Queries.BlogQuery["latest"]
}

const PostsGrid: React.FC<Props> = props => {
	return (
		<div className={ listing }>
			{ props.posts.nodes.map( node => {
				return ( 
					<article key={ node.id }>
						<Link to={ `/${ node.frontmatter?.slug }` }>
							<h2>{ node.frontmatter?.title }</h2>
							<h3>{ node.frontmatter?.date }</h3>
						</Link>
					</article>
				);
			} ) }
		</div>
	)
}

export default PostsGrid

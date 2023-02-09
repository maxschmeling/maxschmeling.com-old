import { Link } from "gatsby"
import * as React from "react"
import { list } from "./CategoryList.css"

type Props = {
	categories: Queries.BlogQuery["posts"]["categories"]
}

const CategoryList: React.FC<Props> = ( { categories } ) => {
	return <div>
		<ul className={ list }>
			{ categories.map( item => (
				<li key={ item.category }>
					<Link to={ `/blog?category=${ item.category }` }>{ item.category }</Link>
				</li>
			) ) }
		</ul>
	</div>
}

export default CategoryList

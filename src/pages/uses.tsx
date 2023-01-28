import * as React from "react"
import { HeadFC } from "gatsby"

const UsesPage: React.FC = () => {
  return (
		<>
			<h1>Uses</h1>
			<p>
				This is what I use! This is what I use! This is what I use! This is what I use! This is what I use! This is what I use! 
			</p>
		</>
  )
}

// export const pageQuery = graphql`
//   query Home($skip: Int! = 0) {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//     featuredPost: allMdx( filter: { frontmatter: { featured: { eq: true } } } ) {
//       totalCount
//       nodes {
//         id
//         excerpt
//         frontmatter {
//           title
//           date
//           slug
//           category
//         }
//       }
//     }
//     allMdx(sort: { frontmatter: { date: DESC } }, limit: 10, skip: $skip) {
//       totalCount
//       nodes {
//         id
//         excerpt
//         frontmatter {
//           title
//           date
//           slug
//           category
//         }
//       }
//     }
//   }
// `;

export default UsesPage

export const Head: HeadFC = () => <title>Uses - Max Schmeling</title>

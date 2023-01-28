import * as React from "react"
import { HeadFC } from "gatsby"
import { container } from "../styles/base.css"

const CoursesPage: React.FC = () => {
  return (
		<p>
			This is where you can find my courses!
    </p>
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

export default CoursesPage

export const Head: HeadFC = () => <title>Contact - Max Schmeling</title>

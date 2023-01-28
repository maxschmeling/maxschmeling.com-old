import * as React from "react"
import { HeadFC } from "gatsby"
import { container } from "../styles/base.css"

const ContactPage: React.FC = () => {
  return (
    <>
			<h1>Contact</h1>
      <p>
        I'm on Twitter as <a href="https://twitter.com/maxschmeling">@maxschmeling</a> and you can email me at <a href="mailto:max@maxschmeling.me">max@maxschmeling.me</a>.
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

export default ContactPage

export const Head: HeadFC = () => <title>Contact - Max Schmeling</title>

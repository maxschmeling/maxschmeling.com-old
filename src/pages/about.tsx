import * as React from "react"
import { HeadFC } from "gatsby"
import { container } from "../styles/base.css"

const AboutPage: React.FC = () => {
  return (
    <>
      <h1>Hi! I'm Max.</h1>
      <p>
        I'm a software developer living in Lenexa, KS. I work for Automattic in the WordPress VIP division.
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

export default AboutPage

export const Head: HeadFC = () => <title>About Max</title>

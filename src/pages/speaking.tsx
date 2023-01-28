import * as React from "react"
import { graphql, HeadFC, Link, PageProps } from "gatsby"

const SpeakingPage: React.FC<PageProps<Queries.SpeakingPageQuery>> = props => {
  return (
    <>
      <h1>Speaking</h1>
      <ul>
        { props.data.speakingPosts?.nodes.map( node => (
          <li key={node.id}>
            <Link to={ `/${ node.frontmatter?.slug }` }>{ node.frontmatter?.title }</Link>
          </li>
        ) ) }
      </ul>
    </>
  )
}

export default SpeakingPage

export const pageQuery = graphql`
  query SpeakingPage($skip: Int! = 0) {
    speakingPosts: allMdx(filter: { frontmatter: { category: { eq: "Speaking" } } } sort: { frontmatter: { date: DESC } }, limit: 10, skip: $skip) {
      totalCount
      nodes {
        id
        excerpt
        frontmatter {
          title
          date
          slug
          category
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Speaking - Max Schmeling</title>

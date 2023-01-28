import * as React from "react"
import { HeadFC, PageProps, graphql, Link } from "gatsby"
import MainMenu from "../components/MainMenu"
import { container } from "../styles/base.css"

const IndexPage: React.FC<PageProps<Queries.HomeQuery>> = ( props ) => {
  return (
    <>
      <h1>Hi! I'm Max.</h1>
      <p>
        Welcome to my little slice of the internet.
      </p>
      <h2>Featured</h2>
      <h2>Latest</h2>
      <ul>
        { props.data.allMdx?.nodes.map( node => (
          <li key={node.id}>
            <Link to={node.frontmatter?.slug ?? ''}>{ node.frontmatter?.title }</Link>
          </li>
        ) ) }
      </ul>
    </>
  )
}

export const pageQuery = graphql`
  query Home($skip: Int! = 0) {
    site {
      siteMetadata {
        title
        description
      }
    }
    featuredPost: allMdx( filter: { frontmatter: { featured: { eq: true } } } ) {
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
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 10, skip: $skip) {
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

export default IndexPage

export const Head: HeadFC = () => <title>Max Schmeling</title>

import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import { container } from "../styles/base.css"

const shortcodes = { Link } // Provide common components here

const PostPage: React.FC< PageProps< Queries.PostQuery > > = ( { data: { mdx }, children } ) => {
  const frontmatter = mdx?.frontmatter

  return (
    <div className={ container }>
      { !! frontmatter?.image?.publicURL && <img src={ frontmatter.image.publicURL} style={ { width: 200 } } /> }
      <h1>{ frontmatter?.title }</h1>
      <h2>{ frontmatter?.date }</h2>
      <div>
        <MDXProvider components={shortcodes}>
          { children }
        </MDXProvider>
      </div>
    </div>
  )
}

export default PostPage;

export const pageQuery = graphql`
  query Post($id: String!) {
    mdx( id: { eq: $id } ) {
      frontmatter {
        date( fromNow: true )
        slug
        title
        image {
          publicURL
        }
      }
    }
  }
`

export const Head: HeadFC< Queries.PostQuery > = props => <title>{ props.data?.mdx?.frontmatter?.title ?? "Unknown" }</title>

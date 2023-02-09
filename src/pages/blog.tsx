import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react"

const BlogPage: React.FC<PageProps<Queries.BlogQuery>> = props => {
	
	return <section>
		<h1>Blog</h1>
	</section>
}

( BlogPage as any ).layout = null


export const pageQuery = graphql`
  query Blog($skip: Int! = 0) {
    site {
      siteMetadata {
        title
        description
      }
    }
    featured: allMdx( filter: { frontmatter: { featured: { eq: true } } }, sort: { frontmatter: { date: DESC } }, limit: 3 ) {
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
    latest: allMdx(sort: { frontmatter: { date: DESC } }, limit: 10, skip: $skip) {
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

export default BlogPage

export const Head: HeadFC = () => <title>Blog • Max Schmeling</title>

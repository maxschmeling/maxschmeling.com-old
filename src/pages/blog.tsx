import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react"
import CategoryList from "../components/BlogContent/CategoryList";
import PostsGrid from "../components/BlogContent/PostsGrid";
import PrimaryLayout from "../components/PrimaryLayout";
import { blogPage, pageContent } from "../styles/Blog.css";

const BlogPage: React.FC<PageProps<Queries.BlogQuery>> = props => {
	return <section className={ blogPage }>
    <h1>Blog</h1>
    <div className={ pageContent }>
      <PostsGrid posts={ props.data.latest } />
      <CategoryList categories={ props.data.posts.categories } />
    </div>
	</section>
}

( BlogPage as any ).layout = PrimaryLayout


export const pageQuery = graphql`
  query Blog($skip: Int! = 0) {
    site {
      siteMetadata {
        title
        description
      }
    }
    posts: allMdx(filter: {fields: {source: {eq: "posts"}}}) {
      categories: group(field: {frontmatter: {category: SELECT}}) {
        category: fieldValue
        totalCount
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
    latest: allMdx( filter: { frontmatter: { hidden: { ne: true } } } sort: { frontmatter: { date: DESC } }, limit: 10, skip: $skip) {
      totalCount
      nodes {
        id
        excerpt
        frontmatter {
          title
          date( formatString: "MMM DD, YYYY" )
          slug
          category
        }
      }
    }
  }
`;

export default BlogPage

export const Head: HeadFC = () => <title>Blog • Max Schmeling</title>

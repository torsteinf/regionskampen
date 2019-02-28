import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(limit: 10, sort: { 
      order: DESC,
      fields: [frontmatter___date]
    }) { 
      edges { 
        node {
          excerpt (pruneLength: 300)
          frontmatter { 
            title
            slug
            date(formatString: "D. MMMM YYYY")
          }
        }
      }
    }
  }
`

const Listing = () => (
  <StaticQuery 
    query={LISTING_QUERY}
    render={({allMarkdownRemark}) => (
      allMarkdownRemark.edges.map(edge => (
        <article key={edge.node.frontmatter.slug}>
          <Link to={`/kamprapporter/${edge.node.frontmatter.slug}`}>
            <h2>{edge.node.frontmatter.title}</h2>
          </Link>
          <p>{edge.node.frontmatter.date}</p>
          <p>{edge.node.excerpt}</p>
          <Link to={`/kamprapporter/${edge.node.frontmatter.slug}`}>Les hele saken</Link>
        </article>
      ))
    )}
  />
)

export default Listing

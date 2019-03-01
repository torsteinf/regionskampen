import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import styled from 'styled-components'

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: rebeccapurple;
  }
`

const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive {
  allMarkdownRemark(limit: 5, sort: { 
  	order: DESC,
    fields: [frontmatter___date]
  }) { 
    edges { 
      node {
        excerpt 
        frontmatter { 
          title
          slug
          date
        }
      }
    }
  }
}
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        <aside>
          <h3>Arkiv</h3>
          <ArchiveList>
            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.frontmatter.slug}>
              {edge.node.frontmatter.date}: <Link to={`/kamprapporter/${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
              </li>
            ))}
          </ArchiveList>
          
        </aside>
      </>
    )}
  />
)

export default Archive

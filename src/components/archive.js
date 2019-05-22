import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import styled from 'styled-components'

const ArkivWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`

const ArchiveList = styled.ul`
  margin: 0;
  list-style: none;
  font-size: 1rem;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    text-decoration: underline;
    color: rebeccapurple;
  }
  @media (max-width: 640px) {
    font-size: 0.7rem;
  }
`

const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive {
  allMarkdownRemark(sort: { 
  	order: DESC,
    fields: [frontmatter___publishdate]
  }) { 
    edges { 
      node {
        excerpt 
        frontmatter { 
          title
          slug
          publishdate(locale:"nb", formatString: "D. MMMM YYYY")
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
          <ArkivWrapper>
            <h3>Arkiv</h3>
            <ArchiveList>
              {allMarkdownRemark.edges.map(edge => (
                <li key={edge.node.frontmatter.slug}>
                {edge.node.frontmatter.publishdate}: <Link to={`/${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
                </li>
              ))}
            </ArchiveList>
          </ArkivWrapper>
        </aside>
      </>
    )}
  />
)

export default Archive

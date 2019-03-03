import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

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
            ingress
            bilde {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 500px));
  
`

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 1.2rem;
  }
  p {
    font-size: 0.8rem;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: rebeccapurple;
  }
`

const Listing = () => (
  <Cards>
  <StaticQuery 
    query={LISTING_QUERY}
    render={({allMarkdownRemark}) => (
      
      allMarkdownRemark.edges.map(edge => (
        <Post key={edge.node.frontmatter.slug}>
          <Link to={`/kamprapporter/${edge.node.frontmatter.slug}`}>
          <Img fluid={edge.node.frontmatter.bilde.childImageSharp.fluid} />
            <h2>{edge.node.frontmatter.title}</h2>
          </Link>
          <p>{edge.node.frontmatter.ingress}</p>
          <Link className="read-more" to={`/kamprapporter/${edge.node.frontmatter.slug}`}>Les hele saken</Link>
        </Post>
      ))
      
    )}
  /></Cards>
)

export default Listing

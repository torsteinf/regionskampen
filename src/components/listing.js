import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(limit: 10, sort: { 
      order: DESC,
      fields: [frontmatter___publishdate]
    }) { 
      edges { 
        node {
          frontmatter { 
            title
            slug
            publishdate(formatString: "D. MMMM YYYY")
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
  justify-content: center;
  margin-bottom: 2rem;
  @media (min-width: 600px) and (max-width: 999px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 300px));
  }
  @media (max-width: 599px){
    grid-template-columns: repeat(auto-fill, minmax(150px, 620px));
  }
`

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  font-family: 'Open Sans', Arial, sans-serif;
  padding: 0.5rem;
  border-radius: 2px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  div {
    font-size: 0.8rem;
    text-align: justify;
    line-height: 1rem;
  }
  h2 {
    margin-bottom: 0.1rem;
  }
  .read-more {
    font-size: 0.8rem;
    text-decoration: underline;
    color: rebeccapurple;
  }
  :hover {
    box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.15);
  }
  img {
    padding: 0;
  }
`

const Listing = () => (
  <Cards>
    <StaticQuery 
      query={LISTING_QUERY}
      render={({allMarkdownRemark}) => (
        allMarkdownRemark.edges.map(edge => (
          <Post key={edge.node.frontmatter.slug}>
            <Link to={`/${edge.node.frontmatter.slug}`}>
            <Img fluid={edge.node.frontmatter.bilde.childImageSharp.fluid} alt="" />
              <h2>{edge.node.frontmatter.title}</h2>
            </Link>
            <div>{edge.node.frontmatter.ingress}</div>
            <Link className="read-more" to={`/${edge.node.frontmatter.slug}`}>Les hele saken</Link>
          </Post>
        ))
        
      )}
    />
  </Cards>
)

export default Listing

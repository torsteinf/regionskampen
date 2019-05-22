import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import Img from 'gatsby-image'
import styled from 'styled-components'
import SEO from "../components/seo"

const Tekst = styled.div`
  text-align: justify;
  font-famtily: 'Open Sans', Arial, sans-serif;
  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    float: right;
  };
`

const NyheterWrapper = styled.div`
  @media (max-width: 1025px) {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
`

export default class newsLayout extends Component {
  
  render() {
    const { markdownRemark } = this.props.data
    const { location } = this.props
    
    return (
      <Layout location={location}>
        <SEO title={markdownRemark.frontmatter.title} />
        <Img fluid={markdownRemark.frontmatter.bilde.childImageSharp.fluid} />
        <NyheterWrapper>

          

          <h2>{markdownRemark.frontmatter.title}</h2>
          <Tekst dangerouslySetInnerHTML={{
            __html: markdownRemark.html
          }} />

          <p>Publisert {markdownRemark.frontmatter.publishdate}. Skrevet av {markdownRemark.frontmatter.author}</p>

          

          
        </NyheterWrapper>
      </Layout>
    )
  }
}

export const query = graphql`
  query NewsQuery ($slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        author
        publishdate(locale:"nb", formatString: "D. MMMM YYYY")
        bilde {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    } 
  }
`
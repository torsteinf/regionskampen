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

const KampWrapper = styled.div`
  @media (max-width: 1025px) {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
`

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    const { location } = this.props
    return (
      <Layout location={location}>
        <SEO title={markdownRemark.frontmatter.title} />
        <Img fluid={markdownRemark.frontmatter.bilde.childImageSharp.fluid} />
        <KampWrapper>
          <h2>{markdownRemark.frontmatter.title}</h2>
          <Tekst dangerouslySetInnerHTML={{
            __html: markdownRemark.html
          }} />
          <p>Publisert {markdownRemark.frontmatter.date}</p>
        </KampWrapper>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery ($slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date
        bane
        dommer
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
import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Tekst = styled.div`
  text-align: justify;
  font-famtily: 'Open Sans';
`



export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    const { location } = this.props
    return (
      <Layout location={location}>
        <Img fluid={markdownRemark.frontmatter.bilde.childImageSharp.fluid} />
        <h2>{markdownRemark.frontmatter.title}</h2>
        <Tekst dangerouslySetInnerHTML={{
          __html: markdownRemark.html
        }} />
        <p>Publisert {markdownRemark.frontmatter.date}</p>
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
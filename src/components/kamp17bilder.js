import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Lightbox from './lightbox'

const Kamp17Bilder = () => (
  <StaticQuery
    query={graphql`
      query {
        kamp17Bilder: allFile(filter: {sourceInstanceName: {eq: "kamp17"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox kamp17Bilder={data.kamp17Bilder.edges} /> }
  />
)

export default Kamp17Bilder
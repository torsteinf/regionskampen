import React, { Component } from 'react';
import { graphql } from 'gatsby'
import Lightbox from 'react-images';

export default class Kamp17photos extends Component{

  render() {
    const { allFile } = this.props.data
    return (
      <Lightbox 
      images={[
        `${allFile.edges.node.childImageSharp.fluid.map(allFile => (
          allFile
        ))}`
        
      ]}
      isOpen={this.state.lightboxIsOpen}
      onClickPrev={this.gotoPrevious}
      onClickNext={this.gotoNext}
      onClose={this.closeLightbox}
    />
    )
  }
}
  

export const query = graphql`
  query PhotoQuery {
    allFile(filter: {
      extension: {regex: "/(jpg)/"}
    }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2000) {
              src
            }
          }
        }
      }
    }
  }
`
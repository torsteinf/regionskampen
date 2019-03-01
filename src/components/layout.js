/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"
import { Spring } from 'react-spring/renderprops'
import styled from 'styled-components'
import Header from "./header"
import Archive from './archive'
import "./layout.css"

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 4fr;
  grid-gap: 40px;
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: {
            regex: "/593/"
          }) {
            childImageSharp { 
              fluid(maxWidth: 1000) { 
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Spring
          from={{height: location.pathname === '/' ? 100 : 300}}
          to={{height:  location.pathname === '/' ? 300 : 100}}
        >
          {styles => (
            <div style={{overflow: 'hidden', ...styles}}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring>
       
        
        <MainLayout>
          <div>
            {children}
          </div>
        </MainLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Header from "./header"
import MobileFooter from './mobilefooter'
import "./layout.css"

const MainLayout = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 1rem;
  padding-bottom: 4rem;
  display: grid;
  grid-template-columns: 4fr;
  grid-gap: 40px;
  font-family: 'Open Sans', 'Arial', sans-serif;
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
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />

        <MainLayout>
          <div>
            {children}
          </div>
        </MainLayout>

        <MobileFooter />
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

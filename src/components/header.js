import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: #524763;
  img {
    margin-bottom:0;
    width: 150px;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.5rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper
    
  >
    <HeaderContainer
      style={{
        
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        > 
          
          {siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

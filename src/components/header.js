import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import arkiv from '../images/list.svg'
import kamper from '../images/spillere.svg'
import statistikk from '../images/growth.svg'
import spillere from '../images/soccer-athlete.svg'


const HeaderWrapper = styled.div`
  background: #183B66;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.5rem;
  font-family: 'Anton';
  
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  
`

const NavItem = styled.div`
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    color: #43CCC1;
  }
  img {
    display: block;
    width: 50px;
    height: 50px;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  padding-left: 1rem;
  justify-content: center;
  align-items: center;
`

const DesktopHeader = styled.div`
  font-size: 2.5rem;
  padding-top: 1rem;
  margin-left: 1rem;
  float: left;
  @media (max-width: 640px) {
    display:none;
  }
`

const MobileHeader = styled.div`
  font-size: 4rem;
  padding-top: 1rem;
  padding-left: 1rem;
  float: left;
  @media (min-width: 640px) {
    display:none;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      
        
            
            <DesktopHeader>
            <Link to="/" style={{
                color: `white`,
                textDecoration: `none`,
              }}
            > 
              {siteTitle}
              </Link>
            </DesktopHeader>
            <MobileHeader>
            <Link to="/" style={{
                color: `white`,
                textDecoration: `none`,
              }}
            > 
              R
              </Link>
            </MobileHeader>
          
            <Nav>
        <NavItem>
          <Link to="/arkiv">
            <img src={arkiv} alt="arkivlogo" />
            Arkiv
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/kampstatistikk">
            <img src={kamper} alt="statistikklogo" />
            Kamper
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/statistikk">
            <img src={statistikk} alt="statistikklogo" />
            Statistikk
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/spillere">
            <img src={spillere} alt="spillere" />
            Spillere
          </Link>
        </NavItem>
      
      </Nav>
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

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import logo from '../images/logo.png'
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
  
`

const NavItem = styled.div`
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    color: #43CCC1;
  }
  a svg:hover {
    fill: #43CCC1;
  }
  img {
    display: block;
    width: 50px;
    height: 50px;
  }
  padding-left: 1rem;
`

const DesktopHeader = styled.div`
  font-size: 2.5rem;
  padding-top: 1rem;
  margin-left: 1rem;
  float: left;
`

const NavFooterOnMobile = styled.div`
  @media (max-width: 600px) {
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

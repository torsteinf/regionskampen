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
  padding-top: 0.5rem;
  font-family: 'Josefin Sans', 'Arial', sans-serif;
  line-height: 50px;
  vertical-align: middle;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;;
  align-items: center;
  margin-right: 1rem;
  @media (max-width: 720px) {
    display:none;
  }  
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
    width: 40px;
    height: 40px;
    padding-bottom: 0;
    margin: 0 auto;
  }
  padding-left: 1rem;
  justify-content: center;
  align-items: center;
`

const DesktopHeader = styled.div`
  font-size: 4rem;
  padding-top: 1rem;
  float: left;
  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
  @media (max-width: 720px) {
    float: none;
    text-align: center;
    vertical-align: middle;
    padding-top: 0.2rem;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <DesktopHeader>
        <Link to="/" style={{
          color: `white`,
          textDecoration: `none`,
          }}> 
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
          <Link to="/spillerbilder">
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

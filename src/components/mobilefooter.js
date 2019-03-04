import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import arkiv from '../images/list.svg'
import kamper from '../images/spillere.svg'
import statistikk from '../images/growth.svg'
import spillere from '../images/soccer-athlete.svg'


const FooterWrapper = styled.div`
  position: fixed;
  background: #183B66;
  bottom: 0;
  width: 100%;
  height: 55px;
  @media (min-width: 720px) {
    display:none;
  }
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.5rem;
  font-family: 'Josefin Sans', 'Arial', sans-serif;
  line-height: 50px;
  vertical-align: middle;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;;
  align-items: center;
  margin-right: 1rem;
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
    width: 25px;
    height: 25px;
    margin: 0 auto;
    
  }
  padding-left: 1rem;
  justify-content: center;
  align-items: center;
  line-height: 1.6rem;
`

const MobileFooter = () => (
  <FooterWrapper>
    <FooterContainer>
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
    </FooterContainer>
  </FooterWrapper>
)

export default MobileFooter

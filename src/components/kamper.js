import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const KampBoks = styled.section`
  font-family: 'Open Sans', 'Arial', sans-serif;
  box-shadow: 4px 4px 17px -1px rgba(0,0,0,0.32);
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
`

const KampBoksOverskrift = styled.div`
  font-family: 'Secular One', 'Arial', sans-serif;;
  font-size: 1.3rem;
`

export class Kamper extends Component {
  render() {
    return (
      <div>
        <KampBoks>
        <KampBoksOverskrift>9. juli 2003: Ridabu-Ingeberg 6 - 10</KampBoksOverskrift>
          Målskårere: Sundt (2), Velle, Johansen, Grytli og Mellum - Ridabu. Mikalsen (4), T. Søby (3), Bevolden, M. Søby og Mykleset - Ingeberg.<br />
          Gule kort: Erken, Søby<br />
          Stjerner Ingeberg: T. Søby (3), Mykleset (2), Mikalsen (1).<br />
          Stjerner Ridabu: Mellum (3), Velle (2), Grytli (1).<br />
          <Link to="/kamprapporter/ingeberg-seiret-over-gladfotballen">Kamprapport: Ingeberg seiret over gladfotballen</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>15. juli 2003: Ridabu-Ingeberg 3 - 0</KampBoksOverskrift>
          Målskårere: Johansen (2) og Mellum - Ridabu.<br />
          Gule kort: Velle, Mykleset.<br />
          Stjerner Ingeberg: M. Søby (3), Mykleset (2), Olastuen (1).<br />
          Stjerner Ridabu: Mellum (3), Erken (2), Grytli (1).<br />
          <Link to="/kamprapporter/deilig-revansje-for-ridabu">Kamprapport: Deilig revansje for Ridabu</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>6. august 2004: Ridabu-Ingeberg 8 - 3</KampBoksOverskrift>
          Målskårere: D. Arnesen (4), Johansen (2), Sundt og Gjerlaug - Ridabu. Mikalsen (2) og Egeberg - Ingeberg.<br />
          Gule kort: Mellum.<br />
          Stjerner Ingeberg: Fladsrud (3), Egeberg (2), Mykleset (1).<br />
          Stjerner Ridabu: Mellum (3), D. Arnesen (2), Erken (1).<br />
          <Link to="/kamprapporter/ridabu-knuste-ingeberg">Kamprapport: Ridabu knuste Ingeberg</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>16. juli 2005: Ridabu-Ingeberg 5 - 4</KampBoksOverskrift>
          Målskårere: D. Arnesen (2), Grytli og Monsen (2) - Ridabu. Mikalsen (3) og M. Søby - Ingeberg.<br />
          Gule kort: D. Arnesen.<br />
          Stjerner Ingeberg: Mikalsen (3), M. Søby (2), Fladsrud (1).<br />
          Stjerner Ridabu: Monsen (3), D. Arnesen (2), E. Arnesen (1).<br />
          <Link to="/kamprapporter/ridabu-snudde-mot-ingeberg">Kamprapport: Ridabu snudde mot Ingeberg</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>15. juli 2006: Ridabu-Ingeberg 2 -3</KampBoksOverskrift>
          Målskårere: D. Arnesen og A. Torp - Ridabu. Mikalsen og Mellum (to sjølmål) - Ingeberg.<br />
          Stjerner Ingeberg: Egeberg (3), T. Søby (2), Mikalsen (1).<br />
          Stjerner Ridabu: Grytli (3), D. Arnesen (2), Mellum (1).<br />
          <Link to="/kamprapporter/ingeberg-tok-en-Weissflog-og-seiret">Kamprapport: Ingeberg tok en Weissflog og seiret</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>14. juli 2007: Ridabu-Ingeberg 3 - 6</KampBoksOverskrift>
          Målskårere: D. Arnesen, E. Arnesen og Monsen - Ridabu. T. Søby (2), Øverstad, Olastuen, Mikalsen og Egeberg - Ingeberg.<br />
          Stjerner Ingeberg: Fladsrud (3), T. Søby (2), Mikalsen (1).<br />
          Stjerner Ridabu: Grytli (3), D. Arnesen (2), Monsen (1).<br />
          <Link to="/kamprapporter/ingebergs-andre-strake">Kamprapport: Ingebergs andre strake</Link>
      </KampBoks>
      <KampBoks>
          <KampBoksOverskrift>12. juli 2008: Ridabu-Ingeberg 1 - 0</KampBoksOverskrift>
          Målskårere: E. Arnesen - Ridabu.<br />
          Gule kort: Mellum.<br />
          Stjerner Ingeberg: T. Søby (3), Egeberg (2), Bevolden (1).<br />
          Stjerner Ridabu: Grytli (3), Mellum (2), E. Arnesen (1).<br />
          <Link to="/kamprapporter/arnesen-la-ingebergs-trippeldrom-i-ru(i)ner">Kamprapport: Arnesen la Ingebergs trippeldrøm i ru(i)ner</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>11. juli 2009: Ridabu-Ingeberg 1 - 4</KampBoksOverskrift>
          Målskårere: Mellum - Ridabu. Johansen (sjølmål), Mikalsen (2), M. Søby - Ingeberg.<br />
          Stjerner Ingeberg: Mikalsen (3), T. Søby (2), M. Søby (1).<br />
          Stjerner Ridabu: Mellum (3), Grytli (2), Gjerlaug (1).<br />
          <Link to="/kamprapporter/mikalsen-herjet-da-kollektivet-seiret">Kamprapport: Mikalsen herjet da kollektivet seiret</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>10. juli 2010: Ridabu-Ingeberg 5 - 3 </KampBoksOverskrift>
          Målskårere: D. Arnesen (3), Mellum, A. Torp - Ridabu. Egeberg (3) - Ingeberg.<br />
          Stjerner Ingeberg: Egeberg (3), Bevolden (2), Olastuen (1).<br />
          Stjerner Ridabu: Grytli (3), D. Arnesen (2), A. Torp (1).<br />
          <Link to="/kamprapporter/kollektivet-slo-sprekker-ridabu-seiret">Kamprapport: «Kollektivet» slo sprekker – Ridabu seiret</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>9. juli 2011: Ridabu-Ingeberg 3 - 1</KampBoksOverskrift>
          Målskårere: Gjerlaug, Grytli, Monsen - Ridabu. T. Søby - Ingeberg. <br />
          Gule kort: Grandum, Olastuen.<br />
          Stjerner Ingeberg: Egeberg (3), Bevolden (2), Mikalsen (1).<br />
          Stjerner Ridabu: Grytli (3), A. Torp (2), E. Arnesen (1).<br />
          <Link to="/kamprapporter/kaptein-krig-herjet-i-tidenes-knokkelkamp">Kamprapport: «Kaptein Krig» herjet i tidenes knokkelkamp</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>14. juli 2012: Ridabu-Ingeberg 4 - 1</KampBoksOverskrift>
          Målskårere: D. Arnesen, E. Arnesen, Frogner, Mellum - Ridabu. Egeberg - Ingeberg.<br />
          Stjerner Ingeberg: T. Søby (3), Olastuen (2), Egeberg (1).<br />
          Stjerner Ridabu: A. Torp (3), Grytli (2), E. Arnesen (1).<br />
          <Link to="/kamprapporter/viljestyrken-seiret-tre-strake-for-ridabu">Kamprapport: Viljestyrken seiret – tre strake for Ridabu</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>29. juni 2013: Ridabu-Ingeberg 4 - 2</KampBoksOverskrift>
          Målskårere: D. Arnesen, Grandum (2), Sundt - Ridabu. Egeberg, T. Søby - Ingeberg.<br />
          Stjerner Ingeberg: Mikalsen (3), T. Søby (2), Mykleset (1).<br />
          Stjerner Ridabu: Grandum (3), Monsen (2), Grytli (1).<br />
          <Link to="/kamprapporter/lunde-senket-ingeberg-fire-strake-for-ridabu">Kamprapport: Lunde senket Ingeberg – fire strake for Ridabu</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>28. juni 2014: Ridabu-Ingeberg 1 - 3</KampBoksOverskrift>
          Målskårere: Bevolden (sjølmål) - Ridabu. Grønsveen, Egeberg, T. Søby - Ingeberg.<br />
          Gule kort: Grandum. <br />
          Stjerner Ingeberg: T. Søby (3), Egeberg (2), Mikalsen (1).<br />
          Stjerner Ridabu: Grytli (3), Torp (2), Monsen (1).<br />
          <Link to="/kamprapporter/ingebergs-store-kveld">Kamprapport: Ingebergs store kveld</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>26. september 2015: Ridabu-Ingeberg 4 - 4</KampBoksOverskrift>
          Målskårere: Ø. Torp (3) og Gjerlaug - Ridabu. Egeberg, Olastuen, M. Søby og T. Søby - Ingeberg. <br />
          Stjerner Ingeberg: T. Søby (3), Egeberg (2), Olastuen (1).<br />
          Stjerner Ridabu: Ø. Torp (3), A. Torp (2), D. Arnesen (1).<br />
          <Link to="/kamprapporter/debutanten-redningsmann-i-tidenes-forste-uavgjort">Kamprapport: Debutanten redningsmann i tidenes første uavgjort</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>28. mai 2016: Ridabu-Ingeberg 4 - 7</KampBoksOverskrift>
          Målskårere: D. Arnesen, E. Arnesen, Grytli og A. Torp - Ridabu. Egeberg (3), Grønsveen (2), Mikalsen og T. Søby - Ingeberg.<br />
          Stjerner Ingeberg: Mikalsen (3), Egeberg (2), Bevolden (1).<br />
          Stjerner Ridabu: Grytli (3), D. Arnesen (2), A. Torp (1).<br />
          <Link to="/kamprapporter/happy-campers-ingeberg-sjokkerte-ridabu-med-malkalas">Kamprapport: Happy campers Ingeberg sjokkerte Ridabu med målkalas</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>27. mai 2017: Ridabu-Ingeberg  2 - 8</KampBoksOverskrift>
          Målskårere: Frogner og Grandum - Ridabu. T. Søby (4), Egeberg (2), Grønsveen og Mikalsen - Ingeberg.<br />
          Stjerner Ingeberg: Mikalsen (3), T. Søby (2), Egeberg (1).<br />
          Stjerner Ridabu: Grytli (3), A. Torp (2), Mellum (1).<br />
          <Link to="/kamprapporter/rod-dominans-og-game-on-i-sammendraget">Kamprapport:  Rød dominans og «game on» i sammendraget!</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>26. mai 2018: Ridabu-Ingeberg 1 - 2</KampBoksOverskrift>
          Målskårere: E. Arnesen - Ridabu. Grønsveen og Egeberg - Ingeberg. <br />
          Stjerner Ingeberg: M. Søby (3), Grønsveen (2), Olastuen (1).<br />
          Stjerner Ridabu: D. Arnesen (3), Grytli (2), E. Arnesen (1). <br />
          <Link to="/kamprapporter/sundts-avskjed-ga-ikke-resultat">Kamprapport: Sundts avskjed ga ikke resultat</Link>
      </KampBoks>
      <KampBoks>
        <KampBoksOverskrift>1. juni 2019: Ridabu-Ingeberg 2 - 2</KampBoksOverskrift>
           Målskårere: Ø. Torp og Sundt - Ridabu. Grønsveen (2) - Ingeberg.
          {/* <br />
          Stjerner Ingeberg:  (3),  (2), (1).<br />
          Stjerner Ridabu:  (3),  (2),  (1). 
          <Link to=""></Link> */}
      </KampBoks>
      </div>
    )
  }
}

export default Kamper

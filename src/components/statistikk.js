import React, { Component } from 'react'
import styled from 'styled-components'

const StatistikkWrapper = styled.div`
  @media (max-width: 1025px) {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
`

export class Statistikk extends Component {
  render() {
    return (
      <StatistikkWrapper>
      <h3>Toppskårer</h3>
      <ul>
        <li>15 mål: Even Egeberg og Lars Mikalsen</li>
        <li>14 mål: David Arnesen og Trond Søby</li>
        <li>7 mål: Magnus Grønsveen</li>
        <li>5 mål: Espen Arnesen, Jon Arne Johansen, Ole Johnny Sundt og Henrik Mellum</li>
        <li>4 mål: Dag Grytli, Øyvind Monsen, Magne Søby og Øyvind Torp</li>
        <li>3 mål: Hans Magnus Gjerlaug, Vegard Grandum og Amund Torp</li>
        <li>2 mål: Torstein Frogner og Cato Olastuen</li>
        <li>1 mål: Brage Bevolden, Kristian Mykleset, Gudmund Velle og Sindre Øverstad </li>
      </ul>

      <h3>Sjølmål</h3>
      <ul>
        <li>2 sjølmål: Henrik Mellum</li>
        <li>1 sjølmål: Brage Bevolden, Jon Arne Johansen</li>
      </ul>

      <h3>Stjernehimmelen</h3>
      <p><em>Ikke oppdatert med kamp 18.</em></p>
      <ul>
        <li>33 stjerner: Dag Grytli</li>
        <li>25 stjerner: Trond Søby</li>
        <li>21 stjerner: Even Egeberg</li>
        <li>20 stjerner: Lars Mikalsen</li>
        <li>16 stjerner: David Arnesen og Henrik Mellum</li>
        <li>13 stjerner: Amund Torp</li>
        <li>9 stjerner: Magne Søby</li>
        <li>7 stjerner: Øyvind Fladsrud og Øyvind Monsen</li>
        <li>6 stjerner: Espen Arnesen, Brage Bevolden, Kristian Mykleset og Cato Olastuen</li>
        <li>3 stjerner: Edvard Erken, Vegard Grandum og Øyvind Torp</li>
        <li>2 stjerner: Magnus Grønsveen og Gudmund Velle</li>
        <li>1 stjerne: Hans Magnus Gjerlaug</li>
      </ul>

      <h3>Kamper spilt </h3>
      <li>18 kamper: Even Egeberg, Lars Mikalsen og Trond Søby</li>
      <li>17 kamper: Torstein Frogner og Ole Johnny Sundt</li>
      <li>16 kamper: Brage Bevolden og Dag Grytli</li>
      <li>15 kamper: David Arnesen, Cato Olastuen, Magne Søby og Amund Torp</li>
      <li>13 kamper: Espen Arnesen, Henrik Mellum og Sindre Øverstad</li>
      <li>12 kamper: Kristian Mykleset</li>
      <li>11 kamper: Magnus Grønsveen</li>
      <li>10 kamper: Øyvind Monsen  </li>
      <li>9 kamper: Remi Farmen og Vegard Grandum</li>
      <li>6 kamper: Edvard Erken, Hans Magnus Gjerlaug og Jon Arne Johansen.</li>
      <li>4 kamper: Øyvind Torp.</li>
      <li>3 kamper: Øyvind Fladsrud.</li>
      <li>2 kamper: Gudmund Velle.</li>
      <li>1 kamp: Simen Arnesen, Anders Busterud, Sindre Eide og Lars Mathias Nes.</li>
      
    </StatistikkWrapper>
    )
  }
}

export default Statistikk

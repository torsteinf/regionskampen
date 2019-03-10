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
        <li>5 mål: Espen Arnesen, Magnus Grønsveen, Jon Arne Johansen og Henrik Mellum</li>
        <li>4 mål: Dag Grytli, Øyvind Monsen, Ole Johnny Sundt og Magne Søby</li>
        <li>3 mål: Hans Magnus Gjerlaug, Vegard Grandum, Amund Torp og Øyvind Torp</li>
        <li>2 mål: Torstein Frogner og Cato Olastuen</li>
        <li>1 mål: Brage Bevolden, Kristian Mykleset, Gudmund Velle og Sindre Øverstad </li>
      </ul>

      <h3>Sjølmål</h3>
      <ul>
        <li>2 sjølmål: Henrik Mellum</li>
        <li>1 sjølmål: Brage Bevolden, Jon Arne Johansen</li>
      </ul>

      <h3>Stjernehimmelen</h3>
      <p><em>Det er ikke satt stjerner for 2018-kampen ennå.</em></p>
      <ul>
        <li>31 stjerner: Dag Grytli</li>
        <li>25 stjerner: Trond Søby</li>
        <li>21 stjerner: Even Egeberg</li>
        <li>20 stjerner: Lars Mikalsen</li>
        <li>16 stjerner: Henrik Mellum</li>
        <li>13 stjerner: David Arnesen og Amund Torp</li>
        <li>7 stjerner: Øyvind Fladsrud og Øyvind Monsen</li>
        <li>6 stjerner: Brage Bevolden, Kristian Mykleset og Magne Søby</li>
        <li>5 stjerner: Cato Olastuen</li>
        <li>4 stjerner: Espen Arnesen</li>
        <li>3 stjerner: Edvard Erken, Vegard Grandum og Øyvind Torp</li>
        <li>2 stjerner: Gudmund Velle</li>
        <li>1 stjerne: Hans Magnus Gjerlaug</li>
      </ul>

      <h3>Kamper spilt </h3>
      <li>17 kamper: Even Egeberg, Lars Mikalsen og Trond Søby</li>
      <li>16 kamper: Torstein Frogner, Dag Grytli og Ole Johnny Sundt</li>
      <li>15 kamper: Brage Bevolden</li>
      <li>14 kamper: David Arnesen, Cato Olastuen, Magne Søby og Amund Torp</li>
      <li>13 kamper: Henrik Mellum</li>
      <li>12 kamper: Espen Arnesen og Kristian Mykleset og Sindre Øverstad</li>
      <li>10 kamper: Magnus Grønsveen  </li>
      <li>9 kamper: Remi Farmen, Vegard Grandum og Øyvind Monsen</li>
      <li>6 kamper: Edvard Erken, Hans Magnus Gjerlaug og Jon Arne Johansen.</li>
      <li>3 kamper: Øyvind Fladsrud og Øyvind Torp.</li>
      <li>2 kamper: Gudmund Velle.</li>
      <li>1 kamp: Anders Busterud, Sindre Eide og Lars Mathias Nes.</li>
      
    </StatistikkWrapper>
    )
  }
}

export default Statistikk

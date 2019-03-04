import React, { Component } from 'react';
import styled from 'styled-components'
import amundt from '../images/spillere/amundt.jpg'
import brageb from '../images/spillere/brageb.jpg'
import catoo from '../images/spillere/catoo.jpg'
import dagg from '../images/spillere/dagg.jpg'
import davida from '../images/spillere/davida.jpg'
import espena from '../images/spillere/espena.jpg'
import evene from '../images/spillere/evene.jpg'
import hansmagnusg from '../images/spillere/hansmagnusg.jpg'
import henrikm from '../images/spillere/henrikm.jpg'
import jonarnej from '../images/spillere/jonarnej.jpg'
import kristianm from '../images/spillere/kristianm.jpg'
import larsm from '../images/spillere/larsm.jpg'
import magnes from '../images/spillere/magnes.jpg'
import magnusg from '../images/spillere/magnusg.jpg'
import olejohnnys from '../images/spillere/olejohnnys.jpg'
import oyvindm from '../images/spillere/oyvindm.jpg'
import remif from '../images/spillere/remif.jpg'
import sindreo from '../images/spillere/sindreo.jpg'
import torsteinf from '../images/spillere/torsteinf.jpg'
import tronds from '../images/spillere/tronds.jpg'
import vegardg from '../images/spillere/vegardg.jpg'

// Planlagt forbedring: Legg til opacity under teksten. For å få det til 
// legg to like bilder over hverandre: https://codepen.io/paulobrien/pen/xLamrj

const ridabu = [
  {
    photo: amundt,
    text: "Amund Torp"
  },
  {
    photo: dagg,
    text: "Dag Grytli"
  },
  {
    photo: davida,
    text: "David Arnesen"
  },
  {
    photo: espena,
    text: "Espen Arnesen"
  },
  {
    photo: hansmagnusg,
    text: "Hans Magnus Gjerlaug"
  },
  {
    photo: henrikm,
    text: "Henrik Mellum"
  },
  {
    photo: jonarnej,
    text: "Jon Arne Johansen"
  },
  {
    photo: olejohnnys,
    text: "Ole Johnny Sundt"
  },
  {
    photo: oyvindm,
    text: "Øyvind Monsen"
  },
  {
    photo: torsteinf,
    text: "Torstein Frogner"
  },
  {
    photo: vegardg,
    text: "Vegard Grandum"
  },
];

const ingeberg = [
  {
    photo: brageb,
    text: "Brage Bevolden"
  },
  {
    photo: catoo,
    text: "Cato Olastuen"
  },
  {
    photo: evene,
    text: "Even Egeberg"
  },
  {
    photo: kristianm,
    text: "Kristian Mykleset"
  },
  {
    photo: larsm,
    text: "Lars Mikalsen"
  },
  {
    photo: magnes,
    text: "Magne Søby"
  },
  {
    photo: magnusg,
    text: "Magnus Grønsveen"
  },
  {
    photo: remif,
    text: "Remi Farmen"
  },
  {
    photo: sindreo,
    text: "Sindre Øverstad"
  },
  {
    photo: tronds,
    text: "Trond Søby"
  },
]

const SpillergalleriWrapper = styled.div`
  h1 {
    text-align: center;
  }
`

const Bildegalleri = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
  img {
    width: 100%;
    height: auto;
    line-height: 0;
    border-radius: 20px;
  }

  .navn {
    position: relative;
  }
`

const Bildetekst = styled.div`
  position: absolute;
  bottom: 2.2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #f1fff4;
  font-family: 'Anton', 'Arial';
  font-size: 1.6rem;
  opacity: .8;
`

export default class Spillergalleri extends Component {
  render() {
    return (
      <SpillergalleriWrapper>
        <h1>Ingeberg</h1>
        <Bildegalleri>
          {ingeberg.map((e, idx) =>
            <div className="navn">
              <Bildetekst>{e.text}</Bildetekst>
              <img 
                src={e.photo} 
                alt={e.text}
                key={idx}
              />
            </div>
          )}
        </Bildegalleri>
        <h1>Ridabu</h1>
        <Bildegalleri>
          {ridabu.map((e, idx) =>
            <div className="navn">
              <Bildetekst>{e.text}</Bildetekst>
              <img 
                src={e.photo} 
                alt={e.text}
                key={idx}
              />
            </div>
          )}
        </Bildegalleri>
      </SpillergalleriWrapper>
    )
  }
}
import React from "react"
import Layout from "../components/layout"
import Img from 'gatsby-image'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from "../components/seo"

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
    z-index:-1;
  }

  .navn {
    position: relative;
  }
`

const Bildetekst = styled.div`
  position: absolute;
  bottom: 0.1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #f1fff4;
  font-family: 'Josefin Sans', 'Arial', sans-serif;
  font-size: 1.6rem;
  opacity: .8;
  z-index: 0;
  text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
`

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 550) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Spillere" />
      <SpillergalleriWrapper>
        <h1>Ingeberg</h1>
        <Bildegalleri>
          <div className="navn">
            <Bildetekst>Brage Bevolden</Bildetekst>
            <Img fluid={data.brageb.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Cato Olastuen</Bildetekst>
            <Img fluid={data.catoo.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Even Egeberg</Bildetekst>
            <Img fluid={data.evene.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Kristian Mykleset</Bildetekst>
            <Img fluid={data.kristianm.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Lars Mikalsen</Bildetekst>
            <Img fluid={data.larsm.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Magne Søby</Bildetekst>
            <Img fluid={data.magnes.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Magnus Grønsveen</Bildetekst>
            <Img fluid={data.magnusg.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Remi Farmen</Bildetekst>
            <Img fluid={data.remif.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Sindre Øverstad</Bildetekst>
            <Img fluid={data.sindreo.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Trond Søby</Bildetekst>
            <Img fluid={data.tronds.childImageSharp.fluid} />
          </div>
        </Bildegalleri>

        <h1>Ridabu</h1>
        <Bildegalleri>
          <div className="navn">
            <Bildetekst>Amund Torp</Bildetekst>
            <Img fluid={data.amundt.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Dag Grytli</Bildetekst>
            <Img fluid={data.dagg.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>David Arnesen</Bildetekst>
            <Img fluid={data.davida.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Espen Arnesen</Bildetekst>
            <Img fluid={data.espena.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Hans Magnus Gjerlaug</Bildetekst>
            <Img fluid={data.hansmagnusg.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Henrik Mellum</Bildetekst>
            <Img fluid={data.henrikm.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Jon Arne Johansen</Bildetekst>
            <Img fluid={data.jonarnej.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Ole Johnny Sundt</Bildetekst>
            <Img fluid={data.olejohnnys.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Øyvind Monsen</Bildetekst>
            <Img fluid={data.oyvindm.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Torstein Frogner</Bildetekst>
            <Img fluid={data.torsteinf.childImageSharp.fluid} />
          </div>
          <div className="navn">
            <Bildetekst>Vegard Grandum</Bildetekst>
            <Img fluid={data.vegardg.childImageSharp.fluid} />
          </div>
        </Bildegalleri>
      </SpillergalleriWrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    amundt: file(relativePath: { regex: "/amundt/"}) {
      ...squareImage
    }

    brageb: file(relativePath: { regex: "/brageb/"}) {
      ...squareImage
    }

    catoo: file(relativePath: { regex: "/catoo/"}) {
      ...squareImage
    }

    dagg: file(relativePath: { regex: "/dagg/"}) {
      ...squareImage
    }

    davida: file(relativePath: { regex: "/davida/"}) {
      ...squareImage
    }

    espena: file(relativePath: { regex: "/espena/"}) {
      ...squareImage
    }

    evene: file(relativePath: { regex: "/evene/"}) {
      ...squareImage
    }

    hansmagnusg: file(relativePath: { regex: "/hansmagnusg/"}) {
      ...squareImage
    }

    henrikm: file(relativePath: { regex: "/henrikm/"}) {
      ...squareImage
    }

    jonarnej: file(relativePath: { regex: "/jonarnej/"}) {
      ...squareImage
    }

    kristianm: file(relativePath: { regex: "/kristianm/"}) {
      ...squareImage
    }

    larsm: file(relativePath: { regex: "/larsm/"}) {
      ...squareImage
    }

    magnes: file(relativePath: { regex: "/magnes/"}) {
      ...squareImage
    }

    magnusg: file(relativePath: { regex: "/magnusg/"}) {
      ...squareImage
    }

    olejohnnys: file(relativePath: { regex: "/olejohnnys/"}) {
      ...squareImage
    }

    oyvindm: file(relativePath: { regex: "/oyvindm/"}) {
      ...squareImage
    }

    remif: file(relativePath: { regex: "/remif/"}) {
      ...squareImage
    }

    sindreo: file(relativePath: { regex: "/sindreo/"}) {
      ...squareImage
    }

    torsteinf: file(relativePath: { regex: "/torsteinf/"}) {
      ...squareImage
    }

    tronds: file(relativePath: { regex: "/tronds/"}) {
      ...squareImage
    }

    vegardg: file(relativePath: { regex: "/vegardg/"}) {
      ...squareImage
    }
  }
`
import { StaticQuery, graphql } from 'gatsby'
import React from "react"
import styled from 'styled-components'
import  star  from '../images/star.svg'

const Boks = styled.div`
  border: 2px solid black;
  width: 300px;
  float: right;
  font-family: 'Open Sans', 'Arial', sans-serif;
  font-size: 0.8rem;
  margin: 0.7rem;
  .overskriftstil {
    background: silver;
    width: 100%;
    font-size: 1rem;
    font-weight: 700;
    margin: 0 auto;
    text-align: center;
    letter-spacing: 2px;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
  @media (max-width: 450px) {
    width: 95%;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "overskrift overskrift"
    "resultat resultat"
    "tekst tekst"
    "banedato banedato"
    "maloverskrift maloverskrift"
    "maltekst maltekst"
    "dommeroverskrift dommeroverskrift"
    "dommertekst dommertekst"
    "gulekortoverskrift gulekortoverskrift"
    "gulekorttekst gulekorttekst"
    "lagoverskrift lagoverskrift"
    "ridabulag ingeberglag"
    "stjerneoverskrift stjerneoverskrift"
    "stjerneboks stjerneboks";
`

const Overskrift = styled.div`
  grid-area: overskrift;
`

const Resultat = styled.div`
  font-weight: 700;
  grid-area: resultat;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const Tekst = styled.div`
  grid-area: tekst;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const BaneDato = styled.div`
  grid-area: banedato;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const Maloverskrift = styled.div`
  grid-area: maloverskrift;
`

const Maltekst = styled.div`
  grid-area: maltekst;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const Dommeroverskrift = styled.div`
  grid-area: dommeroverskrift;
`

const Dommertekst = styled.div`
  grid-area: dommertekst;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const Gulekortoverskrift = styled.div`
  grid-area: gulekortoverskrift;
`

const Gulekorttekst = styled.div`
  grid-area: gulekorttekst;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const Lagoverskrift = styled.div`
  grid-area: lagoverskrift;
`

const RidabuLag = styled.div`
  grid-area: ridabulag;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const IngebergLag = styled.div`
  grid-area: ingeberglag;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const Lag = styled.div`
  list-style: none;
` 

const Stjerneoverskrift = styled.div`
  grid-area: stjerneoverskrift;
`

const Stjerneboks = styled.div`
  grid-area: stjerneboks;
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
  grid-template-rows: auto;
  grid-template-areas:
    "ridabustjerner stjerner ingebergstjerner";
`

const Ridabustjerner = styled.div`
  grid-area: ridabustjerner;
  text-align: center;
`

const Stjerner = styled.div`
  grid-area: stjerner;
  text-align: center;
  img {
    width: 12px;
    line-height: 0;
    margin: 0 auto;
  }
`

const Ingebergstjerner = styled.div`
  grid-area: ingebergstjerner;
  text-align: center;
`

const Kamprapport = () => (
  <StaticQuery
    query={KAMPRAPPORT_QUERY}
    render={({allMatchesJson}) => (
      <>
        {allMatchesJson.edges.map(edge => (
          <Boks key={edge.node.id}>
            <Overskrift className="overskriftstil">FOTBALLFAKTA</Overskrift>
            <Resultat>
              Ridabu &ndash; Ingeberg &nbsp;
              {edge.node.ridabu_final_score} &ndash; {edge.node.ingeberg_final_score}&nbsp;
              ({edge.node.ridabu_pause_score} &ndash; {edge.node.ingeberg_pause_score})
            </Resultat>
            <Tekst>HAMAR: Regionskamp 7-er</Tekst>
            <BaneDato>{edge.node.ground} &ndash; {edge.node.date}</BaneDato>
            <Maloverskrift className="overskriftstil">MÅL</Maloverskrift>
            <Maltekst>
              <strong>Ridabu:</strong> {edge.node.goals_ridabu.map((ridabugoals) => (ridabugoals.number_of_goals>1) ? 
                (<span>{(ridabugoals.player).split(' ').slice(-1).join(' ')} ({ridabugoals.number_of_goals}), </span>) :
                (<span>{(ridabugoals.player).split(' ').slice(-1).join(' ')},  </span>) 
              )}
              <strong>Ingeberg:</strong> {edge.node.goals_ingeberg.map((ingeberggoals) => (ingeberggoals.number_of_goals>1) ? 
                (<span>{(ingeberggoals.player).split(' ').slice(-1).join(' ')} ({ingeberggoals.number_of_goals}), </span>) :
                (<span>{(ingeberggoals.player).split(' ').slice(-1).join(' ')},  </span>) 
              )}
            </Maltekst>
            <Dommeroverskrift className="overskriftstil">DOMMER</Dommeroverskrift>
            <Dommertekst>{edge.node.referee}</Dommertekst>
            <Gulekortoverskrift className="overskriftstil">GULE KORT</Gulekortoverskrift>
            <Gulekorttekst>{edge.node.yellowcards.map(yc =>(
              <span>{ yc },  </span>
            ))}
            </Gulekorttekst>
            <Lagoverskrift className="overskriftstil">LAGENE</Lagoverskrift>
            <RidabuLag>
              <strong>Ridabu:</strong><br />
              {edge.node.team_ridabu.map(ridabu=> (
                <Lag>{ridabu}</Lag>
              ))}
            </RidabuLag>
            <IngebergLag>
              <strong>Ingeberg:</strong><br />
              {edge.node.team_ingeberg.map(ingeberg=> (
                <Lag>{ingeberg}</Lag>
              ))}
            </IngebergLag>
            <Stjerneoverskrift className="overskriftstil">STJERNER</Stjerneoverskrift>
            <Stjerneboks>
                <Ridabustjerner>
                  {edge.node.stars_ridabu.map(ridabu =>(
                    <div> {ridabu.player} </div>
                  ))}
                </Ridabustjerner>

                <Stjerner>
                    <div><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /></div>
                    <div><img src={star} alt="star" /><img src={star} alt="star" /></div>
                    <div><img src={star} alt="star" /></div>
                </Stjerner>

                <Ingebergstjerner>
                  {edge.node.stars_ingeberg.map(ingeberg =>(
                    <div> {ingeberg.player} </div>
                  ))}
                </Ingebergstjerner>

            </Stjerneboks>
          </Boks>
        ))
        }
      </>
    )}
  />
)

const KAMPRAPPORT_QUERY = graphql`
  query KamprapportElementerQuery  {
    allMatchesJson(
      filter: {
        match_id: {
          eq: 2
        }
      }
    ) { 
      edges { 
        node {
          match_id
          date(locale:"nb", formatString: "D. MMMM YYYY")
          attendance
          ground
          referee
          yellowcards 
          ridabu_final_score
          ridabu_pause_score
          ingeberg_final_score
          ingeberg_pause_score
          team_ridabu
          team_ingeberg
          goals_ridabu { 
            player
            number_of_goals
          }
          goals_ingeberg {
            player
            number_of_goals
          }
          stars_ridabu { 
            player
            number_of_stars
          }
          stars_ingeberg {
            player
            number_of_stars
          }
        }
      }
    }
  }
`

export default Kamprapport
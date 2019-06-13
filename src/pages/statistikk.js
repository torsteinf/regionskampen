import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Statistikk from '../components/statistikk'

const StatistikkPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Statistikk: Målskårere, kort, stjerner og antall kamper" />
    <Statistikk />
  </Layout>
)

export default StatistikkPage

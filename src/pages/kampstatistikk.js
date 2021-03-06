import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Kamper from '../components/kamper'



const KampstatistikkPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Liste over alle regionskamper" />
    <Kamper />
  </Layout>
)

export default KampstatistikkPage

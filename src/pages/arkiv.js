import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Arkiv from "../components/archive"

const ArkivPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Arkiv" />
    <Arkiv />
  </Layout>
)

export default ArkivPage

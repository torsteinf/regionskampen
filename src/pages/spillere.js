import React from "react"
import Layout from "../components/layout"
import Spillergalleri from '../components/spillergalleri'
import SEO from "../components/seo"

const SpillerePage = ({location}) => (
  <Layout location={location}>
    <SEO title="Spillere" />
    <Spillergalleri />
  </Layout>
)

export default SpillerePage

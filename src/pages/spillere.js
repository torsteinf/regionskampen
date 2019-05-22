import React from "react"
import Layout from "../components/layout"
import Kamp17photos from '../components/photos/kamp17photos'
import SEO from "../components/seo"

const SpillerePage = ({location}) => (
  <Layout location={location}>
    <SEO title="Spillere" />
    <Kamp17photos />
  </Layout>
)

export default SpillerePage

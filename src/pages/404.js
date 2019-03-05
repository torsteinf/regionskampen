import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Fant ikke siden du lette etter" />
    <h1>Borte</h1>
    <p>Fant ikke siden du lette etter.</p>
  </Layout>
)

export default NotFoundPage

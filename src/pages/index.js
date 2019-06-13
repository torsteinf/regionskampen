import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Listing from "../components/listing"

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Ridabu mot Ingeberg. En kamp i året siden 2003." />
    <Listing />
  </Layout>
)

export default IndexPage

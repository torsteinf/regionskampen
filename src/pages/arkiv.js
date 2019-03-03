import React from "react"

import Layout from "../components/layout"
import Arkiv from "../components/archive"

const ArkivPage = ({location}) => (
  <Layout location={location}>
    <Arkiv />
  </Layout>
)

export default ArkivPage

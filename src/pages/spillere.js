import React from "react"
import Layout from "../components/layout"
import Spillergalleri from '../components/spillergalleri'

const SpillerePage = ({location}) => (
  <Layout location={location}>
    <Spillergalleri />
  </Layout>
)

export default SpillerePage

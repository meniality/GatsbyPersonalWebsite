import React from "react"
import { Link } from "gatsby"
import Headshot from "../images/headshot1.png"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Patrick Hoehn" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <img src={Headshot}/>
    <Link to="/page-3/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css'
import Landing from "../components/landing"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />  
  </Layout>
)

export default HomePage

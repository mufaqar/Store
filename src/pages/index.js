import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Navbar ,Nav ,  Button , Form , FormControl } from 'react-bootstrap';
import '../assets/style.css'
import Landing from "../components/landing";

const IndexPage = () => (
  <Layout>
    <SEO title="Home | First BS" />
   <Landing/> 
  </Layout>
)

export default IndexPage

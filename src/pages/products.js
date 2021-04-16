import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Navbar ,Nav ,  Button , Form , FormControl } from 'react-bootstrap';
import '../assets/style.css'
import Products from '../components/products'

const ProductsPage = () => (
  <Layout>
    <SEO title="Products | First BS" />

    <Products />  


  
  </Layout>
)

export default ProductsPage

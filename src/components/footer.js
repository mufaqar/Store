

import React from 'react';
import { Link } from "gatsby"
import logo from '../assets/images/footer-logo.png';
const Footer = () =>  {
    
    return (
        
        <>

<footer>
  <div className="footer" id="footer">
    <div className="top-footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="footer_widget">
              <div className="footer-logo"><Link to="#"> <img src={logo} alt="logo not found" /></Link> </div>
         
            </div>
        
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
            <div className="footer_widget">
              <div className="footer-menu">
                <ul>
                  <li><Link to="#">Help / FAQ</Link></li>
                  <li><Link to="#">Shop</Link></li>
                  <li><Link to="#">Where to buy</Link></li>
                  <li><Link to="#">Gift Cards</Link></li>
                  <li><Link to="#">Contact Us</Link></li>
                </ul>
              </div>
      
            </div>
        
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
            <div className="footer_widget">
              <div className="footer-menu">
                <ul>
                  <li><Link to="#">About Us</Link></li>
                  <li><Link to="#">Our Shop</Link></li>
                  <li><Link to="#">Recipes</Link></li>
                  <li><Link to="#">Blog</Link></li>
                  <li><Link to="#">Delivery Information</Link></li>
                </ul>
              </div>
      
            </div>
        
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
            <div className="footer_widget">
              <div className="footer-menu">
                <ul>
                  <li><Link to="#">Faqs</Link></li>
                  <li><Link to="#">Energy Bars</Link></li>
                  <li><Link to="#">High Protein Bars</Link></li>
                </ul>
              </div>
          
              <div className="footer-social">
                <ul>
                  <li><Link to="#"><i className="fa fa-facebook"> </i> </Link></li>
                  <li><Link to="#"><i className="fa fa-twitter"> </i> </Link></li>
                  <li><Link to="#"><i className="fa fa-pinterest"> </i> </Link></li>
                  <li><Link to="#"><i className="fa fa-google-plus"> </i> </Link></li>
                  <li><Link to="#"><i className="fa fa-instagram"> </i> </Link></li>
                </ul>
              </div>
     
            </div>
        
          </div>
        </div>
      </div>
    </div>

    <div className="bottom-footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="footer_widget">
              <div className="copyright-info">
                <p>Copyright © {new Date().getFullYear()} <Link to="#">Built with       
       <Link to="https://www.gatsbyjs.com">Gatsby</Link></Link> | All Rights Reserved</p>
              </div>
              
     
              
            </div>
        
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="bottom-footer-menu">
              <ul>
                <li><Link to="#">Sitemap</Link> - <Link to="#">Terms & Conditions</Link> - <Link to="#">Privacy Policy</Link></li>
              </ul>
            </div>
       
          </div>
        </div>
      </div>
    
    </div>
  </div>
</footer>

</>

) 
}

export default Footer;
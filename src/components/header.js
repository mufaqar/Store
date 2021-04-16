import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/font-awesome/css/font-awesome.min.css';
import { Link } from "gatsby";
import logo from '../assets/images/main-logo.png';



const PageHeader = () => {
  return (
    <header>
  <div className="header" id="header">
    <div className="desktop-header">
      <div className="container">
        <div className="row h-100">
          <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6 col-12 ">
            <div className="left-area-header">
              <div className="top-row">
                <div className="header-menu">
                  <ul>
                    <li><Link to="#"><i className="fa fa-facebook"> </i> </Link></li>
                    <li><Link to="#"><i className="fa fa-twitter"> </i> </Link></li>
                    <li><Link to="#"><i className="fa fa-pinterest"> </i> </Link></li>
                    <li><Link to="#"><i className="fa fa-google-plus"> </i> </Link></li>
                    <li><Link to="#"><i className="fa fa-instagram"> </i> </Link></li>
                    <li><Link to="#">Where to Buy</Link></li>
                  </ul>
                </div>
              </div>
              <div className="bottom-row">
                <div className="header-menu">
                  <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-2 col-md-4 col-sm-6 col-12">
            <div className="header-logo"><Link to="/"> <img src={logo} alt="logo not found"/></Link> </div>
         
          </div>
          <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6 col-12 ">
            <div className="right-area-header align-right">
              <div className="top-row">
                <div className="header-menu">
                  <ul>
                    <li><Link to="#"><i className="fa fa-user"> </i> Login </Link></li>
                    <li><Link to="#"><i className="fa fa-shopping-bag"></i>
                      <div className="badge cart-badge">2 </div>
                      </Link></li>
                  </ul>
                </div>
              </div>
              <div className="bottom-row">
                <div className="header-menu">
                  <ul>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="#">Search <i className="fa fa-search"> </i> </Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mobile-header">
      <div className="container">
        <div className="row h-100">
          <div className="col-xl-4 col-lg-5 col-md-4 col-sm-5 col-5 ">
            <div className="left-area-header">
              <div className="top-row">
                <div className="header-menu">
                  <nav className="navbar navbar-expand-md navbar-light bg-transparent p-0 ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item active"> <Link className="nav-link" to="#">Home</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="#">Shop</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="#">Where to Buy</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="#">Contact Us</Link> </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-2 col-md-4 col-sm-2 col-2 ">
            <div className="header-logo"><Link to="#"> <img src={logo}  alt="logo not found"/></Link> </div>
        
          </div>
          <div className="col-xl-4 col-lg-5 col-md-4 col-sm-5 col-5 ">
            <div className="right-area-header align-right">
              <div className="top-row">
                <div className="header-menu">
                  <ul>
                    <li><Link to="#"><i className="fa fa-user"> </i> </Link></li>
                    <li><Link to="#"><i className="fa fa-shopping-bag"></i><div className="badge cart-badge">2 </div></Link></li>
                    <li><Link to="#"><i className="fa fa-search"> </i> </Link></li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</header>

  );
};

export default PageHeader;
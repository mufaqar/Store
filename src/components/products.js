
import React from 'react';
import { Link } from "gatsby"
import product_1 from '../assets/images/product-1.png';





const Products = () =>  {
    
    return (
        
        <>

<section>
  <div className="products-section">
    <div className="container">
      <div className="heading-area">
        <div className="main-heading">
          <h2>Our Products</h2>
          <hr className="rounded" />
        </div>
      </div>
      <div className="sub-heading">
        <p> Our ingredients are of the highest quality, completely natural and suitable for vegetarians.</p>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="products">
            <div className="products-img"> <img src={product_1} alt="file not found" /> </div>
            <div className="products-details">
              <div className="products-details-heading">
                <h4> <Link to="#"> Khalas Cashew</Link> </h4>
              </div>
              <div className="products-price"> $155.00 </div>
            </div>
          </div>

        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="products">
            <div className="products-img"> <img src={product_1} alt="file not found" /> </div>
            <div className="products-details">
              <div className="products-details-heading">
                <h4> <Link to="#"> Khalas Hazelnut</Link> </h4>
              </div>
              <div className="products-price"> $129.00 </div>
            </div>
          </div>
    
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="products">
            <div className="products-img"> <img src={product_1} alt="file not found" />  </div>
            <div className="products-details">
              <div className="products-details-heading">
                <h4> <Link to="#"> Khalas Pistahio Rose</Link> </h4>
              </div>
              <div className="products-price"> $129.00 </div>
            </div>
          </div>
      
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="products">
            <div className="products-img"> <img src={product_1} alt="file not found" /> </div>
            <div className="products-details">
              <div className="products-details-heading">
                <h4> <Link to="#"> Khalas Cashew</Link> </h4>
              </div>
              <div className="products-price"> $155.00 </div>
            </div>
          </div>
      
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="products">
            <div className="products-img"> <img src={product_1} alt="file not found" /> </div>
            <div className="products-details">
              <div className="products-details-heading">
                <h4> <Link to="#"> Khalas Hazelnut</Link> </h4>
              </div>
              <div className="products-price">$129.00 </div>
            </div>
          </div>
    
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="products">
            <div className="products-img"> <img src={product_1} alt="file not found" /> </div>
            <div className="products-details">
              <div className="products-details-heading">
                <h4> <Link to="#">Khalas Pistahio Rose</Link> </h4>
              </div>
              <div className="products-price"> $129.00 </div>
            </div>
          </div>

        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="main-btn"><Link to="#" className="btn btn-main" role="button">View lookbook</Link> </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>

) 
}

export default Products;
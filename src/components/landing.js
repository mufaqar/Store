
import React from 'react';
import { Link } from "gatsby"
import product_1 from '../assets/images/product-1.png';
import story_product_1 from '../assets/images/story-product-1.png';
import blog_post_3 from '../assets/images/blog-post-3.jpg';
import {Form  } from 'react-bootstrap';
import Slider from '../components/slider'

const Landing = () =>  {
    
    return (
        
        <>
      <Slider/>

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

    <section>
  <div className="story-section">
    <div className="story-container">
      <div id="slide" className="carousel slide" data-ride="carousel" align="center">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-caption row">
              <div className="col-12">
                <div className="carousel-text">
                  <div className="main-heading">
                    <h2>The Story Behind Contmproray Food!</h2>
                  </div>
                  <div className="sub-heading">
                    <p>The first product line of Contemporary Foods is Sabeeka, an energy bar made from high quality dates and nuts. The wide varieties of high-quality flavorful dates used in carefully crafted recipes, that were created after a lot of experimentation and numerous trials and errors, gives Contemporary Foods a distinct differentiation from what is available in the market locally and globally today.</p>
                  </div>
                  <hr className="rounded" />
                </div>
                <div className="story-img"> <img src={story_product_1} alt="file not found"  /> </div>
              </div>
            </div>
          </div>
      
          <div className="carousel-item">
            <div className="carousel-caption row">
              <div className="col-12">
                <div className="carousel-text">
                  <div className="main-heading">
                    <h2>The Story Behind Contmproray Food!</h2>
                  </div>
                  <div className="sub-heading">
                    <p>The first product line of Contemporary Foods is Sabeeka, an energy bar made from high quality dates and nuts. The wide varieties of high-quality flavorful dates used in carefully crafted recipes, that were created after a lot of experimentation and numerous trials and errors, gives Contemporary Foods a distinct differentiation from what is available in the market locally and globally today.</p>
                  </div>
                  <hr className="rounded" />
                </div>
                <div className="story-img"> <img src={story_product_1} alt="file not found"  /> </div>
              </div>
            </div>
          </div>
       
          <div className="carousel-item">
            <div className="carousel-caption row">
              <div className="col-12">
                <div className="carousel-text">
                  <div className="main-heading">
                    <h2>The Story Behind Contmproray Food!</h2>
                  </div>
                  <div className="sub-heading">
                    <p>The first product line of Contemporary Foods is Sabeeka, an energy bar made from high quality dates and nuts. The wide varieties of high-quality flavorful dates used in carefully crafted recipes, that were created after a lot of experimentation and numerous trials and errors, gives Contemporary Foods a distinct differentiation from what is available in the market locally and globally today.</p>
                  </div>
                  <hr className="rounded" />
                </div>
                <div className="story-img"> <img src={story_product_1} alt="file not found"  />  </div>
              </div>
            </div>
          </div>
     
          <div className="carousel-item">
            <div className="carousel-caption row">
              <div className="col-12">
                <div className="carousel-text">
                  <div className="main-heading">
                    <h2>The Story Behind Contmproray Food!</h2>
                  </div>
                  <div className="sub-heading">
                    <p>The first product line of Contemporary Foods is Sabeeka, an energy bar made from high quality dates and nuts. The wide varieties of high-quality flavorful dates used in carefully crafted recipes, that were created after a lot of experimentation and numerous trials and errors, gives Contemporary Foods a distinct differentiation from what is available in the market locally and globally today.</p>
                  </div>
                  <hr className="rounded"  />
                </div>
                <div className="story-img">  <img src={story_product_1} alt="file not found"  />  </div>
              </div>
            </div>
          </div>
    
        </div>
        <Link className="carousel-control-prev" to="#slide" data-slide="prev"> <span className="carousel-control"> <span className="carousel-control-prev-icon"></span> </span> </Link> <Link className="carousel-control-next" to="#slide" data-slide="next"> <span className="carousel-control"> <span className="carousel-control-next-icon"></span> </span> </Link>
        <ol className="carousel-indicators list-inline">
          <li className="list-inline-item active"> <Link id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#slide"> <img src={story_product_1} className="img-fluid" alt="file not found"  /> </Link> </li>
          <li className="list-inline-item"> <Link id="carousel-selector-1" data-slide-to="1" data-target="#slide"> <img src={story_product_1} className="img-fluid" alt="file not found" /> </Link> </li>
          <li className="list-inline-item"> <Link id="carousel-selector-2" data-slide-to="2" data-target="#slide"> <img src={story_product_1} className="img-fluid" alt="file not found" /> </Link> </li>
          <li className="list-inline-item"> <Link id="carousel-selector-2" data-slide-to="3" data-target="#slide"> <img src={story_product_1} className="img-fluid" alt="file not found" /> </Link> </li>
        </ol>
       
      </div>
    </div>
  </div>
</section>

    <section>
  <div className="blog-section">
    <div className="container">
      <div className="main-heading">
        <div className="heading-area">
          <h2> Latest Blog Post </h2>
          <hr className="rounded" />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <div className="blog-post">
            <div className="blog-post-img"> <img src={blog_post_3}  alt="file not found" /> </div>
            <div className="post-details">
              <div className="post-details-heading">
                <h4> The Ultimate Guide to Foods </h4>
              </div>
              <div className="post-details-link"> <Link to="#">READ THIS POST</Link> </div>
            </div>
          </div>
      
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <div className="blog-post">
            <div className="blog-post-img"> <img src={blog_post_3}  alt="file not found" /> </div>
            <div className="post-details">
              <div className="post-details-heading">
                <h4> Ambassador Spotlight: Finding </h4>
              </div>
              <div className="post-details-link"> <Link to="#">READ THIS POST</Link> </div>
            </div>
          </div>
     
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <div className="blog-post">
            <div className="blog-post-img"> <img src={blog_post_3} alt="file not found" /> </div>
            <div className="post-details">
              <div className="post-details-heading">
                <h4> 2020 Summer Bucket List Food </h4>
              </div>
              <div className="post-details-link"> <Link to="#">READ THIS POST</Link> </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</section>

    <section>
  <div className="subscribe-section">
    <div className="container">
      <div className="heading-area">
        <div className="main-heading">
          <h2>Stay up to date with news and offers.</h2>
        </div>
      </div>
      <div className="sub-heading">
        <p>We Want You To Be A Part Of Our Family... Sign Up For Special Offers, News & More!</p>
      </div>
      <div className="row">
        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12"></div>
        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
          <Form className="form-inline" action="">
            <input type="email" className="form-control rounded-0 type-email" placeholder="Enter your Email" />
            <button type="submit" className="btn btn-primary rounded-0 type-submit">Subscribe</button>
          </Form>      
        </div>
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"></div>
      </div>
    </div>
  </div>
</section>


</>

) 
}

export default Landing;
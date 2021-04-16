import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/font-awesome/css/font-awesome.min.css';
import { Link } from "gatsby";
import slide_bg from '../assets/images/slider-bg.jpg';
import slide1 from '../assets/images/slide-1-img.png';



const Slider = () => {
  return ( 
  
  <>


<section>
  <div class="hero-section">
    <div id="demo" class="carousel slide" data-ride="carousel">
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
        <li data-target="#demo" data-slide-to="3"></li>
      </ul>
   
      <div class="carousel-inner">
        <div class="carousel-item active"> <img src={slide_bg} />
          <div class="carousel-caption row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 my-auto mx-auto">
              <div class="carousel-img"> <img src={slide1}  /> </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
              <div class="carousel-text">
                <h2>Original Cont 
                  Foodenergy bar</h2>
                <p>Producing Food That Suits Your Lifestyle</p>
                <div class="main-btn"><a href="#" class="btn btn-main" role="button">Shop Now</a> </div>
              </div>
            </div>
          </div>
        </div>
      
        <div class="carousel-item">  <img src={slide_bg} />
          <div class="carousel-caption row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 my-auto mx-auto">
              <div class="carousel-img"><img src={slide1}  /> </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
              <div class="carousel-text">
                <h2>Original Cont 
                  Foodenergy bar</h2>
                <p>Producing Food That Suits Your Lifestyle</p>
                <div class="main-btn"><a href="#" class="btn btn-main" role="button">Shop Now</a> </div>
              </div>
            </div>
          </div>
        </div>
     
        <div class="carousel-item">  <img src={slide_bg} />
          <div class="carousel-caption row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 my-auto mx-auto">
              <div class="carousel-img"> <img src={slide1}  /> </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
              <div class="carousel-text">
                <h2>Original Cont 
                  Foodenergy bar</h2>
                <p>Producing Food That Suits Your Lifestyle</p>
                <div class="main-btn"><a href="#" class="btn btn-main" role="button">Shop Now</a> </div>
              </div>
            </div>
          </div>
        </div>
 
        <div class="carousel-item">  <img src={slide_bg} />
          <div class="carousel-caption row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 my-auto mx-auto">
              <div class="carousel-img"> <img src={slide1}  /> </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
              <div class="carousel-text">
                <h2>Original Cont 
                  Foodenergy bar</h2>
                <p>Producing Food That Suits Your Lifestyle</p>
                <div class="main-btn"><a href="#" class="btn btn-main" role="button">Shop Now</a> </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</section>



   </>)
}

export default Slider;
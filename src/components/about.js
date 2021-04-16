import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img_box_1 from '../assets/images/img-box-1.png';
import img_box_2 from '../assets/images/img-box-2.png';
import img_box_3 from '../assets/images/img-box-3.png';
import img_box_4 from '../assets/images/img-box-4.png';



const About = () => {
  return ( 

    <>
   <section>
  <div className="about-section">
    <div className="container">
      <div className="heading-area">
        <div className="main-heading">
          <h2>Welcome to Contempororay Food!</h2>
        </div>
        <hr className="rounded" />
        <div className="sub-heading">
          <p> Contemporary Foods, a factory first of its kind in the KSA established in the second industrial city of Jeddah in 2018.Contemporary Foods Factory focuses on developing high quality innovative food products that are in line with current trends and demands.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="image-box"> <img src={img_box_1} alt="file not found" />
            <div className="image-box-title">Gluten Free </div>
          </div>
     
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="image-box"> <img src={img_box_2} alt="file not found" />
            <div className="image-box-title">Certified Organic</div>
          </div>
      
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="image-box"> <img src={img_box_3} alt="file not found" />
            <div className="image-box-title">Halal Made</div>
          </div>
         
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="image-box"> <img src={img_box_4} alt="file not found" />
            <div className="image-box-title">Non GMO </div>
          </div>
      
        </div>
      </div>
    </div>
  </div>
</section>
     </>

  ) 

}

  export default About;
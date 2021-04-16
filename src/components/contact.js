import React from "react";
import {Form  } from 'react-bootstrap';
import call_icon from '../assets/images/call-icon.png';
import mail_icon from '../assets/images/mail-icon.png';
import direction_icon from '../assets/images/direction-icon.png';





const Contact = () => {
  return ( 

    <>


<section>
  <div className="contact-section">
    <div className="container">
      <div className="heading-area">
        <div className="main-heading">
          <h2>Contact Us</h2>
        </div>
        <hr className="rounded" />
        <div className="sub-heading mb-4">
          <p>Got a question, comment or suggestion? Please drop us a line and we’ll get right back to you.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
          <div className="contact-form">
            <Form action="" className="needs-validation" novalidate>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" id="name" placeholder="Name" required />
                  <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" id="email" placeholder="Email" required />
                  <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group col-md-6">
                  <input type="tel" className="form-control" id="phone" placeholder="Phone Number" />
                </div>
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" id="skype-id" placeholder="Skype Id" />
                </div>
                <div className="form-group col-md-6">
                  <select id="inputState" className="form-control" >
                    <option selected>Nature of Enquiry</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <select id="inputState" className="form-control" >
                    <option selected>Where did you hear about us?</option>
                    <option>From Social Media</option>
                    <option>From Educaion Department</option>
                    <option>From your Friends</option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <textarea id="message" name="w3review" className="form-control" placeholder="Enquiry/Comments" rows="5"></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-block type-submit">SEND REQUEST</button>
            </Form>
          </div>
  
        </div>
        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
      </div>
      <div className="contact-boxes">
      <div className="row">
        
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
          <div className="image-box text-center"> <img src={call_icon} alt="file not found" />
            <div className="image-box-title">+92333 47 53 749</div>
          </div>
      
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
          <div className="image-box text-center"> <img src={mail_icon} alt="file not found"/>
            <div className="image-box-title">info@contemorary.com</div>
          </div>
      
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
          <div className="image-box text-center"> <img src={direction_icon} alt="file not found" />
            <div className="image-box-title">Al Jaradyah Dist City:  Riyadh</div>
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
            <input type="email" className="form-control rounded-0 type-email" placeholder="Enter your Email"/>
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

  export default Contact;
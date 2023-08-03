import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Staff = () => {
  return (
    <React.Fragment>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-sm-4 staff-details">
            {" "}
            <h5>OUR PROFESSIONAL</h5>
            <h1>MEET OUR STAFF</h1>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4 text-end  ">
            <button className="hero-1-btn  ">VIEW ALL STAFF</button>
          </div>
        </div>
        <div className="row pt-5 text-center ">
          <div className="col-sm-4  ">
            <div className="staff-image">
              <img src="assets/staff-1.jpg" alt="" className="w-50 " />
            </div>
            <div className="pt-5">
              <h6>MARK HERENTIX</h6>
              <p>09 YEARS EXPERIENCE</p>
            </div>
            <div className="staff-links d-flex gap-3 justify-content-center ">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="staff-image">
              <img src="assets/staff-2.jpg" alt="" className="w-50 " />
            </div>
            <div className="pt-5">
              <h6>YENA KILA JIM</h6>
              <p>06 YEARS EXPERIENCE</p>
            </div>
            <div className="staff-links d-flex gap-3 justify-content-center ">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="staff-image">
              <img src="assets/staff-3.jpg" alt="" className="w-50  " />
            </div>
            <div className="pt-3">
              <h6>ALEX HERMANATO</h6>
              <p>12 YEARS EXPERIENCE</p>
            </div>
            <div className=" staff-links d-flex gap-3 justify-content-center ">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Staff;

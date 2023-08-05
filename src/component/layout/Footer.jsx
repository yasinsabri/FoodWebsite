import React from "react";
import{FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid item-bg pt-5">
        <div className="container ">
          <div className="row">
            {/* <div className="footer-heading d-flex ">
            <h1>SUBSCRIBE NEWS LETTER</h1>
            <form className="d-flex text-end  mx-5" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Keywords"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
          <div className="col-sm-3"></div>
          <div className="col-sm-3"></div>
          <div className="col-sm-3"></div>
          <div className="col-sm-3"></div> */}

            <div className="col-sm-5 ">
              <h1 className="subscribe">SUBSCRIBE NEWS LETTER</h1>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-5 text-end ">
              <form className="d-flex text-end  mx-5" role="search">
                <input
                  className="form-control footer-input me-2"
                  type="search"
                  placeholder="ENTER YOUR MAIL"
                  aria-label="Search"
                />
                <button className="footer-btn  ">SUBSCRIBE NOW</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="ft-1 pt-5">
                <h6>ABOUT FRUDBAZ</h6>
                <p>
                  Investing in BarbieToken offers a unique opportunity to be
                  part of a movement that promotes empowerment, inclusivity, and
                  positive change.
                </p>
              </div>
              <div className="d-flex gap-2">
                <img src="assets/24hr.png" alt="" className="w-25" />
                <div className="ft-1 pt-2">
                  <h6>OPENING HOURS</h6>
                  <p>
                    Mon - Sat(8:00-6:00) <br /> Sunday Closed
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 pt-5">
              <h6>CONTACT US</h6>
              <p className="ft-det">
                {" "}
                <strong className="text-black fw-bolder">ADDRESS</strong> 8638
                Americe stanford Mallibon Star, California, TX 70240
              </p>
              <p className="ft-det">
                {" "}
                <strong className="text-black fw-bolder">MAIL</strong>{" "}
                Suport@gmail.com
              </p>
              <p className="ft-det">
                {" "}
                <strong className="text-black fw-bolder">PHONE</strong>
                +92 316 5854757
              </p>
              <p className="ft-det">
                {" "}
                <strong className="text-black fw-bolder">FAX ID</strong> +956
                889 878
              </p>
            </div>
            <div className="col-sm-3 pt-5">
              <h6>LINKS</h6>
              <div className="ft-faq">
                <p>FAQ</p>
                <p>Team</p>
                <p>History</p>
                <p>Contact</p>
                <p>Recipe Menu</p>
              </div>
            </div>
            <div className="col-sm-3 pt-5">
              <div className="ft-b">
                <h6>RECENT BLOGS</h6>
                <h6>Is Fast Food Good For Your Body?</h6>
                <p>January 16,2022</p>
                <h6>Change Your Eating Habits With This Organic Food</h6>
                <p>January 16,2022</p>
              </div>
            </div>
          </div>
          <div className="row endd">
            <div className="col-sm-4 pt-3">
              <h6>LOGO</h6>
            </div>
            <div className="col-sm-4 pt-3"></div>
            <div className="col-sm-4  pt-3">
              <div className=" justify-content-end  d-flex gap-4   ">
                <FaFacebook/>
                <FaTwitter/>
                <FaYoutube/>
                <FaInstagram/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;

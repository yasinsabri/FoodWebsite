import React from "react";
import{FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa"

const Hero = () => {
  return (
    <React.Fragment>
      <div className="container pt-5 pb-2">
        <div className="row">
          <div className=" hero-1 col-sm-4 pt-5  ">
            <h6>Medium 2-Topping* Burger</h6>
            <h1>ARE YOU HUNGARY?</h1>
            <p>
              As well known and we are very busy all days advice you. Advice you
              to call us before arriving.
            </p>
            <div className="hero-btn pt-3">
              <button className="hero-1-btn">LEARN MORE</button>
              <button className="hero-1-btn2 mx-3">SEE OUR MENU</button>
            </div>
            <div className=" hero-icons d-flex  gap-4  pt-5">
                <a href="/" target="_blank" rel="noopener noreferrer"><FaFacebook/> Facebook</a>
                <a href="/" target="_blank" rel="noopener noreferrer"><FaTwitter/> Twitter</a>
                <a href="/" target="_blank" rel="noopener noreferrer"><FaYoutube/> Youtube</a>
            </div>
          </div>
          <div className="col-sm-4">
            <img src="assets/hero.png" alt="" className="w-100" />
          </div>
          <div className=" col-sm-4 pt-5">
            <div className=" d-flex  gap-5 ">
              <div className="hero-3-dt pt-3">
                <h6>GREAT LOCATION</h6>
                <p>
                  Badges scale to match the size of the immediate parent element
                  by using relative font sizing and em units.
                </p>
              </div>
              <div className="hero-3-btn pt-4">
                <button>01</button>
              </div>
            </div>
            <div className=" d-flex  gap-5 ">
              <div className="hero-3-dt pt-3">
                <h6>NATURE FIRST</h6>
                <p>
                  Badges scale to match the size of the immediate parent element
                  by using relative font sizing and em units.
                </p>
              </div>
              <div className="hero-3-btn pt-4">
                <button>02</button>
              </div>
            </div>
            <div className=" d-flex  gap-5 ">
              <div className="hero-3-dt pt-3">
                <h6>HEALTHY FOOD</h6>
                <p>
                  Badges scale to match the size of the immediate parent element
                  by using relative font sizing and em units.
                </p>
              </div>
              <div className="hero-3-btn pt-4">
                <button>03</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;

import React from "react";

const AppSection = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 text-center ">
            <img src="assets/mobile.jpg" alt="" className="w-50" />
          </div>
          <div className="col-sm-6 ">
            <div className="mobile-details pt-5">
              <h5>Download App</h5>
              <h1>BEST APP FOR FOOD DELIVERY.</h1>

              <div className="">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="assets/apple.jpg" alt="" className="w-25" />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="assets/google.png" alt="" className="w-25" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppSection;

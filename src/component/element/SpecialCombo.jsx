import React from "react";

const SpecialCombo = () => {
  return (
    <React.Fragment>
      <div className="container-fluid special-bg">
        <div className="container">
          <div className="row">
            <div className="deal-desc col-sm-6 pt-5 ">
              <h5>Special Combo Pack</h5>
              <h1 className="pt-3">WE MAKE THE BEST BURGER IN YOUR TOWN.</h1>
              <p className="pt-3">
                As well known and we are very busy all days advice you. Advice
                you to call us before arriving.As well known and we are very
                busy all days advice you. Advice you to call us before arriving.
              </p>
              <div className="pt-4">
                <button className="cmp-btn">ORDER NOW</button>
                <button type="button" className="deal-prize mx-5 ">
                  $46.99 <span className="dea-prize ">$59.99</span>
                </button>
              </div>
            </div>
            <div className="col-sm-6  text-center text-center ">
                <img src="assets/deal-img.png" alt=""  className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SpecialCombo;

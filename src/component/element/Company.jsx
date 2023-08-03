import React from "react";

const Company = () => {
  return (
    <React.Fragment>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="cmp-sec1 col-sm-6 pt-5">
            <h5>Special Offer</h5>
            <h1 className="pt-3">GOOD FOOD, DRINKS & GREAT COMPANY.</h1>
            <p className="pt-3">
              As well known and we are very busy all days advice you. Advice you
              to call us before arriving.As well known and we are very busy all
              days advice you. Advice you to call us before arriving.
            </p>
            <div className="pt-4">
              <button className="cmp-btn" >ORDER NOW</button>
              <button type="button" className="btn-prize mx-5 ">
                $46.99 <span className="badge-prize ">$59.99</span>
              </button>
            </div>
          </div>
          <div className="col-sm-6 text-center ">
            <img src="assets/cooked.png" alt="" className=" w-75 " />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Company;

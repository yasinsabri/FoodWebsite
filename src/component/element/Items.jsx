import React from "react";
import MultiCorusel from "../utils/MultiCorusel";

const Items = () => {
  return (
    <React.Fragment>
      <div className="container-fluid item-bg pb-5">
        <div className="container pt-3">
          <div className="row mt-5">
            <div className=" col-sm-12 ">
              <div className="item-heading text-center ">
                <h5>Our Popular Menu</h5>
                <h2>WENT TO EAT?</h2>
              </div>
              <div className="pt-5">
              <MultiCorusel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Items;

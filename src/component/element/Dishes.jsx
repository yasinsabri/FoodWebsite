import React from "react";

import { Tabs, Tab } from "react-bootstrap";
import Fooditems from "../utils/Fooditems";

const Dishes = () => {
  return (
    <React.Fragment>
      <div className="container-fluid item-bg">
        <div className="container pt-3">
          <div className="row">
            <div className="col-sm-12 ">
              <div className=" dishes-heading text-center ">
                <h5>Popular Dishes</h5>
                <h2>POPULAR DISHES </h2>
              </div>
              <div className="tabs-cont m-auto pt-3  ">
                <Tabs
                  defaultActiveKey="ALL CATEGORIES"
                  id="noanim-tab-example"
                  className="ttbs mb-3"
                >
                  <Tab eventKey="ALL CATEGORIES" title="ALL CATEGORIES">
                    <Fooditems />
                  </Tab>
                  <Tab eventKey="BURGER " title="BURGER">
                    {" "}
                    <Fooditems />
                  </Tab>
                  <Tab eventKey="PIZZA" title="PIZZA">
                    {" "}
                    <Fooditems />
                  </Tab>
                  <Tab eventKey="BLUEBERRY SHAKE" title="BLUEBERRY SHAKE">
                    {" "}
                    <Fooditems />
                  </Tab>
                  <Tab eventKey="CHICKEN CHUP" title="CHICKEN CHUP">
                    {" "}
                    <Fooditems />
                  </Tab>
                  <Tab eventKey="ICE CREAM" title="ICE CREAM">
                    {" "}
                    <Fooditems />
                  </Tab>
                  <Tab eventKey="DRINK" title="DRINK">
                    {" "}
                    <Fooditems />
                  </Tab>
                </Tabs>
               
              </div>
              <div  className="dish-btn pt-4 pb-4 justify-content-center text-center  ">
              <button>SEE ALL PRODUCT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dishes;

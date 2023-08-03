import React from "react";
import DishesCard from "./DishesCard";

const Fooditems = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className=" d-flex justify-content-center pt-3  gap-2 flex-wrap  ">
              <DishesCard
                imgUrl="assets/dish-img-1.jpg"
                desc="CHICKEN CHUP, DRINK"
                Title="POTATO WEDGES"
                Price="$100.00 $59.00"
              />
              <DishesCard
                imgUrl="assets/dish-img-2.jpg"
                desc="ICE CREAM PIZZA"
                Title="SULEMON BURGER"
                Price="$100.00 $59.00"
              />
              <DishesCard
                imgUrl="assets/dish-img-3.jpg"
                desc="CHICKEN CHUP, DRINK"
                Title="PASTA CARBORANA"
                Price="$100.00 $59.00"
              />
            </div>
            <div className=" d-flex justify-content-center pt-3 gap-2 flex-wrap  ">
              <DishesCard
                imgUrl="assets/dish-img-4.jpg"
                desc="CHICKEN CHUP, DRINK"
                Title="SMOKED SALMON"
                Price="$100.00 $59.00"
              />
              <DishesCard
                imgUrl="assets/dish-img-5.jpg"
                desc="CHICKEN CHUP, DRINK"
                Title="CAULIFLOWER MESH"
                Price="$100.00 $59.00"
              />
              <DishesCard
                imgUrl="assets/dish-img-6.jpg"
                desc="CHICKEN CHUP, DRINK"
                Title="EGG BURGER"
                Price="$100.00 $59.00"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Fooditems;

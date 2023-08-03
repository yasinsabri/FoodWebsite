import React from "react";

const DishesCard = ({imgUrl , desc , Title , Price}) => {
  return (
    <React.Fragment>
      <div className="card-item">
        <div className="text-center">
          <img src={imgUrl} alt=""  className=" w-50"/>
        </div>
        <div className="items-details pt-3 ">
            <p>{desc}</p>
            <h6>{Title}</h6>
            <p className="price">{Price}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DishesCard;

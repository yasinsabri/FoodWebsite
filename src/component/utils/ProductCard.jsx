import React from "react";

const ProductCard = ({title , desc , imgUrl}) => {
  return (
    <React.Fragment>
      <div className="card">
        <h6>{title}</h6>
        <p>
        {desc}
        </p>
        <img src={imgUrl} alt="" className=" w-75 d-block m-auto " />
      </div>
    </React.Fragment>
  );
};

export default ProductCard;

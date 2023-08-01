import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const MultiCorusel = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <React.Fragment>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <ProductCard
          title="CHICKEN"
          desc="Rorem ipsum advoluptateme voluptatem Rorem ipsuey"
          imgUrl="assets/card-img-1.webp"
        />
         <ProductCard
          title="PIZZA & DRINK"
          desc="Rorem ipsum advoluptateme voluptatem Rorem ipsuey"
          imgUrl="assets/card-img-2.jpg"
        />
         <ProductCard
          title="BOX MEALS"
          desc="Rorem ipsum advoluptateme voluptatem Rorem ipsuey"
          imgUrl="assets/card-img-3.jpg"
        />
         <ProductCard
          title="COMBO PACK"
          desc="Rorem ipsum advoluptateme voluptatem Rorem ipsuey"
          imgUrl="assets/card-img-4.jpg"
        />
      </Carousel>
      ;
    </React.Fragment>
  );
};

export default MultiCorusel;

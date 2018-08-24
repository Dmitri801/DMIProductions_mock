import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            style={{
              background: `url("https://images.pexels.com/photos/759832/pexels-photo-759832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`,
              height: `${window.innerHeight}px`
            }}
            className="carrousel_image"
          />
        </div>

        <div>
          <div
            style={{
              background: `url("https://images.pexels.com/photos/185030/pexels-photo-185030.jpeg?auto=compress&cs=tinysrgb&h=650&w=940")`,
              height: `${window.innerHeight}px`
            }}
            className="carrousel_image"
          />
        </div>
        <div>
          <div
            style={{
              background: `url("https://images.pexels.com/photos/1128440/pexels-photo-1128440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`,
              height: `${window.innerHeight}px`
            }}
            className="carrousel_image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

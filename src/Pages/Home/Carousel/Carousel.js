import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

const Carousel = () => {
  const settings = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="h-96 rounded-md">
      <Slider {...settings} className="h-full rounded-md">
        <div className="h-full rounded-md">
          <img
            className="object-fill h-96 w-full rounded-md"
            src="https://i.ibb.co/YZLBRhN/sl1.jpg"
            alt=""
          />
        </div>
        <div className="h-full rounded-md">
          <img
            className="object-fill h-96 w-full rounded-md"
            src="https://i.ibb.co/rc62Cf9/sl2.jpg"
            alt=""
          />
        </div>
        <div className="h-full rounded-md">
          <img
            className="object-fill h-96 w-full rounded-md"
            src="https://i.ibb.co/2K8HdRt/sl3.jpg"
            alt=""
          />
        </div>
        <div className="h-full rounded-md">
          <img
            className="object-fill h-96 w-full rounded-md"
            src="https://i.ibb.co/rZbrbsM/sl4.jpg"
            alt=""
          />
        </div>
        <div className="h-full rounded-md">
          <img
            className="object-fill h-96 w-full rounded-md"
            src="https://i.ibb.co/zsrgDdL/sl5.jpg"
            alt=""
          />
        </div>
        <div className="h-full rounded-md">
          <img
            className="object-fill h-96 w-full rounded-md"
            src="https://i.ibb.co/tschpvH/sl6.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

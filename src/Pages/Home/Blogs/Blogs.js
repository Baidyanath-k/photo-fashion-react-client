import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Blog from "./Blog";

const Blogs = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, []);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 2000,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 2000,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-white"> Blogs </h2>
      <Slider {...settings}>
        {blogDetails.map((blogDetail) => (
          <Blog key={blogDetail._id} blogDetail={blogDetail}></Blog>
        ))}
      </Slider>
    </div>
  );
};

export default Blogs;

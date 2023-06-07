import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Member from "./Member";
import "./TeamMember.css";

const TeamMember = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/teamMembers`)
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="pt-9">
      <h2 className="font-bold text-4xl text-center text-white">My Team</h2>
      <Slider {...settings}>
        {members.map((member) => (
          <Member key={member._id} member={member}></Member>
        ))}
      </Slider>
    </div>
  );
};

export default TeamMember;

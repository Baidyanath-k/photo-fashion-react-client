import React from "react";
import Services from "../../Services/Services";
import Blogs from "../Blogs/Blogs";
import Carousel from "../Carousel/Carousel";
import Collection from "../Collection/Collection";
import MyStory from "../MyStory/MyStory";
import Ratings from "../Ratings/Ratings";
import TeamMember from "../TeamMember/TeamMember";
import Tips from "../Tips/Tips";
import Videos from "../Videos/Videos";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <MyStory></MyStory>
      <Services></Services>
      <TeamMember></TeamMember>
      <Collection></Collection>
      <Videos></Videos>
      <Tips></Tips>
      <Blogs></Blogs>
      <Ratings></Ratings>
    </div>
  );
};

export default Home;

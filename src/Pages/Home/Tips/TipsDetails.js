import React from "react";
import { useLoaderData } from "react-router-dom";

const TipsDetails = () => {
  const allTips = useLoaderData();
  console.log(allTips);
  const { author, image, para, rate, title } = allTips;
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={image}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {title}
          </h1>
          <p className="mb-8 text-white text-justify leading-relaxed">{para}</p>
          <div className="flex justify-center">
            <h3 className="font-bold text-white mr-7">Author: {author}</h3>
            <h3 className="font-bold text-white ml-7">Rating: {rate}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsDetails;

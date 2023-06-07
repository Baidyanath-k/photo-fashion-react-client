import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Member = ({ member }) => {
  const { name, title, mobile, facebookLink, linkedin, img } = member;
  return (
    <section class="text-gray-600 body-font overflow-hidden mx-auto">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 w-full">
          <div class="w-full p-4">
            <div class="flex relative w-full">
              <div className="first">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={img}
                />
                <div className="absolute -bottom-16 left-1/4 text-center">
                  <h2 className="text-white font-bold text-2xl">{name}</h2>
                  <h4 className="text-white font-bold text-md">{title}</h4>
                </div>
              </div>

              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="text-sm title-font font-bold text-indigo-500 mb-1">
                  {name}
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  {title}
                </h1>
                <div class="">
                  <h2 className="py-8 font-semibold">Mobile: {mobile}</h2>
                  <div className=" flex">
                    <Link to={facebookLink} className="block text-2xl mr-5">
                      <FaFacebook></FaFacebook>
                    </Link>
                    <Link to={linkedin} className="block text-2xl">
                      <FaLinkedin></FaLinkedin>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;

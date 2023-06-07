import React from "react";

const BlogQuality = ({ ql }) => {
  const { title, img, details } = ql;
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className=" mx-auto">
          <h1 className="text-gray-400 font-bold text-3xl pb-5 text-center">
            {title}
          </h1>
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={img}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4 text-gray-200">
                {details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogQuality;

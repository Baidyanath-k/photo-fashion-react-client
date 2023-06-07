import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogQuality from "./BlogQuality";

const OneBlog = () => {
  const oneBlogData=useLoaderData();
  const {header, quality, para } = oneBlogData;
  return (
    <section className="text-gray-200 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap border-b-4 border-indigo-500">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-200">
                PHOTOGRAPHY
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-4xl font-medium text-gray-400 title-font mb-2">
                {header}
              </h2>
              <p className="leading-relaxed">{para}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-200 body-font overflow-hidden px-5">
        {
          quality.map(ql=><BlogQuality key={ql.title} ql={ql}></BlogQuality>)
        }
      </div>
    </section>
  );
};

export default OneBlog;

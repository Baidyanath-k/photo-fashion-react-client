import React from "react";
const Collection = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="w-full mb-20 text-center">
          <h1 class="sm:text-3xl text-2xl font-bold title-font text-white text-center lg:mb-0 mb-4">
            Albums
          </h1>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://i.ibb.co/G3gH9Vz/my2.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://i.ibb.co/dmCDSG6/my1.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="https://i.ibb.co/8XJY6qq/my3.jpg"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="https://i.ibb.co/tY9STCP/my4.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://i.ibb.co/m6FTRbB/my5.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://i.ibb.co/dmCDSG6/my1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;

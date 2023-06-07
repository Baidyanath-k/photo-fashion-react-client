import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import handShake from "../../../assets/handshake.jpg";

const Ratings = () => {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => {
        setCounterOn(true);
      }}
      onExit={() => {
        setCounterOn(false);
      }}
    >
      <section className="text-gray-100 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-2xl mb-2 text-gray-100">
                My team's achievements
              </h1>
              <div className="leading-relaxed">
                My team photographs the event beautifully and carefully. <br />I
                always appreciate my team.
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-100">
                {counterOn && (
                  <CountUp start={0} end={3} duration={2} delay={1}></CountUp>
                )}
                K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-100">
                {counterOn && (
                  <CountUp start={0} end={2} duration={2} delay={1}></CountUp>
                )}
                K
              </h2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-100">
                {counterOn && (
                  <CountUp start={0} end={40} duration={2} delay={1}></CountUp>
                )}
                K
              </h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-100">
                {counterOn && (
                  <CountUp start={0} end={150} duration={2} delay={1}></CountUp>
                )}
              </h2>
              <p className="leading-relaxed">Success</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src={handShake}
              alt="stats"
            />
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Ratings;

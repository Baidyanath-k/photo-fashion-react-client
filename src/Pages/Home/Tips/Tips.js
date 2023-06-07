import React, { useEffect, useState } from "react";
import Tip from "./Tip";

const Tips = () => {
  const [tipsDetails, setTipsDetails] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/tips`)
      .then((res) => res.json())
      .then((data) => setTipsDetails(data));
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
            Tips for taking high-quality photos and prints
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {tipsDetails.map((tipsDetail) => (
            <Tip key={tipsDetail._id} tipsDetail={tipsDetail}></Tip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;

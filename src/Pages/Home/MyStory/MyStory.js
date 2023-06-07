import React from 'react';

const MyStory = () => {
    return (
      <div className="hero bg-base-200 my-8">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2">
            <h2 className="text-center text-2xl font-bold border-b-4 border-slate-950 pb-3">
              My Hobby
            </h2>
            <h4 className="text-center text-xl">
              Some information about my photography
            </h4>
          </div>
          <div className="w-1/2">
            <p className="py-6">
              We love photography and travel for meeting new beautiful people
              all over the world. Propriae voluptaria dissentias nam ei, posse
              diceret inciderint cum ut, gubergren sadipscing ei vim. Ancillae
              torquatos in nec, impetus nostrum ea eos.
            </p>

            <p className="py-6">
              Veri ubique cu eam, vero dicta ridens ei quo, ex putent menandri
              accommodare sed. Suscipit lobortis prodesset ut eam. Sale dicta
              dolore pri et, an aliquam albucius volutpat est.
            </p>
          </div>
        </div>
      </div>
    );
};

export default MyStory;
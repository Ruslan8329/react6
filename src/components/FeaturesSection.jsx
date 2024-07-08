import React from "react";

const FeaturesSection = () => {
  return (
    <section className="bg-yellow-500 py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Euismod magna id purus eget nunc ligula suspendisse dui netus.
            Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis
            vulputate et vulputate suspendisse natoque id tellus consectetur
            pulvinar et.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Lorem Ipsum
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="public/drawkitImg.png"
            alt="Feature"
            className="w-64 h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

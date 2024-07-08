import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-yellow-100 py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Cursus Integer Consequat Tristique.
        </h1>
        <p className="text-lg text-gray-600 mb-6">RISUS PRAESENT VULPUTATE.</p>
        <div className="space-x-4">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-full">
            Lorem Ipsum
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

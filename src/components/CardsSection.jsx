import React from "react";

const CardsSection = () => {
  return (
    <section className="bg-gray-800 py-16 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-md text-gray-600 mb-6">
          Quisque porttitor vitae vel amet neque scelerisque mattis. Consectetur
          nibh velit magna consectetur leo.{" "}
        </p>
        <h2 className="text-3xl font-bold mb-8">
          Cursus Integer Consequat Aliquam Tristique.
        </h2>
        <button className="bg-white text-black px-4 py-2 rounded-full">
          Lorem Ipsum
        </button>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">1. Phasellus Vitae</h3>
            <p>Congue</p>
          </div>
          <div className="bg-yellow-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">2. Iaculis Magna</h3>
            <p>Pharetra</p>
          </div>
          <div className="bg-yellow-500 text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">3. Eleifend Pulvinar</h3>
            <p>Vitae</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">4. Velit Odio</h3>
            <p>Ante</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;

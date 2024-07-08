import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-md">
      <div className="flex items-center">
        <div className="text-xl font-bold text-yellow-500">PAINT</div>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#home" className="text-gray-600 hover:text-gray-900">
          Home
        </a>
        <a href="#product" className="text-gray-600 hover:text-gray-900">
          Product
        </a>
        <a href="#pricing" className="text-gray-600 hover:text-gray-900">
          Pricing
        </a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </a>
      </div>
      <div className="hidden md:flex">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
          JOIN US
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FaStar } from "react-icons/fa";
import "tailwindcss/tailwind.css";

const TestimonialCard = ({ name, description }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start bg-stone-900 rounded-lg shadow-md p-6 lg:p-8">
      <div className="w-full">
        <h3 className="text-2xl text-gray-50 font-bold mb-2">{name}</h3>
        <p className="text-gray-50/80 mb-4">{description}</p>
        <div className="flex items-center">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400" />
          </div>
          <span className="ml-2 text-lg font-bold bg-stone-700 p-1 rounded-md text-white">5.0</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

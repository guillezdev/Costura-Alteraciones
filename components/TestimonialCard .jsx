import React from "react";
import { FaStar } from "react-icons/fa";
import "tailwindcss/tailwind.css";

const TestimonialCard = ({name ,description}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start bg-stone-900 rounded-lg shadow-md p-6 lg:p-8">
      {/* <div className="w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-8">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Testimonial"
          className="w-full h-auto rounded-lg"
        />
      </div> */}
      <div className="w-full lg:w-2/3">
        <h3 className="text-2xl text-gray-50 font-bold mb-2">{name}</h3>
        <p className="text-stone-300 mb-4">{description}</p>
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

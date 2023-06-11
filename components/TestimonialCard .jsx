import React from 'react';
import { FaStar } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const TestimonialCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white rounded-lg shadow-md p-6 lg:p-8">
      <div className="w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-8">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Testimonial"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="w-full lg:w-2/3">
        <h3 className="text-2xl font-bold mb-2">Título del testimonio</h3>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
          mauris eget nisi laoreet pharetra. Nullam porta massa eu nisi
          scelerisque, nec suscipit mauris molestie. Sed sollicitudin, ipsum in
          ultricies hendrerit, quam turpis hendrerit ligula, in consequat velit
          neque id ex. Ut tristique commodo metus, ac gravida ex dictum sit
          amet. Integer elementum, tellus a auctor mattis, dolor ligula
          imperdiet turpis, vel fringilla dui eros vitae libero.
        </p>
        <div className="flex items-center">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400" />
          </div>
          <span className="ml-2 text-lg font-bold">5.0</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
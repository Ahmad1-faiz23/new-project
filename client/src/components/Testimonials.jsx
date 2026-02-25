import React from "react";
import { testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-24">

      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-gray-700 mb-16">
        Customer Testimonials
      </h1>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <p className="text-4xl text-gray-300 mb-4">"</p>

            <p className="text-gray-600 leading-relaxed">
              {item.text}
            </p>

            <div className="flex items-center gap-4 mt-8">
              <img
                src={item.image}
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <p className="font-semibold text-gray-800">
                  {item.author}
                </p>
                <p className="text-gray-500 text-sm">
                  {item.jobTitle}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Testimonials;
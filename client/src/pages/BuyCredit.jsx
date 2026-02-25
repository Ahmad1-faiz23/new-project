import React from "react";
import { assets, plans } from "../assets/assets";

const BuyCredit = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-center pt-20 px-4">

      {/* Top Pill */}
      <div className="flex justify-center mb-6">
        <span className="border border-gray-300 px-8 py-2 rounded-full text-gray-600 text-sm">
          Our Plans
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-semibold text-gray-700 mb-16">
        Choose the plan that's right for you
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            {/* Logo */}
            <img
              src={assets.logo_icon}
              alt=""
              className="w-10 mb-6 mx-auto"
            />

            {/* Plan Name */}
            <h3 className="text-lg font-semibold text-gray-700">
              {item.id}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-2">
              {item.desc}
            </p>

            {/* Price */}
            <p className="mt-6 text-2xl font-semibold text-gray-800">
              {item.price}
              <span className="text-sm font-normal text-gray-500">
                / {item.credits} credits
              </span>
            </p>

            {/* Purchase Button */}
            <button className="mt-8 w-full bg-zinc-800 text-white py-3 rounded-lg hover:bg-zinc-700 transition">
              Purchase
            </button>
          </div>
        ))}

      </div>

    </div>
  );
};

export default BuyCredit;
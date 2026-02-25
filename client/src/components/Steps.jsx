import React from "react";

const Steps = () => {
  return (
    <div className="bg-gray-100 py-24">
      
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-16">
        Steps to remove background <br /> image in seconds
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white mb-4 text-xl">
            ↑
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Upload image
          </h3>
          <p className="text-gray-500 text-sm">
            Upload your image in seconds. No sign-up required.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white mb-4 text-xl">
            ✕
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Remove background
          </h3>
          <p className="text-gray-500 text-sm">
            Our AI automatically removes the background instantly.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white mb-4 text-xl">
            ↓
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Download image
          </h3>
          <p className="text-gray-500 text-sm">
            Download your transparent PNG image in high quality.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Steps;
import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Result = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = assets.image_wo_bg;
    link.download = "background_removed.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleTryAgain = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-16 px-4">

      {/* Outer Blue Border Container */}
      <div className="w-full max-w-5xl border-2 border-blue-400 rounded-xl p-8 bg-white">

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Original */}
          <div>
            <p className="font-semibold text-gray-600 mb-3">
              Original
            </p>
            <div className="rounded-lg overflow-hidden border">
              <img
                src={assets.image_w_bg}
                alt="Original"
                className="w-full rounded-md"
              />
            </div>
          </div>

          {/* Background Removed */}
          <div>
            <p className="font-semibold text-gray-600 mb-3">
              Background Removed
            </p>

            <div className="rounded-lg overflow-hidden border border-gray-300 bg-layer">
              <img
                src={assets.image_wo_bg}
                alt="Removed"
                className="w-full rounded-md"
              />
            </div>
          </div>

        </div>

        {/* Buttons Section */}
        <div className="flex justify-end gap-4 mt-10">

          <button
            onClick={handleTryAgain}
            className="px-6 py-3 rounded-full border border-gray-400 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Try another image
          </button>

          <button
            onClick={handleDownload}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:opacity-90 transition"
          >
            Download image
          </button>

        </div>

      </div>
    </div>
  );
};

export default Result;
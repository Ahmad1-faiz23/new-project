import { useRef } from "react";
import { assets } from "../assets/assets";

const Header = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-16">
      
      {/* LEFT SIDE */}
      <div className="flex-1">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
          Remove the{" "}
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            background
          </span>{" "}
          from images for free.
        </h1>

        <button
          onClick={handleClick}
          className="mt-8 px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 transition"
        >
          Upload your image
        </button>

        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center">
        <img
          src={assets.header_img}
          alt="header"
          className="w-[400px] md:w-[500px]"
        />
      </div>
    </div>
  );
};

export default Header;
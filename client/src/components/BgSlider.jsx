import { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [position, setPosition] = useState(50);

  return (
    <div className="bg-gray-100 py-24 text-center">
      
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-16">
        Remove Background With High <br /> Quality and Accuracy
      </h2>

      <div className="relative w-[650px] max-w-full mx-auto rounded-xl overflow-hidden">
        
        {/* Before Image */}
        <img
          src={assets.image_w_bg}
          alt="before"
          className="w-full block select-none"
        />

        {/* After Image */}
        <img
          src={assets.image_wo_bg}
          alt="after"
          className="absolute top-0 left-0 w-full block select-none"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`
          }}
        />

        {/* Vertical Line */}
        <div
          className="absolute top-0 h-full w-[2px] bg-white"
          style={{
            left: `${position}%`,
            transform: "translateX(-50%)"
          }}
        />

        {/* Round Handle */}
        <div
          className="absolute top-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize"
          style={{
            left: `${position}%`,
            transform: "translate(-50%, -50%)"
          }}
        >
          ⇄
        </div>

        {/* Invisible Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>
    </div>
  );
};

export default BgSlider;
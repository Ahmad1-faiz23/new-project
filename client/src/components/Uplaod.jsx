import { useRef } from "react";

const Upload = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected File:", file);
  };

  return (
    <div className="bg-gray-100 py-28 text-center">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-12">
        See the magic. Try now
      </h2>

      {/* Button */}
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium text-sm md:text-base 
                   bg-gradient-to-r from-purple-500 to-pink-500 
                   hover:opacity-90 transition duration-300 shadow-md"
      >
        {/* Upload Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12V3m0 0l-3 3m3-3l3 3" />
        </svg>

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
  );
};

export default Upload;
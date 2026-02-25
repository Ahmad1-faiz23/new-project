import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Side */}
        <div className="flex items-center gap-4 text-gray-600 text-sm">
          <img src={assets.logo} alt="logo" className="w-28" />
          <span className="hidden md:block">|</span>
          <p>Copyright ©GreatStack.dev | All right reserved.</p>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex items-center gap-6">
          
          {/* Facebook */}
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition cursor-pointer">
            <i className="fab fa-facebook-f text-gray-700"></i>
          </div>

          {/* Twitter */}
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition cursor-pointer">
            <i className="fab fa-twitter text-gray-700"></i>
          </div>

          {/* Google+ */}
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition cursor-pointer">
            <i className="fab fa-google-plus-g text-gray-700"></i>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Footer;
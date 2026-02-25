import { assets } from "../assets/assets";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 lg:px-20">

        {/* Logo */}
        <img
          className="w-28 sm:w-36"
          src={assets.logo}
          alt="logo"
        />

        <div className="flex items-center gap-4">

          {/* 🔹 When User is NOT Logged In */}
          <SignedOut>
            <SignInButton mode="modal">
              <button
                className="flex items-center gap-2 
                           bg-zinc-800 text-white 
                           px-6 py-2.5
                           rounded-full 
                           hover:bg-zinc-700 
                           transition"
              >
                Get started
                <img
                  className="w-4"
                  src={assets.arrow_icon}
                  alt="arrow"
                />
              </button>
            </SignInButton>
          </SignedOut>

          {/* 🔹 When User IS Logged In */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
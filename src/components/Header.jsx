import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="bg-anand-500 text-white">
        <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo and Brand Name */}
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full"
              src="src/assets/image.png"
              alt="Logo"
            />
            <div className="text-xl text-black font-bold">AnandFoods</div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:underline text-black">Home</Link>
            <Link to="/about" className="hover:underline text-black">About Us</Link>
            <Link to="/contact" className="hover:underline text-black">Contact Us</Link>
            <Link to="/foods" className="hover:underline text-black">Foods</Link>

            <button className="px-4 py-2 border rounded-full text-black bg-transparent border-white/40">
              Get the App ↗
            </button>
            <Link
              to="/signin"
              className="px-4 py-2 rounded-full bg-black text-white text-sm font-semibold hover:bg-orange-600 transition-all"
            >
              Sign In
            </Link>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
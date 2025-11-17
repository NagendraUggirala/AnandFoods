import React from 'react';

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
            <a className="hover:underline text-black cursor-pointer">Home</a>
            <a className="hover:underline text-black cursor-pointer">About Us</a>
            <a className="hover:underline text-black cursor-pointer">Contact Us</a>
            <a className="hover:underline text-black cursor-pointer">Foods</a>
            <button className="px-4 py-2 border rounded-full text-black bg-transparent border-white/40">
              Get the App ↗
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-full">
              Sign in
            </button>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
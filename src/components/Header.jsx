import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="-anand-500 text-white">
        <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

          {/* Logo + Title + Slogan */}
          <div className="flex items-center gap-3">

            <img
              className="w-20 h-20 rounded-full"
              src="/img/founder1.jpg"
              alt=""
            />

            <img
              className="w-20 h-20 rounded-full"
              src="/img/image.png"
              alt="Logo"
            />

            {/* Text Section */}
            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-1 text-base md:text-lg font-bold text-orange-500">
                <span>ANAND</span>
                <span>FOODS</span>
              </div>

              <p className="text-sm text-black italic mt-1">
                "Dharmo Rakshati Rakshitah"
              </p>
            </div>

            {/* Toggle Button beside AnandFoods */}
            <button
              className="ml-4 md:hidden text-black text-3xl"
              onClick={() => setOpen(!open)}
            >
              {open ? "✖" : "☰"}
            </button>

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:underline text-black">Home</Link>
            <Link to="/about" className="hover:underline text-black">About Us</Link>
            <Link to="/contact" className="hover:underline text-black">Contact Us</Link>
            <Link to="/foods" className="hover:underline text-black">Foods</Link>
            <Link to="/cart" className="hover:underline text-black">Cart</Link>

            <Link
              to="/signin"
              className="px-4 py-2 rounded-full bg-black text-white text-sm font-semibold hover:bg-orange-600 transition-all"
            >
              Sign In
            </Link>
          </nav>

        </header>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white text-black px-6 py-4 space-y-4 border-t">
            <Link to="/" className="block">Home</Link>
            <Link to="/about" className="block">About Us</Link>
            <Link to="/contact" className="block">Contact Us</Link>
            <Link to="/foods" className="block">Foods</Link>
            <Link to="/cart" className="block">Cart</Link>

            <Link
              to="/signin"
              className="block px-4 py-2 rounded-full bg-black text-white text-sm font-semibold text-center"
            >
              Sign In
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default Header;

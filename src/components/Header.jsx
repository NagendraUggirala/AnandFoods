import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo + Title + Slogan */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <img
            src="/img/founder1.jpg"
            alt="Founder"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover object-top shadow-md"
          />

          <img
            src="/img/image.png"
            alt="Logo"
            className="w-10 h-10 object-contain sm:w-12 sm:h-12"
          />

          <div className="flex flex-col leading-tight">
            <h1 className="text-lg sm:text-xl font-bold text-orange-600">
              ANAND FOODS
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-600 italic">
              "Dharmo Rakshati Rakshitah"
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-orange-600 text-black">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-600 text-black">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-orange-600 text-black">
            Contact Us
          </Link>
          <Link to="/foods" className="hover:text-orange-600 text-black">
            Foods
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-1 text-black hover:text-orange-600 transition"
          >
            <FaShoppingCart className="text-lg" />
            <span>Cart</span>
          </Link>

          <Link
            to="/signin"
            className="px-4 py-2 rounded-full bg-black text-white text-sm font-semibold hover:bg-orange-600 transition-all"
          >
            Sign In
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white text-black px-6 py-4 space-y-4 border-t">
          <Link to="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block">
            About Us
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block">
            Contact Us
          </Link>
          <Link to="/foods" onClick={() => setOpen(false)} className="block">
            Foods
          </Link>
          <Link to="/cart" onClick={() => setOpen(false)} className="block">
            <span className="inline-flex items-center gap-2">
              <FaShoppingCart /> Cart
            </span>
          </Link>

          <Link
            to="/signin"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 rounded-full bg-black text-white text-sm font-semibold text-center"
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

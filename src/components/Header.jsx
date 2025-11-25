import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaShoppingCart, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Location & Search state
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  // Example areas for dropdown
  const areas = ["Madhapur", "Gachibowli", "Kukatpally", "Ameerpet"];
  const restaurants = [
    "Paradise Biryani",
    "Bawarchi RTC X Roads",
    "Shah Ghouse Hotel",
    "Cafe Bahar",
  ];

  const filteredRestaurants = restaurants.filter((r) =>
    r.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-orange-200 overflow-hidden shadow-sm">
            <img
              src="/img/founder1.jpg"
              alt="Founder"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex items-center space-x-2">
            <img
              src="/img/image.png"
              alt="Logo"
              className="w-8 h-10 md:w-10 md:h-12 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="text-lg md:text-xl font-bold text-blue-800">
                <span className="text-orange-500">ANAND </span>FOODS
              </h1>
              <p className="text-xs text-gray-600 italic mt-1">
                "Dharmo Rakshati Rakshitah"
              </p>
            </div>
          </div>
        </Link>

        {/* Location & Search Inputs */}
        <div className="hidden md:flex items-center gap-4 flex-1 ml-6">
          {/* Location Input */}
          <div className="relative flex-1 max-w-xs">
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-md">
              <FaMapMarkerAlt className="text-red-500" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onFocus={() => setShowLocationDropdown(true)}
                placeholder="Select location"
                className="outline-none w-full text-base"
              />
            </div>
            {showLocationDropdown && (
              <div className="absolute top-full mt-1 bg-white rounded-lg shadow-lg w-full max-h-40 overflow-y-auto z-50">
                {areas.map((area) => (
                  <div
                    key={area}
                    onClick={() => {
                      setLocation(area);
                      setShowLocationDropdown(false);
                    }}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                  >
                    {area}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Restaurant Search */}
          <div className="relative flex-1">
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-md">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search restaurant"
                className="outline-none w-full text-base"
              />
            </div>
            {searchQuery && (
              <div className="absolute top-full mt-1 bg-white rounded-lg shadow-lg w-full max-h-40 overflow-y-auto z-50">
                {filteredRestaurants.length > 0 ? (
                  filteredRestaurants.map((rest) => (
                    <div
                      key={rest}
                      onClick={() => setSearchQuery(rest)}
                      className="p-2 cursor-pointer hover:bg-gray-200"
                    >
                      {rest}
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-gray-500 text-center">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3 ml-4">
          <Link
            to="/"
            className="px-4 py-2.5 rounded-lg text-base font-semibold text-blue-800 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-4 py-2.5 rounded-lg text-base font-semibold text-blue-800 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2.5 rounded-lg text-base font-semibold text-blue-800 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
          >
            Contact Us
          </Link>
          <Link
            to="/foods"
            className="px-4 py-2.5 rounded-lg text-base font-semibold text-blue-800 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
          >
            Foods
          </Link>
          <Link
            to="/cart"
            className="px-4 py-2.5 rounded-lg text-base font-semibold text-blue-800 flex items-center gap-1 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
          >
            <FaShoppingCart /> Cart
          </Link>

          <Link
            to="/signin"
            className="px-5 py-2.5 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-all duration-200"
          >
            Sign In
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-3xl text-blue-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md px-6 py-4 space-y-4">
          <Link onClick={() => setOpen(false)} to="/" className="block text-lg">
            Home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/about"
            className="block text-lg"
          >
            About Us
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/contact"
            className="block text-lg"
          >
            Contact Us
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/foods"
            className="block text-lg"
          >
            Foods
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/cart"
            className="block text-lg flex items-center gap-2"
          >
            <FaShoppingCart /> Cart
          </Link>

          <Link
            to="/signin"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 rounded-lg bg-green-600 text-white text-center font-semibold"
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}

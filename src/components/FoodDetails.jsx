import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack, IoSearch } from "react-icons/io5";
import { MdOutlineDeliveryDining, MdStarRate } from "react-icons/md";
import { FiFilter, FiPlus, FiMinus } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { restaurantData } from "../utils/restaurantData";
import { useCart } from "../utils/cartUtils";

export default function FoodDetailsEnhanced() {
  const { foodName } = useParams();
  const navigate = useNavigate();
  const { getCart, addToCart, decreaseCart, getQty } = useCart();
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [filterVeg, setFilterVeg] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleAddToCart = (item) => {
    const newCart = addToCart(item, cart);
    setCart(newCart);
  };

  const handleDecreaseCart = (id) => {
    const newCart = decreaseCart(id, cart);
    setCart(newCart);
  };

  const foodData = restaurantData[foodName];

  if (!foodData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Food not found</p>
      </div>
    );
  }

  // Filter & Sort logic
  let filteredItems = foodData.related;
  
  if (filterVeg) {
    filteredItems = filteredItems.filter(item => item.veg);
  }

  if (searchQuery) {
    filteredItems = filteredItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (sortBy === "price-low") {
    filteredItems = [...filteredItems].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredItems = [...filteredItems].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredItems = [...filteredItems].sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  // Sort restaurants by rating
  const sortedRestaurants = [...foodData.restaurants].sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      
      {/* Back Button */}
      <div className="sticky top-0 bg-white  z-40 py-4 px-4 md:px-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2   hover:from-blue-700 hover:to-blue-800 transition   bg-gradient-to-r from-blue-600 to-blue-600 text-white font-bold py-2 rounded-lg w-20 "
        >
          <IoArrowBack size={20} />
          Back
        </button>
      </div>

      {/* Title & Search */}
      <div className="px-4 md:px-20 py-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">{foodName}</h1>
        <p className="text-gray-600 mb-6">Choose from top restaurants offering {foodName}</p>

        {/* Search Bar */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 outline-none"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700"
          >
            <FiFilter /> Filter
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="bg-white p-4 rounded-xl border-2 border-gray-200 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Sort By</p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="popular">Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
              <div className="flex items-end">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filterVeg}
                    onChange={(e) => setFilterVeg(e.target.checked)}
                    className="w-5 h-5"
                  />
                  <span className="font-semibold text-gray-800">Pure Veg Only</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-4 md:px-20 pb-20">
        {/* Restaurants Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">🏪 Available Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {sortedRestaurants.map((restaurant, idx) => ( 
              <button
                key={idx}
                onClick={() => setSelectedRestaurant(restaurant.name)}
                className={`p-4 rounded-2xl text-left transition transform duration-300 ${
                  selectedRestaurant === restaurant.name
                    ? "bg-gradient-to-r from-blue-400 to-sky-400 text-white shadow-xl scale-105"
                    : "bg-white border-2 border-gray-300 text-gray-900 hover:border-blue-500 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{restaurant.name}</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1">
                        <MdStarRate size={16} />
                        <span className="font-bold">{restaurant.rating}</span>
                        <span className={selectedRestaurant === restaurant.name ? "text-white/80" : "text-gray-600"}>
                          ({restaurant.reviews.toLocaleString()})
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                      <MdOutlineDeliveryDining size={16} />
                      <span>{restaurant.deliveryTime}</span>
                      <span>•</span>
                      <span>₹{restaurant.deliveryCost} delivery</span>
                    </div>
                    <p className="text-xs mt-1 opacity-80 mb-3">Min order: ₹{restaurant.minOrder}</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-600 text-white font-bold py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition">
                    View Menu →
                  </button>
              </button>
            ))}
          </div>
        </div>

        {/* Items Grid */}
        {selectedRestaurant && (
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              🍲 Menu - {selectedRestaurant}
            </h2>
            
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {filteredItems.map(item => {
                  const qty = getQty(item.id, cart);
                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform duration-300 hover:scale-105"
                    >
                      {/* Image with badges */}
                      <div className="relative overflow-hidden bg-gray-200 h-48 ">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-110 transition duration-300"
                        />
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                          <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                            ₹{item.price}
                          </div>
                          {item.bestseller && (
                            <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                              ⭐ Bestseller
                            </div>
                          )}
                          {item.offer && (
                            <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                              <BiSolidOffer size={12} /> {item.offer}
                            </div>
                          )}
                        </div>
                        {item.veg && (
                          <div className="absolute top-3 left-3 w-5 h-5 border-2 border-green-600 rounded-sm flex items-center justify-center">
                            <span className="text-green-600 font-bold text-xs">🥬</span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-blue-900 mb-1">{item.name}</h3>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-3">
                          <MdStarRate size={16} className="text-yellow-500" />
                          <MdStarRate size={16} className="text-yellow-500" />
                          <MdStarRate size={16} className="text-yellow-500" />
                          <span className="font-semibold text-gray-800">{item.rating}</span>
                        </div>

                        {/* Add to Cart */}
                        {qty > 0 ? (
                          <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg">
                            <button
                              onClick={() => handleDecreaseCart(item.id)}
                              className="bg-white border-2 border-blue-600 text-blue-600 font-bold w-10 h-10 rounded-lg hover:bg-blue-600 hover:text-white transition"
                            >
                              <FiMinus size={18} className="mx-auto" />
                            </button>
                            <span className="font-bold text-blue-600 text-lg">{qty}</span>
                            <button
                              onClick={() => handleAddToCart(item)}
                              className="bg-white border-2 border-blue-600 text-blue-600 font-bold w-10 h-10 rounded-lg hover:bg-blue-600 hover:text-white transition"
                            >
                              <FiPlus size={18} className="mx-auto" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleAddToCart(item)}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-md hover:shadow-lg"
                          >
                            + Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No items found matching your filters</p>
              </div>
            )}
          </div>
        )}

        {/* Empty State */}
        {!selectedRestaurant && (
          <div className="flex flex-col items-center justify-center py-20 text-blue-500">
            <p className="text-xl">👈 Select a restaurant to see available items</p>
          </div>
        )}
      </div>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-30">
          <button
            onClick={() => navigate("/cart")}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-full shadow-2xl hover:shadow-lg transition transform hover:scale-110"
          >
            🛒 View Cart ({cart.reduce((sum, item) => sum + item.qty, 0)})
          </button>
        </div>
      )}
    </div>
  );
}

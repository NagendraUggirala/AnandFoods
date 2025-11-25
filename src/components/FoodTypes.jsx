import React, { useRef, useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FiPlus, FiMinus } from "react-icons/fi";

// Restaurant & Related item data
const restaurantData = {
  Dosa: {
    restaurants: ["Venky's Tiffins", "Ram Ki Bandi", "Chutneys", "Minerva"],
    related: [
      { id: 61, name: "Masala Dosa", price: 120, img: "/foods/dosa.png" },
      { id: 62, name: "Onion Dosa", price: 130, img: "/foods/dosa.png" },
      { id: 63, name: "Paper Dosa", price: 160, img: "/foods/dosa.png" },
      { id: 64, name: "Rava Dosa", price: 140, img: "/foods/dosa.png" }
    ]
  },

  Idli: {
    restaurants: ["Sri Tiffins", "Idli Factory", "EatWell", "Udupi House"],
    related: [
      { id: 65, name: "Plain Idli", price: 60, img: "/foods/idli.png" },
      { id: 66, name: "Sambar Idli", price: 80, img: "/foods/idli.png" },
      { id: 67, name: "Ghee Idli", price: 90, img: "/foods/idli.png" },
      { id: 68, name: "Rava Idli", price: 85, img: "/foods/idli.png" }
    ]
  },
  Poori: {
    restaurants: ["Sri Tiffins", "Idli Factory", "EatWell", "Udupi House"],
    related: [
      { id: 69, name: "Plain Idli", price: 60, img: "/foods/idli.png" },
      { id: 70, name: "Sambar Idli", price: 80, img: "/foods/idli.png" },
      { id: 71, name: "Ghee Idli", price: 90, img: "/foods/idli.png" },
      { id: 72, name: "Rava Idli", price: 85, img: "/foods/idli.png" }
    ]
  },
  Pesarattu: {
    restaurants: ["Sri Tiffins", "Idli Factory", "EatWell", "Udupi House"],
    related: [
      { id: 73, name: "Plain Idli", price: 60, img: "/foods/idli.png" },
      { id: 74, name: "Sambar Idli", price: 80, img: "/foods/idli.png" },
      { id: 75, name: "Ghee Idli", price: 90, img: "/foods/idli.png" },
      { id: 76, name: "Rava Idli", price: 85, img: "/foods/idli.png" }
    ]
  },
  Vada: {
    restaurants: ["Sri Tiffins", "Idli Factory", "EatWell", "Udupi House"],
    related: [
      { id: 77, name: "Plain Idli", price: 60, img: "/foods/idli.png" },
      { id: 78, name: "Sambar Idli", price: 80, img: "/foods/idli.png" },
      { id: 79, name: "Ghee Idli", price: 90, img: "/foods/idli.png" },
      { id: 80, name: "Rava Idli", price: 85, img: "/foods/idli.png" }
    ]
  },
  Omelette: {
    restaurants: ["Sri Tiffins", "Idli Factory", "EatWell", "Udupi House"],
    related: [
      { id: 81, name: "Plain Idli", price: 60, img: "/foods/idli.png" },
      { id: 82, name: "Sambar Idli", price: 80, img: "/foods/idli.png" },
      { id: 83, name: "Ghee Idli", price: 90, img: "/foods/idli.png" },
      { id: 84, name: "Rava Idli", price: 85, img: "/foods/idli.png" }
    ]
  },

  Cake: {
    restaurants: ["CakeZone", "WarmOven", "Sweet Bake", "Bakers Hub"],
    related: [
      { id: 85, name: "Chocolate Cake", price: 250, img: "/foods/cake.avif" },
      { id: 86, name: "Red Velvet Cake", price: 290, img: "/foods/cake.avif" },
      { id: 87, name: "Black Forest", price: 230, img: "/foods/cake.avif" },
      { id: 88, name: "Pineapple Cake", price: 200, img: "/foods/cake.avif" }
    ]
  },

  Cake: {
    restaurants: ["CakeZone", "WarmOven", "Sweet Bake", "Bakers Hub"],
    related: [
      { id: 89, name: "Chocolate Cake", price: 250, img: "/foods/cake.avif" },
      { id: 90, name: "Red Velvet Cake", price: 290, img: "/foods/cake.avif" },
      { id: 91, name: "Black Forest", price: 230, img: "/foods/cake.avif" },
      { id: 92, name: "Pineapple Cake", price: 200, img: "/foods/cake.avif" }
    ]
  },

  Tea: {
    restaurants: ["CakeZone", "WarmOven", "Sweet Bake", "Bakers Hub"],
    related: [
      { id: 93, name: "Chocolate Cake", price: 250, img: "/foods/cake.avif" },
      { id: 94, name: "Red Velvet Cake", price: 290, img: "/foods/cake.avif" },
      { id: 95, name: "Black Forest", price: 230, img: "/foods/cake.avif" },
      { id: 96, name: "Pineapple Cake", price: 200, img: "/foods/cake.avif" }
    ]
  } 
};

export default function FoodOptions() {
  const scrollRef = useRef(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [cart, setCart] = useState([]);

  // Load cart from local storage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  // Update cart storage
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addToCart = (item) => {
    const exists = cart.find((i) => i.id === item.id);
    let newCart;

    if (exists) {
      newCart = cart.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
    } else {
      newCart = [...cart, { ...item, qty: 1 }];
    }
    updateCart(newCart);
  };

  const decreaseCart = (id) => {
    updateCart(
      cart
        .map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item)
        .filter(item => item.qty > 0)
    );
  };

  const getQty = (id) => {
    const item = cart.find((i) => i.id === id);
    return item ? item.qty : 0;
  };

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });

  const foodItems = [
    { name: "Dosa", img: "/foods/dosa.png" },
    { name: "Poori", img: "/foods/poori.png" },
    { name: "Idli", img: "/foods/idli.png" },
    { name: "Pesarattu", img: "/foods/pesarattu.png" },
    { name: "Vada", img: "/foods/vada.jpg" },
    { name: "Cake", img: "/foods/cake.jpg" },
    { name: "Omelette", img: "/foods/omelette.png" },
    { name: "Juice", img: "/foods/juice.jpg" },
    { name: "Tea", img: "/foods/tea.webp" },
    { name: "Pure Veg", img: "/foods/pureveg.png" },
    { name: "Parotta", img: "/foods/parotta.png" },
    { name: "Cutlet", img: "/foods/cutlet.png" }
  ];

  return (
    <div className="w-full py-10 px-4 md:px-20">
      
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Order our best food options
      </h2>

      <div className="relative">
        <button onClick={scrollLeft} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 
        bg-white shadow-lg p-3 rounded-full hover:scale-105 transition">
          <IoChevronBack size={22} />
        </button>

        <button onClick={scrollRight} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 
        bg-white shadow-lg p-3 rounded-full hover:scale-105 transition">
          <IoChevronForward size={22} />
        </button>

        {/* Scrollable items */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll no-scrollbar pb-4"
        >
          {foodItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedFood(item.name)}
              className="flex flex-col items-center cursor-pointer min-w-[110px] hover:scale-105 transition"
            >
              <img src={item.img} alt={item.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-md object-cover" />
              <p className="mt-2 font-semibold text-gray-800">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* -------- MODAL -------- */}
      {selectedFood && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] md:w-[520px] max-h-[90vh] overflow-y-auto shadow-xl">

            <h3 className="text-2xl font-bold mb-2">{selectedFood}</h3>

            <h4 className="text-lg font-semibold mb-3">Related Items</h4>

            <div className="grid grid-cols-2 gap-3">
              {restaurantData[selectedFood]?.related?.map(item => {
                const qty = getQty(item.id);
                const restaurant = restaurantData[selectedFood]?.restaurants[Math.floor(Math.random() * 4)];

                return (
                  <div key={item.id} className="p-3 border rounded-xl shadow-sm">
                    <img src={item.img} className="w-full h-20 object-cover rounded-lg" />

                    <p className="mt-2 font-medium text-sm">{item.name}</p>
                    <p className="text-[12px] text-gray-500">🏪 {restaurant}</p>
                    <p className="font-bold text-blue-600 text-sm mb-2">₹{item.price}</p>

                    {qty > 0 ? (
                      <div className="flex items-center justify-center gap-3 bg-gray-100 py-1 rounded-lg">
                        <button onClick={() => decreaseCart(item.id)}><FiMinus size={14}/></button>
                        <span className="font-semibold text-sm">{qty}</span>
                        <button onClick={() => addToCart(item)}><FiPlus size={14}/></button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => addToCart(item)}
                        className="w-full bg-blue-600 text-white text-sm py-1 rounded-lg">
                        Add to Cart +
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setSelectedFood(null)}
              className="mt-6 w-full bg-gray-200 py-2 rounded-xl font-semibold hover:bg-gray-300 transition"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

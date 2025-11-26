import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

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
  const navigate = useNavigate();

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });

  const handleFoodClick = (foodName) => {
    navigate(`/food/${foodName}`);
  };

  const foodItems = [
     { name: "Pure Veg", img: "/foods/pureveg.png" },
     { name: "Biryani", img: "/foods/biryani.jpg" },
    { name: "Dosa", img: "/foods/dosa.png" },
    { name: "Poori", img: "/foods/poori.png" },
    { name: "Idli", img: "/foods/idli.png" },
    { name: "Pesarattu", img: "/foods/pesarattu.png" },
    
    { name: "Cake", img: "/foods/cake.jpg" },
    { name: "Omelette", img: "/foods/omelette.png" },
    { name: "Juice", img: "/foods/juice.jpg" },
    { name: "Tea", img: "/foods/tea.webp" },
   
    { name: "Parotta", img: "/foods/parotta.png" },
    
  ];

  return (
    <div className="w-full py-10 px-4 md:px-20">
      
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-8">
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
              onClick={() => handleFoodClick(item.name)}
              className="flex flex-col items-center cursor-pointer min-w-[110px] hover:scale-105 transition"
            >
              <img src={item.img} alt={item.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-md object-cover" />
              <p className="mt-2 font-semibold text-gray-800">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

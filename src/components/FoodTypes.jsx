import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Restaurant & Related item data


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
                className="w-25 h-25 sm:w-24 sm:h-24 rounded-full shadow-md object-cover" />
              <p className="mt-2 font-semibold text-gray-800">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

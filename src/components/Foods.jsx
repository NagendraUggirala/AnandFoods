import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import TopDishes from "./TopDishes";
import AutoMovingCards from "./AutoMovingCards";

export default function FoodOptions() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

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
    <div>
    <div className="w-full py-10 px-4 md:px-20">
      
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Order our best food options
      </h2>

      {/* Wrapper */}
      <div className="relative">

        {/* Scroll Buttons (hidden on mobile) */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 
          bg-white shadow-lg p-3 rounded-full z-10 hover:scale-105 transition"
        >
          <IoChevronBack size={22} />
        </button>

        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 
          bg-white shadow-lg p-3 rounded-full z-10 hover:scale-105 transition"
        >
          <IoChevronForward size={22} />
        </button>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-scroll no-scrollbar scroll-smooth pb-4"
        >
          {foodItems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center min-w-[110px] sm:min-w-[140px] md:min-w-[150px]"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
                object-contain drop-shadow-xl"
              />
              <p className="mt-3 text-sm sm:text-lg font-medium text-gray-800">
                {item.name}
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>
    <AutoMovingCards />
<TopDishes/>
    </div>
  );
}

import React from "react";
import sample from "../assets/hero-food.png";

export default function Hero(){
  return (
    <section className=" w-full   relative ">
      
    <div className="absolute inset-0 w-full h-full object-cover">
        <img     className="w-full h-full object-cover" src="https://static.vecteezy.com/system/resources/previews/050/902/688/large_2x/assorted-traditional-indian-meals-with-fresh-vegetables-and-spices-on-leaf-background-food-design-for-menu-and-poster-photo.jpg" alt="hero" />
        <div className="absolute inset-0 bg-black/40"/>
        </div>
        <div className="relative container-pad h-[520px] flex items-center justify-center text-center">
            <div><h1 className="mt-4 text-white text-4xl md:text-6xl font-bold leading-tight">Order food & Discover best restaurants.</h1>
            <p className="mt-4 text-blue-100 max-w-3xl mx-auto">AnandFoods it!</p>
            <div className="mt-8 flex items-center justify-center gap-3">
           </div>

            <div className="mt-10 flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Location Input */}
            <div className="bg-white flex items-center px-4 py-3 rounded-full w-[320px] md:w-[350px] shadow-md">
              <span className="text-orange-500 text-xl">📍</span>
              <input
                type="text"
                placeholder="Enter your delivery location"
                className="ml-3 w-full outline-none text-gray-600"
              />
            </div>

            {/* Search Input */}
            <div className="bg-white flex items-center px-4 py-3 rounded-full w-[320px] md:w-[350px] shadow-md">
              <input
                type="text"
                placeholder="Search for restaurant, item..."
                className="w-full outline-none text-gray-600"
              />
              <span className="text-gray-500 text-xl ml-2">🔍</span>
            </div>
          </div>
           </div>
           </div>
            
     
    </section>
  );
}

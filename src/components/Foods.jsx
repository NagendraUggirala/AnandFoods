import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import TopDishes from "./TopDishes";
import AutoMovingCards from "./AutoMovingCards";

export default function FoodOptions() {
  const scrollRef = useRef(null);

  

 

  return (
    <div>
    <div className="w-full py-10 px-4 md:px-20">
      
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-bold text-blue-800 mb-8">
        Order our best food options
      </h2>

    

    </div>
    <AutoMovingCards />
<TopDishes/>
    </div>
  );
}

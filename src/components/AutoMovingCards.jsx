import React, { useEffect, useRef } from "react";
import cardData from "../data/cardData"; 

const AutoMovingCards = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;

    const scrollSpeed = 1.5;

    const autoScroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;

      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);


  const loopCards = [...cardData, ...cardData];

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 py-4 overflow-x-scroll no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {loopCards.map((card, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer hover:scale-105 duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoMovingCards;

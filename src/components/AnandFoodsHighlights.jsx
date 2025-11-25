import React, { useState, useEffect } from "react";
import highlights from "../data/highlights.json";
 
const AnandFoodsHighlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
 
  const goTo = (index) => {
    if (index < 0) index = highlights.length - 1;
    if (index >= highlights.length) index = 0;
    setActiveIndex(index);
  };
 
  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);
 
 
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex + 1 >= highlights.length ? 0 : prevIndex + 1
      );
    }, 3000);
 
    return () => clearInterval(timer);
  }, []);
 
  const current = highlights[activeIndex];
 
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-blue-100 py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
       
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <button
            onClick={prev}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white shadow-md flex items-center justify-center text-xl hover:bg-blue-100 transition"
            aria-label="Previous highlight"
          >
            ←
          </button>
          <p className="text-sm md:text-base font-semibold text-blue-500 tracking-wide uppercase">
            AnandFoods Updates
          </p>
          <button
            onClick={next}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white shadow-md flex items-center justify-center text-xl hover:bg-orange-100 transition"
            aria-label="Next highlight"
          >
            →
          </button>
        </div>
 
       
        <div className="relative">
          <div className="absolute -inset-1 rounded-[2rem] bg-blue-200/40 blur-2xl opacity-60 pointer-events-none" />
 
          <div className="relative rounded-[2rem] bg-[#fff7ef] md:bg-white overflow-hidden shadow-xl border border-sky-100">
            <div className="grid md:grid-cols-2">
             
              <div className="p-6 md:p-10 flex flex-col gap-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  {current.tag}
                </span>
 
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                  {current.title}
                </h2>
 
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {current.description}
                </p>
 
                <button className="mt-2 inline-flex w-fit px-5 py-2.5 rounded-full bg-blue-500 text-white font-semibold text-sm shadow-md hover:bg-blue-600 hover:shadow-lg transition-all">
                  {current.cta}
                </button>
              </div>
 
             
              <div className="relative bg-blue-50 flex items-center justify-center p-6 md:p-10">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 via-blue-200 to-blue-100 opacity-60 blur-3xl" />
                <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden shadow-lg border border-sky-100">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
 
     
        <div className="flex justify-center items-center mt-6 gap-2">
          {highlights.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goTo(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === activeIndex
                  ? "w-6 bg-blue-500"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default AnandFoodsHighlights;
 
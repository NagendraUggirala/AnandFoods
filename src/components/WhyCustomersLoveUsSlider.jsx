import React, { useState } from "react";

const WhyCustomersLoveUsSlider = () => {
  const slides = [
    {
      icon: "🕒",
      title: "Lightning-fast deliveries",
      subtitle: "Because hunger can’t wait.",
      text: "Our smart delivery network, intelligent routing, and real-time batching help your order reach quickly, even during rush hours. Customers love that AnandFoods respects their time as much as their appetite.",
      accent: "Hot food, minimal waiting."
    },
    {
      icon: "🍽️",
      title: "Wide restaurant network",
      subtitle: "Something for every mood.",
      text: "From iconic local favourites to trending cloud kitchens and home-chef specials, our partner network ensures there’s always a new flavour to explore.",
      accent: "One app, endless options."
    },
    {
      icon: "🛡️",
      title: "Safe, contactless service",
      subtitle: "Peace of mind with every order.",
      text: "We prioritise hygiene and safety with sealed packaging and contactless delivery options.",
      accent: "Care from kitchen to doorstep."
    },
    {
      icon: "💬",
      title: "Realtime order tracking",
      subtitle: "No more guessing, only live updates.",
      text: "Track every step of your order in real time. No more anxiety — just clarity.",
      accent: "Clarity on every journey."
    },
    {
      icon: "📢",
      title: "24/7 customer support",
      subtitle: "Help, anytime you need it.",
      text: "Quick resolutions and friendly support turn one-time customers into loyal regulars.",
      accent: "Support that actually shows up."
    }
  ];

  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % slides.length);
  const prev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="bg-blue-100 text-slate-700 py-16 px-4 md:py-10 md:px-10">

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-10 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-blue-800">
          Why Customers Love Us
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-500">
          A fast, safe and dependable food experience built around what matters most to you.
        </p>
      </div>

      {/* Controls */}
      <div className="max-w-4xl mx-auto flex items-center justify-between mb-6 md:mb-8">
        <button
          onClick={prev}
          className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border border-blue-200 hover:bg-blue-100 flex items-center justify-center text-lg md:text-xl shadow-md transition"
        >
          ←
        </button>

        <span className="text-3xl md:text-5xl font-black tracking-tight text-blue-300">
          {String(active + 1).padStart(2, "0")}
        </span>

        <button
          onClick={next}
          className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border border-blue-200 hover:bg-blue-100 flex items-center justify-center text-lg md:text-xl shadow-md transition"
        >
          →
        </button>
      </div>

      {/* Slider */}
      <div className="max-w-5xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.title} className="min-w-full px-1 md:px-2 flex justify-center">

              <div className="relative w-full rounded-[32px] bg-white border border-blue-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)] px-6 py-7 md:px-10 md:py-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">

                {/* Left Content */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-3xl bg-blue-100 flex items-center justify-center text-2xl md:text-3xl shadow">
                      {slide.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-semibold text-blue-900">
                        {slide.title}
                      </h3>
                      <p className="text-xs md:text-sm text-blue-500">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3">
                    {slide.text}
                  </p>
                  <p className="text-xs md:text-sm text-slate-500">
                    <span className="inline-block mr-1 align-middle">✦</span>
                    {slide.accent}
                  </p>
                </div>

              

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === active
                ? "w-4 bg-blue-600"
                : "bg-blue-300 hover:bg-blue-400"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default WhyCustomersLoveUsSlider;

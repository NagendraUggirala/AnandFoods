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
      text: "From iconic local favourites to trending cloud kitchens and home-chef specials, our partner network ensures there’s always a new flavour to explore. Customers enjoy the freedom to switch between comfort food and experiments with just a swipe.",
      accent: "One app, endless options."
    },
    {
      icon: "🛡️",
      title: "Safe, contactless service",
      subtitle: "Peace of mind with every order.",
      text: "We prioritise hygiene and safety with sealed packaging, trained delivery partners, and contactless delivery options. Families and workplaces trust AnandFoods to keep both taste and safety on the menu.",
      accent: "Care from kitchen to doorstep."
    },
    {
      icon: "💬",
      title: "Realtime order tracking",
      subtitle: "No more guessing, only live updates.",
      text: "From confirmation to pickup and drop, customers can track every step of their order in real time. Knowing exactly where the food is removes anxiety and makes planning around deliveries effortless.",
      accent: "Clarity on every journey."
    },
    {
      icon: "📢",
      title: "24/7 customer support",
      subtitle: "Help, anytime you need it.",
      text: "Whether it’s a delayed order, a missing item, or a payment query, our support team is always reachable. Quick resolutions and friendly assistance turn one-time users into long-term regulars.",
      accent: "Support that actually shows up."
    }
  ];

  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % slides.length);
  const prev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="bg-slate-950 text-slate-50 py-16 px-4 md:py-24 md:px-10">
      
      <div className="max-w-5xl mx-auto text-center mb-10 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
          Why Customers Love Us
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-400">
          A fast, safe and dependable food experience built around what matters most to you.
        </p>
      </div>

     
      <div className="max-w-4xl mx-auto flex items-center justify-between mb-6 md:mb-8">
        <button
          onClick={prev}
          className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-lg md:text-xl shadow-lg transition"
          aria-label="Previous reason"
        >
          ←
        </button>

        <span className="text-3xl md:text-5xl font-black tracking-tight text-slate-600">
          {String(active + 1).padStart(2, "0")}
        </span>

        <button
          onClick={next}
          className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-lg md:text-xl shadow-lg transition"
          aria-label="Next reason"
        >
          →
        </button>
      </div>

      
      <div className="max-w-5xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className="min-w-full px-1 md:px-2 flex justify-center"
            >
              
              <div className="relative w-full rounded-[32px] bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 shadow-[0_24px_80px_rgba(0,0,0,0.7)] px-6 py-7 md:px-10 md:py-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
               
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-orange-400/20 via-fuchsia-500/10 to-sky-400/20 opacity-0 group-hover:opacity-100 pointer-events-none" />

               
                <div className="flex-1">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-3xl bg-slate-900 flex items-center justify-center text-2xl md:text-3xl shadow-lg">
                      {slide.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg md:text-2xl font-semibold">
                        {slide.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-400">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-slate-200 leading-relaxed mb-3">
                    {slide.text}
                  </p>
                  <p className="text-xs md:text-sm text-slate-400">
                    <span className="inline-block mr-1 align-middle">✦</span>
                    {slide.accent}
                  </p>
                </div>

                
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-40 h-32 md:w-48 md:h-40">
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-orange-500 via-amber-400 to-pink-500 opacity-60 blur-2xl" />
                    <div className="relative w-full h-full rounded-3xl bg-slate-900 flex flex-col items-center justify-center gap-2 shadow-xl">
                      <div className="flex gap-2">
                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-orange-400" />
                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-violet-400" />
                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-emerald-400" />
                      </div>
                      <div className="w-16 h-3 md:w-20 md:h-3 rounded-full bg-slate-700 mt-2" />
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-400 mt-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
      <div className="mt-8 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === active
                ? "w-4 bg-slate-200"
                : "bg-slate-500/50 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyCustomersLoveUsSlider;

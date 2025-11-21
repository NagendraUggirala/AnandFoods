import React, { useEffect, useState } from "react";

const SLIDE_CHANGE_INTERVAL = 3000; 

const FoodHomeBanner = () => {
  
  const slides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
      title: "Freshly Cooked Every Day",
      subtitle: "Taste the love in every bite.",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1059923/pexels-photo-1059923.jpeg",
      title: "Today’s Special from AnandFoods",
      subtitle: "Handpicked dishes just for you.",
    },
    {
      id: 3,
      image:
        "https://www.indianveggiedelight.com/wp-content/uploads/2023/01/white-sauce-pasta.jpg",
      title: "Hot, Fast & Delicious",
      subtitle: "Order now and enjoy at home.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_CHANGE_INTERVAL);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] overflow-hidden rounded-3xl shadow-lg">
     
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
           
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

     
      <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-8 md:px-12 py-4 sm:py-6">
       
        <div className="max-w-xl text-white">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-2">
            AnandFoods
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-2">
            {slides[activeIndex].title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90">
            {slides[activeIndex].subtitle}
          </p>
        </div>

        
        <div className="mt-4 sm:mt-0">
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/40">
           
            <div className="min-w-[180px] sm:min-w-[200px] bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md">
              <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-1">
                Today’s Special
              </p>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                Veg Thali Combo
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Complete meal with curry, roti, rice & dessert.
              </p>
            </div>
            

           
            <div className="min-w-[180px] sm:min-w-[200px] bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md">
              <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
                Today’s Discount
              </p>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                Flat 20% Off
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                On online orders above ₹499. Use code: ANAND20
              </p>
            </div>

            
            <div className="min-w-[180px] sm:min-w-[200px] bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md">
              <p className="text-xs font-semibold text-yellow-500 uppercase tracking-wide mb-1">
                Top Rated
              </p>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                Paneer Butter Masala
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                ⭐ 4.8 / 5 from 1,200+ happy customers.
              </p>
            </div>
          </div>
        </div>

       
        <div className="absolute bottom-3 right-4 flex gap-1.5">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full border border-white/70 transition-all
                ${
                  index === activeIndex
                    ? "bg-white scale-125"
                    : "bg-transparent"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodHomeBanner;

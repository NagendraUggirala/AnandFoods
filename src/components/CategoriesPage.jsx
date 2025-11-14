
import React, { useRef } from "react";



const ITEMS = [
  { name: "Biryani", src: "https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg" },
  { name: "Shawarma", src:"https://2.bp.blogspot.com/-h0EPdx3kKqE/WdNINbgUTUI/AAAAAAAAADE/mFi0KoPhL_g7U12Y_zubHOnHgVQ55JSsACLcBGAs/s1600/Shawarma.jpg"  },
 { name: "Pizza", src: "https://images6.alphacoders.com/698/698287.jpg"},
  { name: "Chinese", src: "https://tse1.mm.bing.net/th/id/OIP.d2DDduxjcvmgRtgJQG3XYwHaE8?cb=ucfimgc2&w=1000&h=667&rs=1&pid=ImgDetMain&o=7&rm=3"},
   { name: "South Indian", src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/733607152550137.632051b21241d.jpg" },
  { name: "Burger", src: "https://www.jessicagavin.com/wp-content/uploads/2020/05/grilled-burgers-34-1200.jpg" },
  { name: "Dosa", src: "https://tse1.mm.bing.net/th/id/OIP.TjEA1ha3NJtSjCbwBBbDswHaHm?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Noodles", src:"https://bakerbynature.com/wp-content/uploads/2014/09/IMG_20381-682x1024-2.jpg"},
//   { name: "Rolls", src: rolls },
//   { name: "Pasta", src: pasta },
//   { name: "Ice Cream", src: icecream },
//   { name: "North Indian", src: north_indian },
//   { name: "Poori", src: poori },
//   { name: "Pure Veg", src: pure_veg },
];

function Icon({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-28 h-28 md:w-32 md:h-32 rounded-full shadow-lg object-cover bg-white"
      draggable={false}
    />
  );
}

export default function CategoriesPage({ onSelect = () => {} }) {
  const scrollerRef = useRef(null);

  const scrollBy = (offset) => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Order our best food options</h2>
          <div className="hidden md:flex gap-3">
            <button onClick={() => scrollBy(-380)} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">←</button>
            <button onClick={() => scrollBy(380)} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">→</button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-8 overflow-x-auto no-scrollbar py-4 md:grid md:grid-cols-7 lg:grid-cols-8 md:gap-y-8 md:gap-x-6 md:overflow-visible"
          tabIndex={0}
        >
          {ITEMS.map((it) => (
            <div key={it.name} className="flex-shrink-0 w-48 md:w-auto text-center">
              <div className="flex justify-center mb-3">
                <button
                  onClick={() => onSelect(it.name)}
                  onKeyDown={(e) => { if (e.key === "Enter") onSelect(it.name); }}
                  aria-label={`Select ${it.name}`}
                  className="rounded-full focus:outline-none"
                >
                  <Icon src={it.src} alt={it.name} />
                </button>
              </div>
              <div className="text-gray-700 text-base md:text-sm">{it.name}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end gap-4 mt-6 md:hidden">
          <button onClick={() => scrollBy(-220)} className="w-10 h-10 rounded-full bg-black-900">←</button>
          <button onClick={() => scrollBy(220)} className="w-10 h-10 rounded-full bg-gray-100">→</button>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

import React, { useState, useEffect } from "react";

export default function Hero() {

  // ⭐ ADDED — Local cart state synced with localStorage
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);
  // ⭐ END


  // ⭐ ADDED — Save updates to localStorage
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };


  // ⭐ ADDED — Add item or increase qty
  const increaseQty = (item) => {
    let newCart = [...cart];
    const exists = newCart.find((x) => x.id === item.id);

    if (exists) {
      newCart = newCart.map((x) =>
        x.id === item.id ? { ...x, qty: x.qty + 1 } : x
      );
    } else {
      newCart.push({ ...item, qty: 1 });
    }

    updateCart(newCart);
  };


  // ⭐ ADDED — Decrease qty
  const decreaseQty = (item) => {
    let newCart = [...cart];

    const exists = newCart.find((x) => x.id === item.id);
    if (!exists) return;

    if (exists.qty === 1) {
      newCart = newCart.filter((x) => x.id !== item.id);
    } else {
      newCart = newCart.map((x) =>
        x.id === item.id ? { ...x, qty: x.qty - 1 } : x
      );
    }

    updateCart(newCart);
  };


  // ⭐ ADDED — Utility to get item quantity
  const getQty = (id) => {
    const item = cart.find((x) => x.id === id);
    return item ? item.qty : 0;
  };


  const items = [
    { id: 1, name: "Mush Room curry", price: 120, img: "/img/mushroom.jpg" },
    { id: 2, name: "Panner Rotti", price: 60, img: "/img/panner.JPG" },
    { id: 3, name: "Veg Curries", price: 90, img: "/img/curry.jpeg" },
    { id: 4, name: "Chicken Biryani", price: 180, img: "/img/briyani.avif" },
    { id: 5, name: "Mutton Biryani", price: 250, img: "/img/mutton.webp" },
    { id: 6, name: "Fish Biryani", price: 150, img: "/img/fish.avif" },
    { id: 7, name: "Samosa", price: 10, img: "/img/somasa.webp" },
    { id: 8, name: "Jalebi", price: 25, img: "/img/jalebi.webp" },
    { id: 9, name: "Mirchi Bajji", price: 15, img: "/img/mirchi.jpg" },
    { id: 10, name: "Gulab Jamun", price: 20, img: "/img/gulab1.webp" },
    { id: 11, name: "Ice Cream", price: 40, img: "/img/ice.jpg" },
    { id: 12, name: "Laddu", price: 15, img: "/img/laddu.webp" },
    { id: 13, name: "Virgin Mojito", price: 80, img: "/img/mojo.webp" },
    { id: 14, name: "Blue Lagoon", price: 90, img: "/img/blue.webp" },
    { id: 15, name: "Strawberry Mocktail", price: 100, img: "/img/strawberry.webp" },
    { id: 17, name: "Orange Juice", price: 70, img: "/img/orange.jfif" },
    { id: 18, name: "Mango Juice", price: 60, img: "/img/mango.jpg" },
    { id: 20, name: "Pineapple Juice", price: 55, img: "/img/pineapple.avif" },
    { id: 21, name: "Apple Juice", price: 55, img: "/img/apple.jpg" },
    { id: 22, name: "Dry Fruit Juice", price: 55, img: "/img/Dryfruit.jpg" },
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-white">

        {/* HERO SECTION — unchanged */}

         {/* HERO SECTION */}
        <section className="w-full relative">
          <div className="absolute inset-0 w-full h-full object-cover">
            <img
              className="w-full h-full object-cover"
              src="/img/headerImg.jpg"
              alt="hero"
            
          />
          <div className="absolute inset-0 /40" />
          </div>

          <div className="relative container-pad h-[520px] flex items-center justify-center text-center">
            <div>
              <h1 className="mt-4 text-white text-4xl md:text-6xl font-bold leading-tight">
                Order food & Discover best restaurants.
              </h1>
              <p className="mt-4 text-blue-100 max-w-3xl mx-auto">AnandFoods</p>

              {/* Search bars */}
              <div className="mt-10 flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
                <div className="bg-white flex items-center px-4 py-3 rounded-full w-[320px] md:w-[350px] shadow-md">
                  <span className="text-orange-500 text-xl">📍</span>
                  <input
                    type="text"
                    placeholder="Enter your delivery location"
                    className="ml-3 w-full outline-none text-gray-600"
                  />
                </div>

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

        {/* MENU GRID */}
        <section className="px-6 md:px-12 lg:px-20 py-14">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
            Menu Items
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {items.map((item) => {
              const qty = getQty(item.id); // ⭐ ADDED

              return (
                <div
                  key={item.id}
                  className="bg-white shadow-md border rounded-2xl p-4 hover:shadow-xl transition"
                >
                  <img
                    src={item.img}
                    className="rounded-xl mb-3 w-full h-48 object-cover"
                    alt={item.name}
                  />
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600 mt-1">₹{item.price}</p>

                  {/* ⭐ UPDATED — Dynamic Add-to-cart button */}
                  {qty === 0 ? (
                    <button
                      onClick={() => increaseQty(item)}
                      className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="mt-4 flex items-center justify-between bg-green-100 rounded-lg p-2">
                      <button
                        onClick={() => decreaseQty(item)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg text-lg"
                      >
                        -
                      </button>

                      <span className="font-bold text-lg">{qty}</span>

                      <button
                        onClick={() => increaseQty(item)}
                        className="bg-green-600 text-white px-3 py-1 rounded-lg text-lg"
                      >
                        +
                      </button>
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </section>
      </div>
    </>
  );
}

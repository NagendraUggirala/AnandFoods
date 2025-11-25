import React, { useState, useEffect } from "react";
import AnandFoodsHighlights from "./AnandFoodsHighlights";
import FoodHomeBanner from "./FoodHomeBanner";

export default function Hero() {


  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);




  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };



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



  const getQty = (id) => {
    const item = cart.find((x) => x.id === id);
    return item ? item.qty : 0;
  };


  const items = [
    { id: 1, name: "Pepsi", price: 80, img: "/img/pepsi.jpg" },
    { id: 2, name: "Coca cola", price: 90, img: "/img/coca.jpg" },
    { id: 3, name: "French", price: 90, img: "/img/french.jfif" },
    { id: 4, name: "Margherita Pizza", price: 160, img: "/img/pizza1.jpg" },
    { id: 5, name: "Sweet Corn Pizza", price: 120, img: "/img/sweet.jpg" },
    { id: 6, name: "Bruger", price: 60, img: "/img/burger.webp" },
    { id: 7, name: "Dilkush ", price: 490, img: "/img/dilkush.jfif" },
    { id: 8, name: "Mixed Biryani", price: 580, img: "/img/mixed.jpg" },
    { id: 9, name: "Mush Room curry", price: 120, img: "/img/mushroom.jpg" },
    { id: 10, name: "Panner Rotti", price: 60, img: "/img/panner.JPG" },
    { id: 11, name: "Veg Curries", price: 90, img: "/img/curry.jpeg" },
    { id: 12, name: "Chicken Biryani", price: 180, img: "/img/briyani.avif" },
    { id: 13, name: "Mutton Biryani", price: 250, img: "/img/mutton.webp" },
    { id: 14, name: "Fish Biryani", price: 150, img: "/img/fish.avif" },
    { id: 15, name: "Samosa", price: 10, img: "/img/somasa.webp" },
    { id: 16, name: "Jalebi", price: 25, img: "/img/jalebi.webp" },
    { id: 17, name: "Mirchi Bajji", price: 15, img: "/img/mirchi.jpg" },
    { id: 18, name: "Gulab Jamun", price: 20, img: "/img/gulab1.webp" },
    { id: 19, name: "Ice Cream", price: 40, img: "/img/ice.jpg" },
    { id: 20, name: "Laddu", price: 15, img: "/img/laddu.webp" },
    { id: 21, name: "Virgin Mojito", price: 80, img: "/img/mojo.webp" },
    { id: 22, name: "Blue Lagoon", price: 90, img: "/img/blue.webp" },
    { id: 23, name: "Strawberry Mocktail", price: 100, img: "/img/strawberry.webp" },
    { id: 24, name: "Orange Juice", price: 70, img: "/img/orange.jfif" },
    { id: 25, name: "Mango Juice", price: 60, img: "/img/mango.jpg" },
    { id: 26, name: "Pineapple Juice", price: 55, img: "/img/pineapple.avif" },
    { id: 27, name: "Apple Juice", price: 55, img: "/img/apple.jpg" },
    { id: 28, name: "Dry Fruit Juice", price: 55, img: "/img/Dryfruit.jpg" },
  ];

  return (
    <>

      <div className="w-full min-h-screen bg-white">



        {/* HERO SECTION */}

        <FoodHomeBanner />
        <AnandFoodsHighlights />
        {/* MENU GRID */}
        <section className="px-6 md:px-12 lg:px-20 py-14">
          <h2 className="text-3xl font-bold text-black-700 text-center mb-10">
            Menu Items
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {items.map((item) => {
              const qty = getQty(item.id);

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


                  {qty === 0 ? (
                    <button
                      onClick={() => increaseQty(item)}
                      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="mt-4 flex items-center justify-between bg-green-100 rounded-lg p-2">
                      <button
                        onClick={() => decreaseQty(item)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg text-lg"
                      >
                        -
                      </button>

                      <span className="font-bold text-lg">{qty}</span>

                      <button
                        onClick={() => increaseQty(item)}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg text-lg"
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

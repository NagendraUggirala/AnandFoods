import React, { useState, useEffect } from "react";
import dishes from "../data/dishes.json";

const TopDishes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

 
  const increaseQty = (dish) => {
    let newCart = [...cart];
    const exists = newCart.find((x) => x.id === dish.id);

    if (exists) {
      newCart = newCart.map((x) =>
        x.id === dish.id ? { ...x, qty: x.qty + 1 } : x
      );
    } else {
      newCart.push({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        img: dish.image, 
        qty: 1,
      });
    }

    updateCart(newCart);
  };

  
  const getQty = (id) => {
    const item = cart.find((x) => x.id === id);
    return item ? item.qty : 0;
  };

  const categories = ["All", ...new Set(dishes.map((d) => d.category))];

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter((d) => d.category === selectedCategory);

  const renderStars = (count) =>
    Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={
          index < count ? "text-orange-500 text-sm" : "text-gray-300 text-sm"
        }
      >
        ★
      </span>
    ));

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <section className="bg-white py-10 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Top dishes near you
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-1">
              Handpicked favourites across salads, rolls, desserts, noodles &
              more.
            </p>
          </div>

         
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs md:text-sm border transition-all ${
                  selectedCategory === cat
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700 border-gray-200 hover:border-orange-400 hover:text-orange-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {filteredDishes.map((dish) => {
            const qty = getQty(dish.id);

            return (
              <article
                key={dish.id}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
              >
               
                <div className="relative h-52 md:h-56 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                 
                  <button
                    onClick={() => increaseQty(dish)}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-xl font-bold text-gray-700 hover:bg-orange-500 hover:text-white transition-all"
                  >
                    {qty > 0 ? "✓" : "+"}
                  </button>
                </div>

                
                <div className="flex-1 px-5 pb-5 pt-4 flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {dish.name}
                    </h3>
                    <div className="flex items-center gap-0.5">
                      {renderStars(dish.rating)}
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mb-4">
                    Food provides essential nutrients for overall health and
                    well-being.
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-orange-500 font-semibold text-lg">
                      ₹{dish.price}
                    </span>

                   
                    {qty > 0 && (
                      <span className="text-xs bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full">
                        In cart: {qty}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      
        <div className="mt-6 text-sm text-gray-600">
          {totalItems > 0 ? (
            <span>
              You have{" "}
              <span className="font-semibold text-orange-600">
                {totalItems}
              </span>{" "}
              item(s) in your cart.
            </span>
          ) : (
            <span>Select dishes with the “+” button to add them to your cart.</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopDishes;

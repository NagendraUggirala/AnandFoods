import React, { useState, useEffect } from "react";

export default function Cart() {

  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);
  


  
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };


  
  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    updateCart(updated);
  };


  
  const decreaseQty = (id) => {
    let updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty - 1 } : item
    );

    
    updated = updated.filter((item) => item.qty > 0);

    updateCart(updated);
  };


 
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );


  return (
    <div className="p-4 bg-gray-100 min-h-screen rounded-xl">

      <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>

     
      {cart.length === 0 && (
        <p className="text-gray-600 text-center text-lg">Your cart is empty</p>
      )}

      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white shadow p-4 rounded-xl gap-4
                       sm:flex-row flex-col"
          >

           
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"  
              />

              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-green-600 font-semibold">₹{item.price}</p>
              </div>
            </div>

          
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded-lg text-lg"
              >
                -
              </button>

              <span className="font-bold text-lg">{item.qty}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="bg-blue-600 text-white px-3 py-1 rounded-lg text-lg"
              >
                +
              </button>
            </div>

          </div>
        ))}
      </div>

      
      <div className="mt-6 text-center">
        <h2 className="text-xl font-bold">
          Total Amount: <span className="text-purple-700">₹{totalAmount}</span>
        </h2>
      </div>

             <div className="mt-6 text-center">
  <a
    href="/checkout"
    className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
  >
    Proceed to Checkout
  </a>
</div>
 
      
    </div>
  );
}

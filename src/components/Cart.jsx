import React from "react";

export default function Cart({ cart, increaseQty, decreaseQty }) {
  
  // Calculate total amount
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {/* Empty Cart */}
      {cart.length === 0 && (
        <p className="text-gray-500">No items in cart</p>
      )}

      {/* Cart Items */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-white p-3 rounded-lg shadow mb-3"
        >
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-green-600 font-semibold">₹{item.price}</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Decrease Qty */}
            <button
              onClick={() => decreaseQty(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg text-lg"
            >
              -
            </button>

            {/* Qty Count */}
            <span className="font-bold text-lg">{item.qty}</span>

            {/* Increase Qty */}
            <button
              onClick={() => increaseQty(item.id)}
              className="bg-green-600 text-white px-3 py-1 rounded-lg text-lg"
            >
              +
            </button>
          </div>
        </div>
      ))}

      {/* Total Amount */}
      <h2 className="text-xl font-bold mt-4">
        Total Amount:{" "}
        <span className="text-purple-700">₹{totalAmount}</span>
      </h2>
    </div>
  );
}

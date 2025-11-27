import React, { useState, useEffect } from "react";
import { FiEdit3, FiMinus, FiPlus } from "react-icons/fi";
import { FaRegMap } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useCart } from "../utils/cartUtils";

// ---- 5 Manual Top Dishes ----
const topDishes = [
  { id: 101, name: "Chocolate Lava Cake", price: 199, img: "https://hips.hearstapps.com/hmg-prod/images/chocolate-lava-cake-index-65c25056f21fb.jpg?crop=0.8891482670297961xw:1xh;center,top&resize=1200:*" },
  { id: 102, name: "Blueberry Cheesecake", price: 249, img: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/blueberry_cheesecake_67750_16x9.jpg" },
  { id: 103, name: "Red Velvet Cupcake", price: 149, img: "https://boyeatsworld.in/wp-content/uploads/2021/06/unnamed-5.jpg" },
  { id: 104, name: "Classic Waffles", price: 179, img: "https://www.thekitchenmagpie.com/wp-content/uploads/images/2019/06/BelgianWaffleRecipe2.jpg" },
  { id: 105, name: "Dark Chocolate Brownie", price: 159, img: "https://i.ytimg.com/vi/qdxqip0Bgt8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCPjO2A80XRgLsPVseoe9Q8KzCccA" },
];

export default function Cart() {

  /* 🟩 FIXED — initialize navigation */
  const navigate = useNavigate();     // <-- FIXED HERE

  const { getCart, addToCart, decreaseCart } = useCart();
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("7th Phase, KPHB, Hyderabad, Telangana");
  const [editingAddress, setEditingAddress] = useState(false);

  const userName = "Vamsi Krishna";

  // Coupon states
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  const deliveryCharge = 40;
  const taxPercent = 5;

  useEffect(() => {
    setCart(getCart());
  }, []);

  const increaseQty = (dish) => {
    const newCart = addToCart(dish, cart);
    setCart(newCart);
  };

  const decreaseQty = (id) => {
    const newCart = decreaseCart(id, cart);
    setCart(newCart);
  };

  const getQty = (id) => {
    const item = cart.find(x => x.id === id);
    return item ? item.qty : 0;
  };

  const subTotal = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  const taxAmount = Math.round((subTotal * taxPercent) / 100);
  const finalTotal = subTotal - discount + taxAmount + deliveryCharge;

  const applyCoupon = () => {
    const validCoupons = { SAVE50: 50, WELCOME100: 100, NEW20: 20 };
    const code = coupon.trim().toUpperCase();

    if (validCoupons[code]) {
      setDiscount(validCoupons[code]);
      setCouponMessage(`🎉 Coupon Applied! You saved ₹${validCoupons[code]}`);
    } else {
      setDiscount(0);
      setCouponMessage("❌ Invalid Coupon");
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      
      <h1 className="text-3xl text-blue-800 font-bold text-center mb-8">🛒 Your Cart</h1>

      {/* ---- MAIN GRID ---- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* ---- LEFT SIDE ---- */}
        <div className="lg:col-span-7 space-y-6">

          {/* Address Section */}
          <div className="bg-white rounded-2xl shadow p-5">
            <div className="flex items-center gap-3 mb-2">
              <FaRegMap className="text-blue-600 text-xl" />
              <h2 className="font-bold text-lg">Delivery Address</h2>
            </div>

            <p className="font-medium">{userName}</p>

            {editingAddress ? (
              <>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="border w-full p-3 rounded-xl mt-3"
                ></textarea>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-xl"
                  onClick={() => setEditingAddress(false)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <p className="text-gray-600 mt-1">{address}</p>
                <button className="text-blue-600 text-sm mt-2 flex items-center gap-1"
                  onClick={() => setEditingAddress(true)}>
                  <FiEdit3 /> Edit
                </button>
              </>
            )}
          </div>

          {/* Cart Items List */}
          {subTotal > 0 && (
            <div className="bg-white rounded-2xl shadow p-5">
              <h2 className="font-semibold text-lg mb-3">Your Items</h2>

              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center py-4 border-b">
                  <div className="flex items-center gap-3">
                    <img src={item.img} className="w-12 h-12 rounded object-cover" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-green-600 font-semibold">₹{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="border p-2 rounded-full" onClick={() => decreaseQty(item.id)}>
                      <FiMinus />
                    </button>
                    <span className="font-semibold">{item.qty}</span>
                    <button className="border p-2 rounded-full" onClick={() => increaseQty(item)}>
                      <FiPlus />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ---- RIGHT SIDE ---- */}
        <div className="lg:col-span-5 space-y-6">

          {/* Coupon */}
         <div className="bg-white rounded-2xl shadow p-5">
  <h3 className="font-semibold mb-2">Have a Promo Code?</h3>

  <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
    <input
      type="text"
      value={coupon}
      onChange={(e) => setCoupon(e.target.value)}
      className="
        border p-3 
        rounded-xl 
        sm:rounded-l-xl sm:rounded-r-none
        flex-1
        w-full
      "
      placeholder="Enter promo code"
    />

    <button
      onClick={applyCoupon}
      className="
        bg-blue-600 text-white 
        px-5 py-3 
        rounded-xl 
        sm:rounded-r-xl sm:rounded-l-none
        w-full sm:w-auto
        font-medium
      "
    >
      Apply
    </button>
  </div>

  {couponMessage && (
    <p className={`mt-2 text-sm ${discount ? "text-green-600" : "text-red-600"}`}>
      {couponMessage}
    </p>
  )}
</div>


          {/* Bill Summary */}
          <div className="bg-white rounded-2xl shadow p-5 space-y-3">
            <h3 className="font-semibold text-lg">Bill Summary</h3>

            <div className="flex justify-between text-sm">
              <span>Subtotal</span><span>₹{subTotal}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-green-600 font-semibold text-sm">
                <span>Coupon Discount</span><span>-₹{discount}</span>
              </div>
            )}

            <div className="flex justify-between text-sm">
              <span>GST ({taxPercent}%)</span><span>₹{taxAmount}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Delivery</span><span>₹{deliveryCharge}</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{finalTotal}</span>
            </div>
          </div>

          <button 
            onClick={() => navigate("/checkout")}   // <-- FIXED HERE
            className="bg-blue-600 text-white w-full py-4 rounded-xl text-lg font-semibold shadow"
          >
            Proceed to Checkout →
          </button>
        </div>
      </div>


      {/* ---- NOW RECOMMENDED AT END ---- */}
      <h2 className="text-xl font-semibold mt-14 mb-3">⭐ Recommended Desserts</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
        {topDishes.map(dish => {
          const qty = getQty(dish.id);

          return (
            <div key={dish.id} className="bg-white shadow-md rounded-2xl p-4 flex flex-col">
              <img src={dish.img} className="rounded-xl h-32 w-full object-cover" />
              <h3 className="font-semibold mt-3">{dish.name}</h3>
              <p className="text-blue-600 font-bold">₹{dish.price}</p>

              {qty > 0 ? (
                <div className="flex items-center justify-center gap-3 mt-3">
                  <button onClick={() => decreaseQty(dish.id)} className="border p-2 rounded-full">
                    <FiMinus />
                  </button>
                  <span className="font-semibold">{qty}</span>
                  <button onClick={() => increaseQty(dish)} className="border p-2 rounded-full">
                    <FiPlus />
                  </button>
                </div>
              ) : (
                <button onClick={() => increaseQty(dish)}
                  className="bg-blue-600 text-white py-2 rounded-lg mt-3">
                  Add to Cart +
                </button>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}

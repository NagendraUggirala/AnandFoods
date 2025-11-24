import React, { useState, useEffect } from "react";
import { FiEdit3, FiMinus, FiPlus } from "react-icons/fi";
import { FaRegMap } from "react-icons/fa";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("7th Phase, KPHB, Hyderabad, Telangana");
  const [editingAddress, setEditingAddress] = useState(false);

  const userName = "Vamsi Krishna";

  // COUPON STATES
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  // SETTINGS
  const discountPercent = 10;
  const deliveryCharge = 40;
  const taxPercent = 5;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increaseQty = (id) => {
    updateCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  };

  const decreaseQty = (id) => {
    updateCart(
      cart
        .map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item)
        .filter(item => item.qty > 0)
    );
  };

  // BILLING CALC
  const subTotal = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  const autoDiscount = Math.round((subTotal * discountPercent) / 100);
  const taxAmount = Math.round((subTotal * taxPercent) / 100);
  const finalTotal = subTotal - autoDiscount - discount + taxAmount + deliveryCharge;

  // APPLY COUPON 
  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    const validCoupons = { SAVE50: 50, WELCOME100: 100, NEWUSER20: 20 };

    if (validCoupons[code]) {
      setDiscount(validCoupons[code]);
      setCouponMessage(`🎉 Coupon Applied! You saved ₹${validCoupons[code]}`);
    } else {
      setDiscount(0);
      setCouponMessage("❌ Invalid Coupon Code");
    }
  };

  return (
    <div className="min-h-screen bg-white-100 p-6">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-center mb-8 flex justify-center items-center gap-2">
        🛒 Your Cart
      </h1>

      {/* 2 COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT SIDE (Address + Items) */}
        <div className="lg:col-span-7 space-y-6">

          {/* Address */}
          <div className="bg-white rounded-2xl shadow p-5">
            <div className="flex items-center gap-3 mb-1">
              <FaRegMap className="text-blue-600 text-xl" />
              <h2 className="font-bold text-lg">Delivery Address</h2>
            </div>

            <p className="font-medium">{userName}</p>

            {editingAddress ? (
              <>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="border w-full p-3 rounded-xl mt-3 focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-xl w-fit"
                  onClick={() => setEditingAddress(false)}
                >
                  Save Address
                </button>
              </>
            ) : (
              <>
                <p className="text-gray-600 mt-1">{address}</p>
                <button
                  className="text-blue-600 text-sm mt-2 flex items-center gap-1"
                  onClick={() => setEditingAddress(true)}
                >
                  <FiEdit3 /> Edit Address
                </button>
              </>
            )}
          </div>

          {/* Cart Items Box */}
          {subTotal > 0 && (
            <div className="bg-white rounded-2xl shadow p-5">
              <h2 className="font-semibold text-lg mb-3">Your Items</h2>

              <div className="divide-y">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between py-4 items-center">
                    <div className="flex items-center gap-3">
                      <img src={item.img} className="w-12 h-12 rounded object-cover" alt="" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-green-600 font-semibold text-sm">₹{item.price}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="border px-3 py-1 rounded-full" onClick={() => decreaseQty(item.id)}>
                        <FiMinus />
                      </button>
                      <span className="font-semibold">{item.qty}</span>
                      <button className="border px-3 py-1 rounded-full" onClick={() => increaseQty(item.id)}>
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE (Coupon + Summary + Checkout) */}
        <div className="lg:col-span-5 space-y-6">

          {/* Coupon */}
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="font-semibold mb-2">Have a Promo Code?</h3>
            <div className="flex">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter code"
                className="border p-3 rounded-l-xl flex-1"
              />
              <button
                onClick={applyCoupon}
                className="bg-blue-600 text-white px-5 rounded-r-xl"
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
              <span>Delivery Charges</span><span>₹{deliveryCharge}</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{finalTotal}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            onClick={() => (window.location.href = "/checkout")}
            className="bg-blue-600 text-white w-full py-4 rounded-xl text-lg font-semibold shadow"
          >
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </div>
  );
}

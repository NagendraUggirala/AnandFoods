import React, { useEffect, useState } from "react";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("card");

  // ❌ REMOVE: Coupon States (No longer needed)
  // const [coupon, setCoupon] = useState("");
  // const [discount, setDiscount] = useState(0);
  // const [couponMessage, setCouponMessage] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  // ❌ REMOVE: Coupon Logic
  // const applyCoupon = () => { ... }

  const handlePayment = () => {
    alert(`Payment Successful via ${paymentMethod.toUpperCase()}! 🎉`);
    localStorage.removeItem("cart");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-white px-4 md:px-12 py-8">

      {/* PAGE HEADING */}
      <h1 className="text-3xl text-blue-800 font-semibold text-center mb-8">
        Payment Options
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT SIDEBAR */}
        <div className="lg:col-span-3 bg-white shadow-md rounded-xl p-4">
          <ul className="space-y-2 text-gray-700 text-sm">
            {[
              "Quick Pay",
              "Debit / Credit Card",
              "Net Banking",
              "Wallets",
              "Gift Voucher",
              "UPI",
              "Rewards",
              "Cash On Delivery",
            ].map((item, index) => (
              <li
                key={index}
                className={`px-3 py-2 rounded-md cursor-pointer ${
                  item.toLowerCase().includes(paymentMethod)
                    ? "bg-blue-600 text-white font-medium"
                    : "hover:bg-gray-100"
                }`}
                onClick={() =>
                  setPaymentMethod(
                    item.toLowerCase().includes("card")
                      ? "card"
                      : item.toLowerCase().includes("upi")
                      ? "upi"
                      : paymentMethod
                  )
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* PAYMENT FORM */}
        <div className="lg:col-span-6 bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Pay Using {paymentMethod === "card" ? "Card" : "UPI"}
          </h2>

          {/* CARD PAYMENT */}
          {paymentMethod === "card" && (
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="border rounded-md p-3 w-full text-sm" />
              <input type="text" placeholder="Card Number" className="border rounded-md p-3 w-full text-sm" />
              <div className="flex gap-4">
                <input type="text" placeholder="MM/YY" className="border rounded-md p-3 w-1/2 text-sm" />
                <input type="password" placeholder="CVV" className="border rounded-md p-3 w-1/2 text-sm" />
              </div>
            </div>
          )}

          {/* UPI PAYMENT */}
          {paymentMethod === "upi" && (
            <div className="space-y-6">
              <p className="text-gray-700 font-medium">Choose UPI App</p>
              <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center p-3 bg-gray-50 rounded-md shadow">
                  <img src="/img/checkout/gpay.png" className="w-10 h-10" />
                  <p className="text-xs mt-1 font-medium">GPay</p>
                </button>
                <button className="flex flex-col items-center p-3 bg-gray-50 rounded-md shadow">
                  <img src="/img/checkout/phonepe.png" className="w-10 h-10" />
                  <p className="text-xs mt-1 font-medium">PhonePe</p>
                </button>
                <button className="flex flex-col items-center p-3 bg-gray-50 rounded-md shadow">
                  <img src="/img/checkout/paytm2.jpg" className="w-10 h-10" />
                  <p className="text-xs mt-1 font-medium">Paytm</p>
                </button>
              </div>
              <input type="text" placeholder="example@upi" className="border rounded-md p-3 w-full text-sm" />
            </div>
          )}

          {/* PAY BUTTON */}
          <button
            onClick={handlePayment}
            className="mt-6 bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-md text-white font-bold text-lg shadow"
          >
            Pay ₹{totalAmount}
          </button>
        </div>

        {/* RIGHT SECTION — Order Summary ONLY (No discount & no coupon UI) */}
        <div className="lg:col-span-3 bg-white shadow-md rounded-xl p-6">

          {/* ❌ REMOVE: "Have a Coupon?" Section */}
          
          {/* ❌ REMOVE: Order Summary Header */}
          {/* <h2 className="text-lg font-semibold mb-4">Order Summary</h2> */}

          {/* Item List */}
          <div className="space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm py-2 border-b">
                <span>{item.name} × {item.qty}</span>
                <span className="font-semibold text-green-700">₹{item.qty * item.price}</span>
              </div>
            ))}
          </div>

          {/* ONLY SHOW FINAL PRICE */}
          <h3 className="text-xl font-bold text-right mt-3 text-black">
            ₹{totalAmount}
          </h3>
        </div>
      </div>
    </div>
  );
}

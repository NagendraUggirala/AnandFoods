import React, { useEffect, useState } from "react";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("card");

  
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  
  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();

    const validCoupons = {
      SAVE50: 50,
      WELCOME100: 100,
      NEWUSER20: 20,
    };

    if (validCoupons[code]) {
      setDiscount(validCoupons[code]);
      setCouponMessage(
        `Coupon Applied! You saved ₹${validCoupons[code]} 🎉`
      );
    } else {
      setDiscount(0);
      setCouponMessage("Invalid Coupon Code ❌");
    }
  };

  const handlePayment = () => {
    alert(`Payment Successful via ${paymentMethod.toUpperCase()}! 🎉`);
    localStorage.removeItem("cart");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 md:px-12 py-8">

      
      <h1 className="text-3xl font-semibold text-center mb-8">
        Payment Options
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        
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
            ].map((item, index) => (
              <li
                key={index}
                className={`px-3 py-2 rounded-md cursor-pointer ${
                  item.toLowerCase().includes(paymentMethod)
                    ? "bg-orange-500 text-white font-medium"
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

        
        <div className="lg:col-span-6 bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Pay Using {paymentMethod === "card" ? "Card" : "UPI"}
          </h2>

         
          {paymentMethod === "card" && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border rounded-md p-3 w-full text-sm"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="border rounded-md p-3 w-full text-sm"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="border rounded-md p-3 w-1/2 text-sm"
                />
                <input
                  type="password"
                  placeholder="CVV"
                  className="border rounded-md p-3 w-1/2 text-sm"
                />
              </div>
            </div>
          )}

          {/* UPI SECTION */}
          {paymentMethod === "upi" && (
            <div className="space-y-6">
              <p className="text-gray-700 font-medium">Choose UPI App</p>

              <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center p-3 bg-gray-50 rounded-md shadow hover:bg-gray-100">
                  <img src="/img/checkout/gpay.png" className="w-10 h-10" />
                  <p className="text-xs font-medium mt-1">GPay</p>
                </button>

                <button className="flex flex-col items-center p-3 bg-gray-50 rounded-md shadow hover:bg-gray-100">
                  <img src="/img/checkout/phonepe.png" className="w-10 h-10" />
                  <p className="text-xs font-medium mt-1">PhonePe</p>
                </button>

                <button className="flex flex-col items-center p-3 bg-gray-50 rounded-md shadow hover:bg-gray-100">
                  <img src="/img/checkout/paytm2.jpg" className="w-10 h-10" />
                  <p className="text-xs font-medium mt-1">Paytm</p>
                </button>

                <button className="flex flex-col items-center p-3 bg-gray-50 rounded-md shadow hover:bg-gray-100">
                  <img src="/img/checkout/upi.png" className="w-10 h-10" />
                  <p className="text-xs font-medium mt-1">Enter UPI ID</p>
                </button>
              </div>

              <input
                type="text"
                placeholder="example@upi"
                className="border rounded-md p-3 w-full text-sm"
              />
            </div>
          )}

         
          <button
            onClick={handlePayment}
            className="mt-6 bg-orange-500 hover:bg-orange-700 w-full py-3 rounded-md 
            text-white font-bold text-lg shadow"
          >
            Pay ₹{totalAmount - discount}
          </button>
        </div>

        
        <div className="lg:col-span-3 bg-white shadow-md rounded-xl p-6">

          
          <div className="mb-4">
            <label className="text-sm font-semibold text-gray-700">
              Have a Coupon?
            </label>
            <div className="flex mt-2">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
                className="flex-1 border rounded-l-md p-3 text-sm"
              />
              <button
                onClick={applyCoupon}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-r-md text-sm font-semibold"
              >
                Apply
              </button>
            </div>

            {couponMessage && (
              <p
                className={`mt-2 text-sm ${
                  discount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {couponMessage}
              </p>
            )}
          </div>

          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          
          <div className="space-y-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-sm py-2 border-b"
              >
                <span>
                  {item.name} × {item.qty}
                </span>
                <span className="font-semibold text-green-700">
                  ₹{item.qty * item.price}
                </span>
              </div>
            ))}
          </div>

          
          <div className="flex justify-between mt-4 text-sm">
            <span className="font-medium text-gray-600">Subtotal</span>
            <span className="font-semibold">₹{totalAmount}</span>
          </div>

         
          {discount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-600">Discount</span>
              <span className="font-semibold text-green-700">
                -₹{discount}
              </span>
            </div>
          )}

          
          <h3 className="text-xl font-bold text-right mt-3 text-black">
            ₹{totalAmount - discount}
          </h3>
        </div>
      </div>
    </div>
  );
}

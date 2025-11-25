import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!form.email || !form.password) {
      setError("Please enter both email and password.");
      return;
    }

    // 👉 This is where you'd call your API / auth service
    console.log("Signing in with:", form);
    alert(`Signed in as ${form.email}`);

    // Optionally reset
    // setForm({ email: "", password: "", remember: false });
  };

  return (
    <div>
    <div className="min-h-screen flex items-center justify-center  via-white to-amber-50 px-4">
       
      <div className="max-w-md w-full">
        {/* Logo / title */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-2">
            <img
              src="/public/footer.png" 
              alt="AnandFoods Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-extrabold text-gray-900">
              AnandFoods
            </span>
          </div>
          <p className="text-sm text-gray-600 text-center">
            Welcome back! Sign in to continue enjoying fast, fresh deliveries.
          </p>
        </div>

        {/* Card */}
        <div className="relative group">
          <div  />
          <div className="relative bg-white rounded-3xl shadow-lg border border-orange-100 px-6 py-7 md:px-8 md:py-8">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
              Sign in to your account
            </h2>

            {error && (
              <p className="mb-3 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="enter your email"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="enter your password"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-xs md:text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-blue-600 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-blue-500 text-white text-sm font-semibold shadow-md hover:bg-blue-600 hover:shadow-lg transition-all"
              >
                Sign In
              </button>
            </form>

            {/* Bottom text */}
            <p className="mt-5 text-xs md:text-sm text-gray-500 text-center">
              New to AnandFoods?{" "}
              <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                Create an account
              </span>
              {" "}to start ordering instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
<div className="mb-4 text-center">
        <Link to="/" className="text-orange-600 font-semibold hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
    
  );
};

export default SignIn;

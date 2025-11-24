// pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", password: "", confirmPassword: "", address: "", terms: false
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
    setError(""); setSuccess("");
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Please enter a valid email.";
    if (!form.phone.trim()) return "Please enter your phone number.";
    if (form.password.length < 6) return "Password must be at least 6 characters.";
    if (form.password !== form.confirmPassword) return "Passwords do not match.";
    if (!form.terms) return "You must accept Terms & Conditions.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setSuccess("");
    const v = validate();
    if (v) { setError(v); return; }

    try {
      // TODO: call your signup API here (example using fetch)
      // const resp = await fetch('/api/signup', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) });
      // if (!resp.ok) throw new Error('Signup failed');
      console.log("Signing up:", form);

      setSuccess("Account created successfully. Redirecting to sign in...");
      setTimeout(() => navigate("/signin"), 900);
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 py-12">
      <div className="max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-2">
            <img src="/public/footer.png" alt="AnandFoods Logo" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-extrabold text-blue-800">AnandFoods</span>
          </div>
          <p className="text-sm text-gray-600 text-center">Create your account to start ordering fresh and fast.</p>
        </div>

        <div className="relative bg-white rounded-3xl shadow-lg border border-sky-100 px-6 py-7 md:px-8 md:py-8">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Create your account</h2>

          {error && <p className="mb-3 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">{error}</p>}
          {success && <p className="mb-3 text-sm text-green-700 bg-green-50 border border-green-100 rounded-xl px-3 py-2">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Create a password" className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                <input id="confirmPassword" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder="Re-enter password" className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address (optional)</label>
              <textarea id="address" name="address" rows={2} value={form.address} onChange={handleChange} placeholder="Flat / Street / City" className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} className="mt-1 rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
              <span className="text-gray-700">I agree to the <a href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</a> and <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.</span>
            </label>

            <button type="submit" className="w-full mt-1 inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-blue-500 text-white text-sm font-semibold shadow-md hover:bg-blue-600 hover:shadow-lg transition-all">Create account</button>
          </form>

          <p className="mt-4 text-xs md:text-sm text-gray-500 text-center">Already have an account? <Link to="/signin" className="text-blue-600 font-medium hover:underline">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

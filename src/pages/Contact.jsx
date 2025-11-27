import React, { useState } from "react";
import { motion } from "motion/react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import ChatBot from "../components/ChatBot";




export default function Contact() {

  const faqs = [
    {
      q: "How long does food delivery usually take?",
      a: "Delivery times depend on location, restaurant preparation time, and traffic. Most orders arrive within 20–40 minutes."
    },
    {
      q: "What if my food is delayed or incorrect?",
      a: "You can reach our support 24/7. We offer replacements, refunds, or compensation based on the issue."
    },
    {
      q: "How do I apply coupons or discount codes?",
      a: "You can apply available coupons during checkout. Make sure the coupon is valid for your order value and restaurant."
    },
    {
      q: "How do I become a delivery partner?",
      a: "Go to the Delivery Partner section in our app. Our team will assist with verification, onboarding, and training."
    },
    {
      q: "How do I place a bulk order for events?",
      a: "Use the Bulk Order option or contact support. We provide special pricing and priority delivery for events."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (

    <div>
       <section className="relative py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* Hero Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/25 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-400/30 rounded-full mix-blend-overlay filter blur-3xl opacity-25 animate-pulse-medium"></div>
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-blue-300/40 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse-slow"></div>
          
          {/* Animated Stars */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-twinkle"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-200 rounded-full animate-twinkle-delay"></div>
          <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-twinkle"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl mb-6"
            >
              <h1 className="text-2xl md:text-4xl font-bold mb-3">
                Let's <span className="text-amber-300">Connect</span>
              </h1>
              <p className="text-base md:text-lg text-blue-100 mb-4 leading-relaxed">
                We’re here to help! Your feedback and questions matter to us.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919876543210" 
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25 text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call Now
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919876543210" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418"/>
                </svg>
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="min-h-screen from-white via-orange-50 to-orange-100 px-6 md:px-20 py-16 flex flex-col gap-20">

        {/* PAGE TITLE */}
        

        {/* TOP SECTION: LEFT + RIGHT */}
        <div className="flex flex-col md:flex-row gap-16">


           {/* RIGHT GLASS FORM CARD */}
          <div
            className="
            w-full md:w-1/2 
            bg-white/60
            backdrop-blur-xl
            border border-white/40 
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            rounded-3xl 
            p-10 
            space-y-6
          "
          >
            <h2 className="text-3xl font-bold text-blue-800">Get in touch</h2>

            <input
              type="text"
              placeholder="Enter Name"
              className="w-full p-4 bg-white/70 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full p-4 bg-white/70 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              rows="5"
              placeholder="Enter Message"
              className="w-full p-4 bg-white/70 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-xl transition shadow-md">
              Submit
            </button>

            <p className="text-sm text-gray-700 text-center">
              By contacting us you agree to the{" "}
              <span className="text-blue-600 font-semibold">Terms and Conditions</span>{" "}
              and{" "}
              <span className="text-blue-600 font-semibold">Privacy Policy</span>.
            </p>
          </div>

          {/* LEFT SECTION */}
          <div className="w-full md:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">
              Customer Support
            </h1>

            <p className="text-lg text-gray-700">
              Email:{" "}
              <span className="font-semibold text-blue-600">
                support@anandfoods.com
              </span>
            </p>

            {/* SOCIAL ICONS */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Find us on
              </h2>

              <div className="flex space-x-3">
                        <a 
                          href="https://linkedin.com/company/anandrealtyy" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105"
                          aria-label="Follow us on LinkedIn"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        <a 
                          href="https://twitter.com/anandrealtyy" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-sky-500 to-sky-600 text-white p-2 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105"
                          aria-label="Follow us on Twitter"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                        <a 
                          href="https://wa.me/919876543210" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-green-500 to-green-600 text-white p-2 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105"
                          aria-label="Chat with us on WhatsApp"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418"/>
                          </svg>
                        </a>
                        <a 
                          href="mailto:info@anandrealtyy.com" 
                          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-2 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105"
                          aria-label="Send us an email"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        </a>
                      </div>

              
            </div>

            {/* OFFICE DETAILS */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                Corporate Office
              </h2>

              <p className="text-gray-800 leading-relaxed">
                 H.No. 131/A, 2nd Floor, MLA Colony, Beside Vamsiram Banjara Abodes, Road No.12, Lane 14, Banjara Hills, Hyderabad-500034.
                <br />
                Corporate Identity Number:{" "}
                <span className="text-gray-900 font-bold">
                  L74110KA2013PLC096530
                </span>
              </p>

              <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition">
                Get Directions
              </button>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                Emergency
              </h2>

              <p className="text-gray-800 leading-relaxed">
                <li>Something not right?  </li>
                <li> We’re here to help. </li> 
                <li>Tap below for immediate support.</li>
                <br />
                Corporate Identity Number:{" "}
                <span className="text-gray-900 font-bold">
                  L74110KA2013PLC096530
                </span>
              </p>

              <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition">
                Report Issue!
              </button>
            </div>
          </div>

         
        </div>

        {/* FAQ SECTION INSIDE CONTACT PAGE */}
        <div className="space-y-10">
          <h2 className="text-4xl font-extrabold text-blue-800 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((item, i) => (
              <div
                key={i}
                onClick={() => toggleFAQ(i)}
                className="
                bg-white/70 
                backdrop-blur-md
                border border-gray-200
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                rounded-2xl 
                p-6 cursor-pointer
                transition-all
              "
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.q}
                  </h3>

                  {openIndex === i ? (
                    <IoChevronUp className="text-2xl text-blue-600" />
                  ) : (
                    <IoChevronDown className="text-2xl text-blue-600" />
                  )}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-gray-700 text-lg">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HELP CHAT BUBBLE */}
        <div className="fixed bottom-6 right-6 z-50">

          {/* CHAT POPUP */}
          {openIndex === "chat" && (
            <div className="
      mb-4 w-72 p-5 
      bg-white/80 backdrop-blur-xl 
      border border-white/40 
      rounded-2xl shadow-xl 
      animate-fade-in
    ">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-700 mb-4">
                Our support team is here to assist you. How can we help?
              </p>

             
            </div>
          )}

          {/* CHAT FLOATING BUTTON */}
          <ChatBot />



        </div>



      </div>
      <div className="w-full h-[50vh] rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.881074908576!2d77.5942602748523!3d12.934462487397126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c49c040309%3A0x6553433f72187b01!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          title="AnandFoods Office Location "
          className="w-full h-full border-0"
          loading="fast"
          allowFullScreen
        ></iframe>
      </div>

    </div>

  );
}

import React, { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaPinterest,
  FaXTwitter
} from "react-icons/fa6";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";




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


      <div className="min-h-screen from-white via-orange-50 to-orange-100 px-6 md:px-20 py-16 flex flex-col gap-20">

        {/* PAGE TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-blue-800">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            We’re here to help! Your feedback and questions matter to us.
          </p>

        </div>

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

              <div className="flex gap-5 text-blue-500 text-4xl">
                <FaLinkedin />
                <FaInstagram />
                <FaYoutube />
                <FaFacebook />
                <FaPinterest />
                <FaXTwitter />
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

              <button className="
        w-full py-2 bg-orange-500 hover:bg-orange-600 
        text-white rounded-lg transition
      ">
                Start Chat
              </button>

              <button
                onClick={() => setOpenIndex(null)}
                className="mt-2 text-sm text-gray-600 underline w-full text-center"
              >
                Close
              </button>
            </div>
          )}

          {/* CHAT FLOATING BUTTON */}
          <button
            onClick={() =>
              setOpenIndex(openIndex === "chat" ? null : "chat")
            }
            className="
      w-14 h-14 rounded-full 
      bg-blue-500 hover:bg-blue-600 
      shadow-lg flex items-center justify-center 
      text-white text-3xl transition transform hover:scale-110
    "
          >
            💬
          </button>



        </div>



      </div>
      <div className="w-full h-[50vh] rounded-lg overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          title="AnandFoods Office Location "
          className="w-full h-full border-0"
          loading="fast"
          allowFullScreen
        ></iframe>
      </div>



      {/* <iframe width="100%" height="100%" title="map" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe> */}
    </div>

  );
}

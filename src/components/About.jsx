import React from "react";
import WhyCustomersLoveUsSlider from "./WhyCustomersLoveUsSlider";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function AboutPage() {
  return (
    <div>
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-24 -top-20 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -right-24 -bottom-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto text-center text-white"
          >
            {/* Main Sanskrit Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 md:mb-10"
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20 shadow-2xl mx-2">
                {/* Sanskrit Text */}
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-300 mb-4 md:mb-5 font-sans leading-tight">
                  धर्मो रक्षति रक्षितः
                </div>

                {/* Transliteration */}
                <div className="text-base sm:text-lg md:text-2xl text-blue-100 italic mb-4 md:mb-5">
                  "Dharmo Rakshati Rakshitah"
                </div>

                {/* Separator */}
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-4 md:mb-5"></div>

                {/* Meaning */}
                <div className="text-sm sm:text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2">
                  Where righteousness protects the protector, and ethical practices build lasting legacies.
                </div>
              </div>
            </motion.div>

            {/* Main Title - Smaller Size */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-100"
            >
              Our <span className="text-orange-300">Story</span>
            </motion.h1>

            {/* Philosophy Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed px-2 sm:px-4">
                AnandFoods is your trusted partner in quick food delivery, grocery essentials, and unforgettable flavors — delivered with speed, safety, and simplicity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="bg-gray-50 min-h-screen py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* =======================
     1. ABOUT FOUNDER
========================= */}
          <section className="max-w-7xl mx-auto px-5  pt-10 mb-16">

            {/* Title + Logo */}
            <div className="flex items-center gap-4 mb-12">


              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold  text-blue-800  text-center w-full">
                Our Founder
              </h1>

            </div>

            <div className="grid md:grid-cols-2 gap-12">

              {/* Founder Image */}
              <div className="flex justify-center">
                <img
                  src="/public/founder 1.jpg"
                  alt="Founder"
                  className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4"
                />
              </div>

              {/* Founder Text */}
              <div className="flex flex-col justify-center">

                <p className="text-lg text-gray-700 leading-relaxed">
                  AnandFoods was built on the foundation of trust, quality, and a deep
                  respect for India’s rich culinary heritage. Our founder,
                  <span className="text-blue-700 font-semibold"> Shri Anand Sharma </span>,
                  envisioned a food service that goes far beyond delivery—one that creates
                  emotional connections, celebrates flavour, and brings joy to every home.
                </p>

                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                  Guided by the timeless principle:
                  <span className="text-blue-600 font-bold"> “Dharmo Rakshati Rakshitah”</span>,
                  he believes that food is not just something we eat — it is an experience
                  of comfort, culture, and care. This philosophy is the heartbeat of
                  AnandFoods.
                </p>

                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                  With years of dedication and hands-on experience, he has transformed
                  thousands of meals into meaningful moments—ensuring that every order,
                  whether a simple breakfast or a grand celebration feast, reaches with the
                  same warmth and sincerity. His mission is to make every customer feel
                  valued, respected, and cared for.
                </p>



                <p className="mt-6 text-gray-800 font-semibold text-xl bg-blue-100 p-4 rounded-xl shadow-md border-l-4 border-blue-500">
                  “Food is not just about satisfying hunger — it is about nourishing hearts,
                  creating memories, and sharing moments of joy.”
                </p>

              </div>

            </div>
          </section>




          <div className="bg-gray-50 py-12 px-4 md:py-20 md:px-8 ">

            <div className="max-w-4xl mx-auto text-center mb-12 ">
              <h2 className="text-2xl md:text-4xl font-extrabold text-blue-800">
                What We Deliver
              </h2>
              <p className="mt-3 text-gray-600 text-sm md:text-base">
                AnandFoods brings together flavour, convenience, and smart savings so that
                every order feels satisfying — not just to your taste buds, but to your
                schedule and your wallet too.
              </p>
            </div>


            <div className="max-w-6xl mx-auto grid gap-6 md:gap-8 md:grid-cols-3">

              <div className="relative group">

                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-300 via-blue-300 to-blue-300 opacity-0 group-hover:opacity-80 blur-md transition-all duration-500 pointer-events-none" />
                <div className="relative bg-white rounded-3xl border border-sky-100 shadow-md p-6 md:p-7 flex flex-col h-full transform group-hover:-translate-y-1 group-hover:shadow-2xl transition-all duration-500 ease-out">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-2xl md:text-3xl">
                      🏆
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                        Delicious Dishes
                      </h3>
                      <p className="text-xs md:text-sm text-blue-600 font-medium">
                        From cravings to celebrations.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-gray-600">
                    Each order is prepared fresh, packed securely, and delivered quickly so the
                    flavours you love arrive just the way the chef intended.
                  </p>
                  <div className="mt-4 pt-3 border-t border-dashed border-orange-100 text-xs text-gray-500">
                    Perfect for family dinners, office lunches, or solo food therapy.
                  </div>
                </div>
              </div>


              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-300 via-blue-300 to-blue-300 opacity-0 group-hover:opacity-80 blur-md transition-all duration-500 pointer-events-none" />
                <div className="relative bg-white rounded-3xl border border-sky-100 shadow-md p-6 md:p-7 flex flex-col h-full transform group-hover:-translate-y-1 group-hover:shadow-2xl transition-all duration-500 ease-out">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-2xl md:text-3xl">
                      🛒
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                        Grocery On-Demand
                      </h3>
                      <p className="text-xs md:text-sm text-blue-600 font-medium">
                        Essentials at your doorstep.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-gray-600">
                    With quick delivery windows, real-time updates, and reliable packing, you
                    can restock your kitchen in minutes — without stepping out of your home.
                  </p>
                  <div className="mt-4 pt-3 border-t border-dashed border-emerald-100 text-xs text-gray-500">
                    Ideal for busy schedules, last-minute plans, and everyday convenience.
                  </div>
                </div>
              </div>


              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-300 via-white-300 to-blue-300 opacity-0 group-hover:opacity-80 blur-md transition-all duration-500 pointer-events-none" />
                <div className="relative bg-white rounded-3xl border border-sky-100 shadow-md p-6 md:p-7 flex flex-col h-full transform group-hover:-translate-y-1 group-hover:shadow-2xl transition-all duration-500 ease-out">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-violet-50 flex items-center justify-center text-2xl md:text-3xl">
                      💡
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                        Exclusive Offers
                      </h3>
                      <p className="text-xs md:text-sm text-blue-600 font-medium">
                        More flavour, more savings.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-gray-600">
                    We regularly roll out city-based and cuisine-based offers so you can
                    discover new favourites while still staying within budget.
                  </p>
                  <div className="mt-4 pt-3 border-t border-dashed border-violet-100 text-xs text-gray-500">
                    Perfect for frequent foodies, families, and smart savers.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <WhyCustomersLoveUsSlider />

      <div className="bg-slate-50 py-12 px-4 md:py-20 md:px-8">

        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-800">
            Our Values
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Every decision at AnandFoods is guided by a few core principles that keep
            our customers, partners, and the planet at the heart of what we do.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-300 via-blue-300 to-blue-300 opacity-0 group-hover:opacity-80 blur-md transition-all duration-500 pointer-events-none" />
            <div className="relative bg-white rounded-3xl border border-sky-100 shadow-md p-6 md:p-7 flex flex-col h-full transform group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500 ease-out">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-sky-50 flex items-center justify-center text-xl md:text-2xl">
                  💡
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  Innovation
                </h3>
              </div>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed mb-2">
                We are always evolving with technology to enhance your experience —
                from smarter recommendations and faster checkouts to precise delivery
                tracking and real-time updates.
              </p>

            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-300 via-blue-300 to-blue-300 opacity-0 group-hover:opacity-80 blur-md transition-all duration-500 pointer-events-none" />
            <div className="relative bg-white rounded-3xl border border-sky-100 shadow-md p-6 md:p-7 flex flex-col h-full transform group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500 ease-out">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-amber-50 flex items-center justify-center text-xl md:text-2xl">
                  🤝
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  Trust
                </h3>
              </div>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed mb-2">
                Every order counts. Every delivery is a commitment. We ensure what reaches your doorstep is handled with care - from strict checks to honest updates when issues arise.
              </p>

            </div>
          </div>


          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-300 via-blue-300 to-blue-300 opacity-0 group-hover:opacity-80 blur-md transition-all duration-500 pointer-events-none" />
            <div className="relative bg-white rounded-3xl border border-emerald-100 shadow-md p-6 md:p-7 flex flex-col h-full transform group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500 ease-out">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl md:text-2xl">
                  🏘️
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  Community
                </h3>
              </div>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed mb-2">
                We empower local kitchens and small restaurants by giving them a
                digital storefront, logistics support, and access to a wider
                customer base.
              </p>

            </div>
          </div>


          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-300 via-blue-300 to-blue-300 opacity-0 group-hover:opacity-80 blur-md transition-all duration-500 pointer-events-none" />
            <div className="relative bg-white rounded-3xl border border-sky-100 shadow-md p-6 md:p-7 flex flex-col h-full transform group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500 ease-out">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-lime-50 flex items-center justify-center text-xl md:text-2xl">
                  🌱
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  Sustainability
                </h3>
              </div>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed mb-2">
                We are committed to reducing waste, encouraging eco-friendly
                packaging, and supporting farm-fresh producers wherever possible.
              </p>

            </div>
          </div>

        </div>

      </div>

      <div className="bg-gray-50 py-12 px-4 md:py-15 md:px-8">

        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-800 mb-3">
            Join Our Family
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Whether you're a restaurant owner, home chef, or building the next big thing in delivery — there’s a place for you at{" "}
            <span className="font-semibold text-blue-600">AnandFoods</span>.
          </p>
        </div>


        <div className="max-w-6xl mx-auto grid gap-6 md:gap-8 md:grid-cols-3">

          <div className="relative group">

            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-300 via-blue-300 to-blue-300 opacity-0 group-hover:opacity-80 blur-md transition-all duration-500 pointer-events-none" />
            <div className="relative bg-white rounded-3xl border border-sky-100 shadow-md p-6 md:p-7 h-full flex flex-col justify-between transform group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  For Restaurants
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-orange-100 flex items-center justify-center text-xl">
                    🍽️
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    Grow your restaurant business
                  </h3>
                </div>
                <p className="text-sm md:text-[15px] text-gray-700 leading-relaxed mb-3">
                  List your restaurant on AnandFoods and reach thousands of nearby customers discovering new places to eat every day.
                  Get more visibility, more orders, and more loyal guests.
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  We help you with menu optimisation, promotions, and insights so every seat and every kitchen hour works smarter for you.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs md:text-sm">
                <span className="font-medium text-blue-600">Start receiving online orders →</span>
                <span className="hidden md:inline text-gray-500">No setup cost</span>
              </div>
            </div>
          </div>


          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-300 via-blue-300 to-blue-300 opacity-0 group-hover:opacity-80 blur-md transition-all duration-500 pointer-events-none" />
            <div className="relative bg-white rounded-3xl border border-sky-100 shadow-md p-6 md:p-7 h-full flex flex-col justify-between transform group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  For Home Chefs
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center text-xl">
                    🏡
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    Turn your kitchen into a brand
                  </h3>
                </div>
                <p className="text-sm md:text-[15px] text-gray-700 leading-relaxed mb-3">
                  Share your signature recipes with your city. AnandFoods helps passionate home chefs become loved local brands
                  with delivery, visibility, and customer feedback built in.
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  Simple onboarding, transparent earnings, and flexible timings mean you stay in control of your food and your time.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs md:text-sm">
                <span className="font-medium text-blue-600">Apply as a home chef →</span>
                <span className="hidden md:inline text-gray-500">Ideal for small batch cooking</span>
              </div>
            </div>
          </div>


          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-300 via-blue-300 to-blue-300 opacity-0 group-hover:opacity-80 blur-md transition-all duration-500 pointer-events-none" />
            <div className="relative bg-white rounded-3xl border border-sky-100 shadow-md p-6 md:p-7 h-full flex flex-col justify-between transform group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  For Partners & Creators
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center text-xl">
                    🚀
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    Build with AnandFoods
                  </h3>
                </div>
                <p className="text-sm md:text-[15px] text-gray-700 leading-relaxed mb-3">
                  From delivery partners and franchise kitchens to tech and marketing collaborators, we’re building a network
                  that shapes the future of food delivery together.
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  Work with a growing brand that values fairness, transparency, and long-term partnerships over quick wins.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs md:text-sm">
                <span className="font-medium text-blue-600">Explore partnership options →</span>
                <span className="hidden md:inline text-gray-500">Let’s grow together</span>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-10 text-center text-sm md:text-base text-gray-700">
          Ready to join the AnandFoods ecosystem?{" "}
          <span className="font-semibold text-blue-600 cursor-pointer hover:underline">
            Talk to our partnerships team →
          </span>
        </div>
      </div>




      <div className="bg-gray-50 py-12 px-4 md:py-10 md:px-8">

        <div className="max-w-6xl mx-auto">

          <div className="flex items-center justify-center gap-4 mb-10 md:mb-12">

            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
              Careers At <span className="text-blue-800">AnandFoods</span>
            </h1>

          </div>


          <div className="relative group max-w-6xl mx-auto">



            <div className="relative rounded-[32px] bg-white- shadow-lg border border-sky-100 overflow-hidden transform group-hover:-translate-y-1 group-hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col md:flex-row items-stretch">

                <div className="w-full md:w-1/2 p-6 md:p-10">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    When you work at{" "}
                    <span className="font-semibold text-gray-900">
                      AnandFoods
                    </span>
                    , you’re joining a culture of innovation, teamwork, and endless
                    possibilities. We empower our people to take ownership of
                    their careers, experiment with ideas, and see the real impact
                    of their work on how millions enjoy food every day.
                  </p>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    Whether you’re a software engineer building seamless ordering
                    experiences, an operations expert crafting efficient delivery
                    networks, a marketing storyteller, or someone who simply loves
                    delighting customers — there’s a place for you at AnandFoods.
                  </p>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                    If you’re excited about making a difference and want to be
                    part of a team that’s transforming the way people discover and
                    enjoy food, we’d love to hear from you. Explore our current
                    openings and start your next chapter with AnandFoods.
                  </p>

                  <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-500 text-white text-sm md:text-base font-semibold shadow-md hover:bg-blue-600 hover:shadow-lg transition-all">
                    <Link to="/contact" >Know more</Link>
                  </button>
                </div>


                <div className="w-full md:w-1/2 p-4 md:p-6 flex items-center justify-center">
                  <div className="relative w-full h-60 md:h-80 rounded-[28px] overflow-hidden shadow-md">
                    <img
                      src="/public/About.jpg"
                      alt="Team working at AnandFoods"
                      className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

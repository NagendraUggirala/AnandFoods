import React from "react"
import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return <>
        <footer className="bg-slate-900 text-slate-100 pt-12 pb-6 px-4 md:px-10">
            <div className="max-w-6xl mx-auto">
                
                <div className="grid gap-8 md:grid-cols-4 border-b border-slate-700 pb-10">

                    
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-3">
                            <img
                                src="/public/footer.png"
                                alt="AnandFoods Flag"
                                className="w-14 h-14 object-contain"
                            />
                            <span className="text-2xl font-bold tracking-tight">
                                AnandFoods
                            </span>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed mb-4">
                            Bringing your favourite meals 🥘 and daily essentials 🛒 to your doorstep — fast, fresh and full of Anand!
                        </p>
                        <p className="text-xs text-slate-400">
                            © {new Date().getFullYear()} AnandFoods. All rights reserved.
                        </p>
                    </div>

                    
                    <div>
                        <h3 className="text-sm font-semibold mb-3 text-slate-100">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-300">

                            <li>
                                <Link to="/" className="hover:text-orange-400 hover:underline transition">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/about" className="hover:text-orange-400 hover:underline transition">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className="hover:text-orange-400 hover:underline transition">
                                    Contact Us
                                </Link>
                            </li>

                            <li>
                                <Link to="/foods" className="hover:text-orange-400 hover:underline transition">
                                    Foods
                                </Link>
                            </li>

                        </ul>
                    </div>


                   
                    <div>
                        <h3 className="text-sm font-semibold mb-3 text-slate-100">Contact</h3>
                        <p className="text-sm text-slate-300">
                            support@anandfoods.in
                            <br />
                            +91-98xxxxxxxx
                        </p>

                        
                        <h3 className="text-sm font-semibold mt-4 mb-3 text-slate-100">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">
                           
                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-white text-[18px] hover:bg-orange-500 transition-all"
                            >
                                <FaFacebookF />
                            </a>

                           
                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-white text-[18px] hover:bg-orange-500 transition-all"
                            >
                                <FaTwitter />
                            </a>

                           
                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-white text-[18px] hover:bg-orange-500 transition-all"
                            >
                                <FaLinkedinIn />
                            </a>

                            
                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-white text-[18px] hover:bg-orange-500 transition-all"
                            >
                                <FaInstagram />
                            </a>
                        </div>



                    </div>
                </div>

               
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-4 text-xs text-slate-400">
                    <div className="flex flex-wrap gap-4">
                        <span className="hover:text-orange-400 cursor-pointer">Terms & Conditions</span>
                        <span className="hover:text-orange-400 cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-orange-400 cursor-pointer">Help & Support</span>
                    </div>
                    <p className="text-[11px] md:text-xs">
                        Made with ❤️ and 🧠 for food lovers.
                    </p>
                </div>
            </div>
        </footer>
    </>
}
export default Footer
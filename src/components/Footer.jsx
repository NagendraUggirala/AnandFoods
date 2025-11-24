import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#0a2a55] text-white pt-12 pb-6 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">

                {/* TOP SECTION */}
                <div className="grid gap-10 md:grid-cols-4 border-b border-blue-900 pb-10">

                    {/* COLUMN 1 – LEFT BRAND BLOCK (logo on white background) */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-2 shadow-sm">
                                {/* local image file from your upload */}
                                <img
                                    src="/public/footer.png"
                                    alt="AnandFoods Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <span className="text-2xl font-bold tracking-wide">
                                ANAND FOODS
                            </span>
                        </div>

                        <p className="text-sm text-blue-200 leading-relaxed">
                            Bringing a better tomorrow through<br />
                            innovation, quality and trusted service.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-5">
                            <a className="group w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center 
             hover:bg-gray-200 transition">
                                <FaFacebookF className="text-white group-hover:text-blue-600 transition" />
                            </a>

                            <a className="group w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center 
             hover:bg-gray-200 transition">
                                <FaTwitter className="text-white group-hover:text-blue-600 transition" />
                            </a>

                            <a className="group w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center 
             hover:bg-gray-200 transition">
                                <FaLinkedinIn className="text-white group-hover:text-blue-600 transition" />
                            </a>

                            <a className="group w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center 
             hover:bg-gray-200 transition">
                                <FaInstagram className="text-white group-hover:text-blue-600 transition" />
                            </a>

                        </div>
                    </div>

                    {/* COLUMN 2 – QUICK LINKS */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-blue-200 text-sm">
                            <li>
                                <Link to="/" className="hover:underline transition">
                                    Home
                                </Link>
                            </li>
                            <li><Link to="/about" className="hover:underline">About</Link></li>
                            <li><Link to="/foods" className="hover:underline">Foods</Link></li>

                            <li><Link to="/contact" className="hover:underline">Contact</Link></li>

                        </ul>
                    </div>

                    {/* COLUMN 3 – DIVISIONS */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Divisions</h3>
                        <ul className="space-y-2 text-blue-200 text-sm">
                            <li>Anand Kitchens</li>
                            <li>Anand Foods Delivery</li>
                            <li>Anand Events Catering</li>
                        </ul>
                    </div>

                    {/* COLUMN 4 – CONTACT INFO */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>

                        <p className="text-blue-200 text-sm leading-relaxed">
                            H.No. 131/A, 2nd Floor, MLA Colony,<br />
                            Banjara Hills, Hyderabad – 500034.
                        </p>

                        <p className="mt-3 text-blue-200 text-sm">
                            info.anandfoods@gmail.com
                        </p>

                        <p className="mt-2 text-blue-200 text-sm">
                            +91 98000 12345
                        </p>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-4 pt-4 border-blue-900" />

                <div className="flex flex-col md:flex-row items-center justify-between text-blue-300 text-xs mt-4">
                    {/* left: copyright */}
                    <div className="order-1 md:order-1">
                        <p>© {new Date().getFullYear()} AnandFoods. All rights reserved.</p>
                    </div>

                    {/* center: designed by */}
                    <div className="order-3 md:order-2 mt-3 md:mt-0 text-center w-full md:w-auto">
                        <p>© Designed by <span className="font-medium text-white">Designcareermetrics</span></p>
                    </div>

                    {/* right: links */}
                    <div className="order-2 md:order-3 flex items-center gap-4 mt-3 md:mt-0">
                        <Link className="hover:text-white transition text-blue-200 text-xs">Privacy Policy</Link>
                        <Link className="hover:text-white transition text-blue-200 text-xs">Terms of Service</Link>
                        <Link className="hover:text-white transition text-blue-200 text-xs">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

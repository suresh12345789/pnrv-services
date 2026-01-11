import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaRegEnvelope, FaUserCircle } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-[#080c14] border-t border-gray-100 dark:border-white/5 pt-20 pb-10">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
                    {/* Brand Info & Newsletter */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <Link to="/" className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-2xl shadow-orange-500/30">
                                    <span className="text-white font-black text-xl">P</span>
                                </div>
                                <span className="text-2xl font-black bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-orange-600 tracking-tight">
                                    PRNV SERVICES
                                </span>
                            </Link>
                            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-sm">
                                Delivering excellence in home solutions. certified experts, precision work, and your total satisfaction guaranteed.
                            </p>
                        </div>

                        {/* Login / Sign-in Field Section */}
                        <div className="space-y-4">
                            <h4 className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-[0.2em]">Member Access</h4>
                            <div className="relative max-w-md group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FaRegEnvelope className="text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Enter your email/ID to Sign-in"
                                    className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-32 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 dark:text-white transition-all shadow-xs"
                                />
                                <button className="absolute right-2 top-2 bottom-2 bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-xl text-xs font-bold transition-all shadow-lg shadow-orange-500/20 active:scale-95">
                                    Login Now
                                </button>
                            </div>
                            <p className="text-xs text-gray-400 font-medium">Don't have an account? <Link to="/contact" className="text-orange-500 hover:underline">Register as a Pro</Link></p>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all shadow-xs hover:-translate-y-1">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-4 md:mt-0">
                        <h3 className="text-gray-900 dark:text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Navigation</h3>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Booking', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm font-medium transition-all hover:translate-x-1 inline-block"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Categories */}
                    <div className="mt-4 md:mt-0">
                        <h3 className="text-gray-900 dark:text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Categories</h3>
                        <ul className="space-y-4">
                            {['Electrical Work', 'Expert Plumbing', 'AC Maintenance', 'House Painting', 'CCTV Security'].map((service) => (
                                <li key={service}>
                                    <Link to="/services" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm font-medium transition-all hover:translate-x-1 inline-block">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Detail Section */}
                    <div className="mt-4 md:mt-0">
                        <h3 className="text-gray-900 dark:text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Get In Touch</h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 group">
                                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 transition-colors">
                                    <FaRegEnvelope className="text-indigo-500 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Email Us</p>
                                    <p className="text-gray-600 dark:text-gray-300 font-bold text-sm">support@prnvservices.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 group">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors">
                                    <FaUserCircle className="text-blue-500 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Office Line</p>
                                    <p className="text-gray-600 dark:text-gray-300 font-bold text-sm">+1 (234) 567-890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 dark:border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-sm">
                    <p className="text-gray-400 font-medium">© 2026 <span className="text-gray-900 dark:text-white font-black">PRNV SERVICES</span>. Craftsman Excellence.</p>
                    <div className="flex items-center space-x-8">
                        <a href="#" className="text-gray-400 hover:text-orange-500 font-bold transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-orange-500 font-bold transition-colors">Terms of Service</a>
                        <div className="h-4 w-px bg-gray-200 dark:bg-white/10 hidden md:block" />
                        <span className="text-gray-400 font-medium">v1.2.4</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserCircle, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-orange-500 border-b border-orange-500 shadow-xl transition-all duration-300">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 gap-4 lg:gap-8">
                    {/* Logo Area */}
                    <div className="shrink-0 flex items-center">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <span className="text-orange-600 font-black text-xl">P</span>
                            </div>
                            <span className="hidden lg:block text-xl font-black text-white tracking-tighter">
                                PRNV SERVICES
                            </span>
                        </Link>
                    </div>

                    {/* Search Bar - High Contrast White */}
                    <div className="hidden md:flex flex-1 max-w-sm lg:max-w-md">
                        <div className="relative w-full group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FaSearch className="h-4 w-4 text-orange-200" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-11 pr-4 py-2.5 rounded-2xl leading-5 bg-white/10 border border-white/20 text-white placeholder-orange-200 focus:outline-none focus:bg-white/20 focus:ring-4 focus:ring-white/10 focus:border-white transition-all duration-300 sm:text-sm"
                                placeholder="Search services..."
                            />
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
                        <div className="flex items-center space-x-4 lg:space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-[13px] lg:text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group py-2 ${isActive(link.path)
                                            ? 'text-white'
                                            : 'text-orange-100 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center space-x-3 lg:space-x-4 border-l border-orange-500 pl-4 lg:pl-8">
                            {/* Sign-in with White Contrast */}
                            <Link
                                to="/login"
                                className="flex items-center gap-2 text-white font-bold text-[13px] lg:text-sm hover:text-orange-100 transition-colors py-2"
                            >
                                <FaUserCircle className="w-5 h-5 lg:w-6 lg:h-6" />
                                <span className="hidden xl:inline">Sign In</span>
                            </Link>

                            <Link
                                to="/booking"
                                className="bg-white text-orange-600 px-5 lg:px-7 py-2.5 rounded-xl text-[13px] lg:text-sm font-black uppercase tracking-tighter hover:bg-orange-50 transition-all duration-300 shadow-xl active:scale-95 transform hover:-translate-y-0.5"
                            >
                                Booking
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center space-x-4">
                        <Link to="/login" className="text-white">
                            <FaUserCircle className="w-7 h-7" />
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-white hover:bg-white/10 focus:outline-none transition-all border border-white/20"
                        >
                            {!isOpen ? <FaBars className="w-6 h-6" /> : <FaTimes className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay - Orange Theme */}
            <div className={`md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-orange-700 border-t border-orange-500`}>
                <div className="px-4 pt-4 pb-8 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-6 py-4 rounded-2xl text-base font-black uppercase tracking-widest transition-all ${isActive(link.path)
                                    ? 'bg-white text-orange-600 shadow-lg'
                                    : 'text-white hover:bg-white/10'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="grid grid-cols-2 gap-4 pt-6">
                        <Link
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 bg-orange-800 text-white px-5 py-4 rounded-2xl text-sm font-bold active:scale-95 transition-all"
                        >
                            <FaUserCircle />
                            Login
                        </Link>
                        <Link
                            to="/booking"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-white text-orange-600 px-5 py-4 rounded-2xl text-sm font-black uppercase shadow-lg active:scale-95 transition-all"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

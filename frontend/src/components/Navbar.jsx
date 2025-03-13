// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isLoggedIn = false; // Placeholder for authentication state
    const userRole = 'tourist'; // 'tourist' or 'guide' or null

    const toggleMenu = () => setIsOpen(!isOpen);
    
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#7BBCB0] text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-white ml-10" >
                    Tour Guide
                </Link>

                {/* Menu Icon */}
                <div className="lg:hidden block">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Nav Links */}
                <ul className={`lg:flex lg:items-center lg:space-x-6 lg:static absolute w-full bg-[#7BBCB0] lg:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'top-16' : 'top-[-490px]'}`}>
                    <li><Link to="/" className="hover:text-[#f5ff68] transition-colors duration-300">Home</Link></li>
                    <li><Link to="/about" className="hover:text-[#f5ff68] transition-colors duration-300">About Us</Link></li>
                    <li><Link to="/destination" className="hover:text-[#f5ff68] transition-colors duration-300">Popular Destination</Link></li>
                    <li><Link to="/stories" className="hover:text-[#f5ff68] transition-colors duration-300">Stories</Link></li>
                    {isLoggedIn && userRole === 'tourist' && <li><Link to="/booking" className="hover:text-[#f5ff68] transition-colors duration-300">Booking</Link></li>}
                    {isLoggedIn && userRole === 'guide' && <li><Link to="/orders" className="hover:text-[#f5ff68] transition-colors duration-300">Orders</Link></li>}
                    <li><Link to="/help" className="hover:text-[#f5ff68] transition-colors duration-300">Help</Link></li>
                    {isLoggedIn ? (
                        <li>
                            <img src="/path/to/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
                        </li>
                    ) : (
                        <button className="bg-[#FFDA32] text-black font-bold py-2 px-5 rounded hover:bg-[#ff8686] transition duration-300" >Sign In</button>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
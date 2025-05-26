import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-orange-500 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0 text-2xl font-bold">
                        &lt;RMG&gt;
                    </div>

                    {/* Menu Items */}
                    <div className="flex space-x-6">
                        <Link to="/" className="hover:text-yellow-300 transition duration-200">
                            Home
                        </Link>
                        <Link to="/about" className="hover:text-yellow-300 transition duration-200">
                            About
                        </Link>
                        <Link to="/login" className="hover:text-yellow-300 transition duration-200">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

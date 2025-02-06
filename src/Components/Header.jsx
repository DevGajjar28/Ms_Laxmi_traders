import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <Helmet>
        <title>Responsive Header Example</title>
        <meta
          name="description"
          content="This is an example of a responsive, SEO-optimized header in React with Tailwind CSS."
        />
      </Helmet>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-gray-800">
            Logo
          </a>
          <nav className="hidden text-xl font-normal p-6 md:flex space-x-28">
            <a href="/" className="text-gray-800 hover:text-gray-600">
              Home
            </a>

            <div className="relative group">
              <button className="text-gray-800 hover:text-gray-600 focus:outline-none">
                Products
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-48">
                <a
                  href="/products/acralic"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Acralic Products
                </a>
                {/* Add more sub-sections here */}
              </div>
            </div>
            <a href="/about" className="text-gray-800 hover:text-gray-600">
              About
            </a>
            <a href="/contact" className="text-gray-800 hover:text-gray-600">
              Contact Us
            </a>
          </nav>
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden z-50`}
        >
          <div className="p-4">
            <a
              href="/"
              className="block py-2 text-gray-800 hover:text-gray-600"
              onClick={toggleMenu}
            >
              Home
            </a>

            <div className="relative">
              <button className="w-full text-left py-2 text-gray-800 hover:text-gray-600 focus:outline-none">
                Products
              </button>
              <div className="pl-4">
                <a
                  href="/products/acralic"
                  className="block py-2 text-gray-800 hover:text-gray-600"
                  onClick={toggleMenu}
                >
                  Acralic Products
                </a>
                {/* Add more sub-sections here */}
              </div>
            </div>
            <a
              href="/about"
              className="block py-2 text-gray-800 hover:text-gray-600"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="/contact"
              className="block py-2 text-gray-800 hover:text-gray-600"
              onClick={toggleMenu}
            >
              Contact Us
            </a>
          </div>
        </div>
        {/* Overlay for mobile menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;

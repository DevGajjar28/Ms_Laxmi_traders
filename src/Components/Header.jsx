import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Acrylicsheet from "../data/Acrylicsheet";

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
              {/* Main Button */}
              <button className="text-gray-800 hover:text-gray-600 focus:outline-none">
                Products
              </button>

              {/* Main Dropdown - Shows Main Headings */}
              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg  py-2 w-56 z-10">
                {/* Acrylic Sheet (Main Heading) */}
                <div className="relative group/sub">
                  <div className="px-4 py-2 text-gray-900 font-semibold cursor-pointer hover:bg-gray-100">
                    <Link to="./Products/Acrylicsheets">Acrylic Sheet</Link>
                  </div>
                  {/* Subcategory Dropdown */}
                  <div className="absolute hidden group-hover/sub:flex flex-col left-full top-0 bg-white shadow-lg rounded-lg w-56 py-2 z-20">
                    <Link
                      key={Acrylicsheet.id}
                      to={`/products/acrylicsheets/${Acrylicsheet.id}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Acrylic Transparent Sheet
                    </Link>
                    <a
                      href="/products/colored-acrylic-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Colored Acrylic Sheet
                    </a>
                    <a
                      href="/products/astari-acrylic-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Astari Acrylic Sheet
                    </a>
                    <a
                      href="/products/acrylic-transparent-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Acrylic Transparent Sheet
                    </a>
                  </div>
                </div>

                {/* Polycarbonate Sheet (Another Main Heading) */}
                <div className="relative group/sub">
                  <div className="px-4 py-2 text-gray-900 font-semibold cursor-pointer hover:bg-gray-100">
                    Polycarbonate Sheet
                  </div>
                  {/* Subcategory Dropdown */}
                  <div className="absolute hidden group-hover/sub:flex flex-col left-full top-0 bg-white shadow-lg rounded-lg w-56 py-2 z-20">
                    <a
                      href="/products/polycarbonate-clear-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Polycarbonate Clear Sheet
                    </a>
                    <a
                      href="/products/polycarbonate-colored-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Polycarbonate Colored Sheet
                    </a>
                  </div>
                </div>

                {/*  */}
                <div className="relative group/sub">
                  <div className="px-4 py-2 text-gray-900 font-semibold cursor-pointer hover:bg-gray-100">
                    Acrylic Sheet
                  </div>
                  {/* Subcategory Dropdown */}
                  <div className="absolute hidden group-hover/sub:flex flex-col left-full top-0 bg-white shadow-lg rounded-lg w-56 py-2 z-20">
                    <a
                      href="/products/acrylic-clear-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Acrylic Clear Sheet
                    </a>
                    <a
                      href="/products/colored-acrylic-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Colored Acrylic Sheet
                    </a>
                    <a
                      href="/products/astari-acrylic-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Astari Acrylic Sheet
                    </a>
                    <a
                      href="/products/acrylic-transparent-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Acrylic Transparent Sheet
                    </a>
                  </div>
                </div>
                {/*  */}

                <div className="relative group/sub">
                  <div className="px-4 py-2 text-gray-900 font-semibold cursor-pointer hover:bg-gray-100">
                    Acrylic Sheet
                  </div>
                  {/* Subcategory Dropdown */}
                  <div className="absolute hidden group-hover/sub:flex flex-col left-full top-0 bg-white shadow-lg rounded-lg w-56 py-2 z-20">
                    <a
                      href="/products/acrylic-clear-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Acrylic Clear Sheet
                    </a>
                    <a
                      href="/products/colored-acrylic-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Colored Acrylic Sheet
                    </a>
                    <a
                      href="/products/astari-acrylic-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Astari Acrylic Sheet
                    </a>
                    <a
                      href="/products/acrylic-transparent-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Acrylic Transparent Sheet
                    </a>
                  </div>
                </div>

                {/*  */}

                <div className="relative group/sub">
                  <div className="px-4 py-2 text-gray-900 font-semibold cursor-pointer hover:bg-gray-100">
                    Acrylic Sheet
                  </div>
                  {/* Subcategory Dropdown */}
                  <div className="absolute hidden group-hover/sub:flex flex-col left-full top-0 bg-white shadow-lg rounded-lg w-56 py-2 z-20">
                    <a
                      href="/products/acrylic-clear-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Acrylic Clear Sheet
                    </a>
                    <a
                      href="/products/colored-acrylic-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Colored Acrylic Sheet
                    </a>
                    <a
                      href="/products/astari-acrylic-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Astari Acrylic Sheet
                    </a>
                    <a
                      href="/products/acrylic-transparent-sheet"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Acrylic Transparent Sheet
                    </a>
                  </div>
                </div>
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

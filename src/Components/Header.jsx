import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const [openCategories, setOpenCategories] = useState({
    acrylicSheet: false,
    acrylicBox: false,
    acrylicMemento: false,
    acrylicRod: false,
    machinecover: false,
  });

  // Function to toggle individual dropdowns
  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileProducts = () => {
    setMobileProductsOpen(!mobileProductsOpen);
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

              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg py-2 w-56 z-10">
                <div className="relative group/sub">
                  <div className="px-4 py-2 text-gray-900 font-semibold cursor-pointer hover:bg-gray-100">
                    <Link to="./Products/Acrylicsheets">Acrylic Sheet</Link>
                  </div>
                  <div className="absolute hidden group-hover/sub:flex flex-col left-full top-0 bg-white shadow-lg rounded-lg w-56 py-2 z-20">
                    <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Transparent Sheet
                    </Link>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Colored Acrylic Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Astari Acrylic Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Transparent Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Transparent Display Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      2mm Black Acrylic Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Polystyrene Plastic Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Cast Sheets
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Jewellery Display Box
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Display Box
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Blue Acrylic Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Plastic Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      8x4 Feet Acrylic Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Rectangular Acrylic Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Mirror Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Cast Acrylic Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Window Acrylic Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Cut Pieces And Sheets
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Mirror Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Plastic Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Polycarbonate Clear Sheet
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Transparent Machine Guard
                    </a>
                  </div>
                </div>

                <div className="relative group/sub">
                  <div className="px-4 py-2 text-gray-900 font-semibold cursor-pointer hover:bg-gray-100">
                    <Link to="./Products/AcrylicBoxs">Acrylic Box</Link>
                  </div>
                  <div className="absolute hidden group-hover/sub:flex flex-col left-full top-0 bg-white shadow-lg rounded-lg w-56 py-2 z-20">
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Waterproof Box
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      QR Code Stand
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Weighing Box
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Electric Acrylic Box
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Colored Acrylic Box
                    </a>
                  </div>
                </div>

                <div className="relative group/sub">
                  <div className="px-4 py-2 text-gray-900 font-semibold cursor-pointer hover:bg-gray-100">
                    <Link to="./Products/AcrylicMementos">
                      Acrylic Memento And Trophies
                    </Link>
                  </div>
                  <div className="absolute hidden group-hover/sub:flex flex-col left-full top-0 bg-white shadow-lg rounded-lg w-56 py-2 z-20">
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Trophy Memento
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Award Memento
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Wooden Acrylic Trophy
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Award Trophies
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Award Trophy
                    </a>
                  </div>
                </div>

                <div className="relative group/sub">
                  <div className="px-4 py-2 text-gray-900 font-semibold cursor-pointer hover:bg-gray-100">
                    <Link to="./Products/AcrylicRod">Acrylic Rod</Link>
                  </div>
                  <div className="absolute hidden group-hover/sub:flex flex-col left-full top-0 bg-white shadow-lg rounded-lg w-56 py-2 z-20">
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Pipe And Rod
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Round Rod
                    </a>
                  </div>
                </div>

                <div className="relative group/sub">
                  <div className="px-4 py-2 text-gray-900 font-semibold cursor-pointer hover:bg-gray-100">
                    <Link to="./Products/MachineCover">Machine Cover</Link>
                  </div>
                  <div className="absolute hidden group-hover/sub:flex flex-col left-full top-0 bg-white shadow-lg rounded-lg w-56 py-2 z-20">
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Machine Safety Guard
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Acrylic Machine Guard
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Gauge Meter Glass
                    </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Meter Window Glass
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
          } md:hidden z-50 overflow-y-auto`}
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
              <button
                className="w-full text-left py-2 text-gray-800 hover:text-gray-600 focus:outline-none flex justify-between items-center"
                onClick={toggleMobileProducts}
              >
                Products
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    mobileProductsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Mobile Products Dropdown */}
              <div
                className={`pl-4 space-y-2 ${
                  mobileProductsOpen ? "block" : "hidden"
                }`}
              >
                {/* Acrylic Sheet */}
                <div className="py-2">
                  <button
                    onClick={() => toggleCategory("acrylicSheet")}
                    className="w-full py-3 px-4 flex justify-between items-center hover:bg-gray-50"
                  >
                    <Link
                      to="./Products/Acrylicsheets"
                      className="text-gray-800 font-semibold"
                    >
                      Acrylic Sheet
                    </Link>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        openCategories.acrylicSheet ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`pl-4 space-y-1 ${
                      openCategories.acrylicSheet ? "block" : "hidden"
                    }`}
                  >
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Transparent Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Colored Acrylic Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Astari Acrylic Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Transparent Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Transparent Display Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      2mm Black Acrylic Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Polystyrene Plastic Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Cast Sheets
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Jewellery Display Box
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Display Box
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Blue Acrylic Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Plastic Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      8x4 Feet Acrylic Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Rectangular Acrylic Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Mirror Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Cast Acrylic Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Window Acrylic Sheet
                    </Link>{" "}
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Cut Pieces And Sheets
                    </Link>{" "}
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Mirror Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Plastic Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Polycarbonate Clear Sheet
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Transparent Machine Guard
                    </Link>
                  </div>
                </div>

                {/* Acrylic Box */}
                <div className="py-2">
                  <button
                    onClick={() => toggleCategory("acrylicBox")}
                    className="w-full py-3 px-4 flex justify-between items-center hover:bg-gray-50"
                  >
                    <Link
                      to="./Products/AcrylicBoxs"
                      className="text-gray-800 font-semibold"
                    >
                      Acrylic Box
                    </Link>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        openCategories.acrylicSheet ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`pl-4 space-y-1 ${
                      openCategories.acrylicBox ? "block" : "hidden"
                    }`}
                  >
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Waterproof Box
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      QR Code Stand
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Weighing Box
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Electric Acrylic Box
                    </Link>
                  </div>
                </div>

                {/* Acrylic Memento */}
                <div className="py-2">
                  <button
                    onClick={() => toggleCategory("acrylicMemento")}
                    className="w-full py-3 px-4 flex justify-between items-center hover:bg-gray-50"
                  >
                    <Link
                      to="./Products/AcrylicMementos"
                      className="text-gray-800 font-semibold"
                    >
                      Acrylic Mementos & Trophis
                    </Link>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        openCategories.acrylicSheet ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`pl-4 space-y-1 ${
                      openCategories.acrylicMemento ? "block" : "hidden"
                    }`}
                  >
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Trophy Memento
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Award Memento
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Wooden Acrylic Trophy
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Award Trophies
                    </Link>
                  </div>
                </div>

                {/* Acrylic rod */}
                <div className="py-2">
                  <button
                    onClick={() => toggleCategory("acrylicRod")}
                    className="w-full py-3 px-4 flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="text-gray-800 font-semibold">
                      Acrylic Rod
                    </span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        openCategories.acrylicSheet ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`pl-4 space-y-1 ${
                      openCategories.acrylicRod ? "block" : "hidden"
                    }`}
                  >
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Pipe And Rod
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Round Rod
                    </Link>
                  </div>
                </div>

                {/* Machine Cover */}
                <div className="py-2">
                  <button
                    onClick={() => toggleCategory("machinecover")}
                    className="w-full py-3 px-4 flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="text-gray-800 font-semibold">
                      Machine Cover
                    </span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        openCategories.acrylicSheet ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`pl-4 space-y-1 ${
                      openCategories.machinecover ? "block" : "hidden"
                    }`}
                  >
                    <Link className="block text-gray-600 text-sm py-1">
                      Machine Safety Guard
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Acrylic Machine Guard
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Gauge Meter Glass
                    </Link>
                    <Link className="block text-gray-600 text-sm py-1">
                      Meter Window Glass
                    </Link>
                  </div>
                </div>
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

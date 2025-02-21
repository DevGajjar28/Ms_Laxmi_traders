import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/temp.webp";
import AcrylicBox from "../data/AcrylicBox";
import AcrylicMementos from "../data/AcrylicMemento";
import AcrylicRod from "../data/AcrylicRod";
import Acrylicsheet from "../data/Acrylicsheet";
import MachineCover from "../data/MachineCover";

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
      <div className="container mx-auto px-6 py-1">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center ">
            <img src={logo1} alt="Laxmi Traders Logo" className="h-14 w-auto" />
            <div className="flex flex-col justify-start leading-tight">
              <span className="text-lg font-bold text-gray-800">MS Laxmi</span>
              <span className="text-lg font-bold text-gray-800">Traders</span>
            </div>
          </a>

          <nav className="hidden text-xl mr-60 font-normal p-6 md:flex space-x-28">
            <a href="/" className="text-gray-800 hover:text-gray-600">
              Home
            </a>

            <div className="relative group">
              <button className="text-gray-800 hover:text-gray-600 focus:outline-none">
                <Link to="./ProductList">Products</Link>
              </button>

              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg py-2 w-56 z-10">
                <div className="relative group/sub">
                  <div className="px-4 py-2 text-gray-900 text-lg font-normal cursor-pointer hover:bg-gray-100">
                    <Link to="./Products/Acrylicsheets">Acrylic Sheet</Link>
                  </div>

                  <div className="absolute hidden group-hover/sub:flex flex-wrap left-full top-0 bg-white shadow-lg rounded-lg w-[600px] p-4 z-20">
                    <div className="grid grid-cols-2 gap-2 w-full">
                      {Acrylicsheet[0].items.map((product) => (
                        <Link
                          key={product.id}
                          to={`/products/acrylicsheets/${product.id}`}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative group/sub">
                  <div className="px-4 py-2 text-gray-900 text-lg font-normal cursor-pointer hover:bg-gray-100">
                    <Link to="./Products/AcrylicBoxs">Acrylic Box</Link>
                  </div>
                  <div className="absolute hidden group-hover/sub:flex flex-col left-full top-0 bg-white shadow-lg rounded-lg w-56 py-2 z-20">
                    {AcrylicBox[0].items.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/acrylicboxs/${product.id}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="relative group/sub">
                  <div className="px-4 py-2 text-gray-900 text-lg font-normal cursor-pointer hover:bg-gray-100">
                    <Link to="./Products/AcrylicMementos">
                      Acrylic Memento And Trophies
                    </Link>
                  </div>
                  <div className="absolute hidden group-hover/sub:flex flex-col left-full top-0 bg-white shadow-lg rounded-lg w-56 py-2 z-20">
                    {AcrylicMementos[0].items.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/acrylicmementos/${product.id}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="relative group/sub">
                  <div className="px-4 py-2 text-gray-900 text-lg font-normal cursor-pointer hover:bg-gray-100">
                    <Link to="./Products/AcrylicRod">Acrylic Rod</Link>
                  </div>
                  <div className="absolute hidden group-hover/sub:flex flex-col left-full top-0 bg-white shadow-lg rounded-lg w-56 py-2 z-20">
                    {AcrylicRod[0].items.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/acrylicrod/${product.id}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="relative group/sub">
                  <div className="px-4 py-2 text-gray-900 text-lg font-normal cursor-pointer hover:bg-gray-100">
                    <Link to="./Products/MachineCover">Machine Cover</Link>
                  </div>
                  <div className="absolute hidden group-hover/sub:flex flex-col left-full top-0 bg-white shadow-lg rounded-lg w-56 py-2 z-20">
                    {MachineCover[0].items.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/machinecover/${product.id}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                      >
                        {product.name}
                      </Link>
                    ))}
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
            className="md:hidden text-gray-800 focus:outline-none "
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
                      className="text-gray-800 font-normal"
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
                    {Acrylicsheet[0].items.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/acrylicsheets/${product.id}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                      >
                        {product.name}
                      </Link>
                    ))}
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
                      className="text-gray-800 font-normal"
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
                    {AcrylicBox[0].items.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/acrylicboxs/${product.id}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                      >
                        {product.name}
                      </Link>
                    ))}
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
                      className="text-gray-800 font-normal"
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
                    {AcrylicMementos[0].items.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/acrylicmementos/${product.id}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Acrylic rod */}
                <div className="py-2">
                  <button
                    onClick={() => toggleCategory("acrylicRod")}
                    className="w-full py-3 px-4 flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="text-gray-800 font-normal">
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
                    {AcrylicRod[0].items.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/acrylicrod/${product.id}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Machine Cover */}
                <div className="py-2">
                  <button
                    onClick={() => toggleCategory("machinecover")}
                    className="w-full py-3 px-4 flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="text-gray-800 font-normal">
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
                    {MachineCover[0].items.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/machinecover/${product.id}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                      >
                        {product.name}
                      </Link>
                    ))}
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

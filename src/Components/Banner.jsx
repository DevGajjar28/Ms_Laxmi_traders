import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Hide banner when closed

  return (
    <div className="px-8 py-2 bg-[#25D366] text-white transition-all duration-300">
      <div className="container mx-auto flex items-center justify-center relative ">
        {/* Centered WhatsApp Contact Section */}
        <div className="animate-fadeIn flex items-center space-x-3">
          <FaWhatsapp className="text-2xl animate-pulse" />
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold hover:underline"
          >
            Contact Us on WhatsApp
          </a>
        </div>

        {/* Close Button (Absolute Positioned to Right) */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 text-white hover:text-gray-300 transition-all duration-200"
        >
          <IoClose className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Banner;

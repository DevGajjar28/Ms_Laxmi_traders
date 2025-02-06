import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"; // Importing social media icons
import { HiMail, HiPhone } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Links Section (Left) */}
        <div>
          <h3 className="text-2xl font-semibold mb-4" itemProp="headline">
            Quick Links
          </h3>
          <nav>
            <ul className="text-lg space-y-4">
              <li>
                <a
                  href="/about"
                  className="hover:text-gray-400 relative"
                  title="Learn more about M/S Laxmi Traders"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-400 transform scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-gray-400 relative"
                  title="View our range of acrylic products"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-gray-400 relative"
                  title="Explore the services we offer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-400 relative"
                  title="Get in touch with M/S Laxmi Traders"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contact Section (Middle) */}
        <div>
          <h3 className="text-2xl font-semibold mb-4" itemProp="headline">
            Contact Us
          </h3>
          <address
            className="text-lg space-y-2"
            itemProp="address"
            itemscope
            itemType="https://schema.org/PostalAddress"
          >
            <strong>Address:</strong>
            <br />
            <span itemProp="streetAddress">M/S Laxmi Traders</span>
            <br />
            <span itemProp="streetAddress">
              123, Acrylic Avenue, Industrial Estate
            </span>
            <br />
            <span itemProp="addressLocality">Ahmedabad</span>,
            <span itemProp="addressRegion">Gujarat</span>,
            <span itemProp="addressCountry">India</span>
          </address>
        </div>

        {/* Contact Info & Social Media Icons (Right) */}
        <div>
          {/* Phone & Email */}
          <div className="mb-4">
            <div>
              <strong>Phone:</strong>{" "}
              <HiPhone className="inline text-xl mr-2" />
              <a href="tel:+911234567890" className="hover:text-gray-400">
                +91 123 456 7890
              </a>
            </div>
            <div>
              <strong>Email:</strong> <HiMail className="inline text-xl mr-2" />
              <a
                href="mailto:info@laxmitraders.com"
                className="hover:text-gray-400"
              >
                info@laxmitraders.com
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-pink-600"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

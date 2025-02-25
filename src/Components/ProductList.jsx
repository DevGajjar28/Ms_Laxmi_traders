import { motion } from "framer-motion"; // Import Framer Motion
import React from "react";
import { useNavigate } from "react-router-dom";
import dataimg5 from "../assets/acrylic-rod.jpg";
import dataimg3 from "../assets/acrylicbox1.jpg";
import dataimg4 from "../assets/acrylicsheet.jpg";
import dataimg6 from "../assets/machine-safety-guard.webp";
import mainimg2 from "../assets/main2.jpg";

const products = [
  {
    id: "acrylic-sheets",
    name: "Acrylic Sheets",
    image: mainimg2,
    description:
      "Premium-quality acrylic sheets with high durability and clarity.",
    path: "/products/acrylicsheets",
  },
  {
    id: "acrylic-boxes",
    name: "Acrylic Boxes",
    image: dataimg3,
    description: "Strong, customizable acrylic boxes for multiple uses.",
    path: "/products/acrylicboxs",
  },
  {
    id: "acrylic-mementos",
    name: "Acrylic Mementos",
    image: dataimg4,
    description: "Elegant and stylish mementos perfect for awards and gifting.",
    path: "/products/acrylicmementos",
  },
  {
    id: "acrylic-rods",
    name: "Acrylic Rods",
    image: dataimg5,
    description:
      "High-quality acrylic rods suitable for various industrial and decorative applications.",
    path: "/products/acrylicrod",
  },
  {
    id: "machine-covers",
    name: "Machine Covers",
    image: dataimg6,
    description: "Protective and durable machine covers for industrial safety.",
    path: "/products/machinecover",
  },
];

const ProductList = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header Section with Animations */}
      <div className="text-center mb-12 bg-black py-6 rounded-3xl">
        {/* Heading Animation: Slide from Left */}
        <motion.h1
          initial={{ x: -800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-5xl font-extrabold text-white leading-tight"
        >
          Our Premium Products
        </motion.h1>

        {/* Paragraph Animation: Slide from Right */}
        <motion.p
          initial={{ x: 800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="text-lg bg-white text-black border-2 border-black mt-4 max-w-2xl mx-auto p-4 rounded-lg shadow-md"
        >
          Explore our range of high-quality acrylic products, built for
          durability, style, and performance.
        </motion.p>
      </div>

      {/* Products Grid with Fade-in Animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="group bg-white rounded-2xl border border-gray-300 shadow-lg transition-all duration-300 cursor-pointer hover:border-blue-500 hover:shadow-blue-400/50"
            onClick={() => navigate(product.path)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-t-2xl"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductList;

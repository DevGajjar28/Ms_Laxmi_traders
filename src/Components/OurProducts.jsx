import { ArrowRight } from "lucide-react";
import React from "react";
import img3 from "../assets/Acrylic Award Memento.jpg";
import img5 from "../assets/acrylic-rod.jpg";
import img2 from "../assets/acrylicbox1.jpg";
import img1 from "../assets/acrylicsheet.jpg";
import img4 from "../assets/img2.webp";
import img6 from "../assets/machine-safety-guard.webp";

const products = [
  {
    id: 1,
    name: "Acrylic Sheet",
    description: "Advanced fitness tracking with premium health features",
    image: img1,
    color: "bg-black",
    link: "/products/smart-watch",
  },
  {
    id: 2,
    name: "Acrylic Box",
    description: "Crystal clear audio with active noise cancellation",
    image: img2,
    color: "bg-black",
    link: "/products/earbuds",
  },
  {
    id: 3,
    name: "Acrylic Memento and Trophies",
    description: "Room-filling sound with voice assistant",
    image: img3,
    color: "bg-black",
    link: "/products/speaker",
  },
  {
    id: 4,
    name: "Decorative Acrylic Sheet",
    description: "Next-gen mobile experience with advanced camera",
    image: img4,
    color: "bg-black",
    link: "/products/smartphone",
  },
  {
    id: 5,
    name: "Acrylic Road",
    description: "Fast charging, high capacity portable power",
    image: img5,
    color: "bg-black",
    link: "/products/powerbank",
  },
  {
    id: 6,
    name: "Machine Covers",
    description: "Ultimate gaming experience with 4K graphics",
    image: img6,
    color: "bg-black",
    link: "/products/console",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-gray-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>

        <button
          className={`${product.color} text-white px-6 py-3 rounded-xl flex items-center justify-between hover:opacity-90 transition-opacity`}
        >
          <span>View Product</span>
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

const OurProducts = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our collection of premium products designed to enhance your
            lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;

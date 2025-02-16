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
    image: [mainimg2],
    description: "High-quality acrylic sheets suitable for various purposes.",
    path: "/products/acrylicsheets",
  },
  {
    id: "acrylic-boxes",
    name: "Acrylic Boxes",
    image: [dataimg3],
    description: "Durable and customizable acrylic boxes.",
    path: "/products/acrylicboxs",
  },
  {
    id: "acrylic-mementos",
    name: "Acrylic Mementos",
    image: [dataimg4],
    description: "Premium mementos for awards and gifts.",
    path: "/products/acrylicmementos",
  },
  {
    id: "acrylic-rods",
    name: "Acrylic Rods",
    image: [dataimg5],
    description: "High-quality acrylic rods for various applications.",
    path: "/products/acrylicrod",
  },
  {
    id: "machine-covers",
    name: "Machine Covers",
    image: [dataimg6],
    description: "Protective covers for industrial machines.",
    path: "/products/machinecover",
  },
];

const ProductList = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 cursor-pointer"
            onClick={() => navigate(product.path)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

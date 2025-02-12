import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import dataimg1 from "../../assets/acrylicsheet.jpg";

const Acrylicsheets = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Product data
  const Acrylicsheet = [
    {
      category: "Acrylic Sheets",
      items: [
        {
          id: 1,
          name: "Acrylic Transparent Sheet",
          price: "₹ 40/ Sq ft",
          size: "8x4 ft",
          color: "Transparent",
          finish: "Glossy",
          thickness: "5 mm",
          density: "1.2g/cm3",
          description:
            "High-quality transparent acrylic sheet suitable for commercial use with a glossy finish.",
          images: [dataimg1],
        },
        {
          id: 2,
          name: "Colored Acrylic Sheet",
          price: "₹ 150/ Sq ft",
          size: "8x4 ft",
          color: "Various Colors",
          finish: "Matte/Glossy",
          thickness: "2-20 mm",
          shape: "Rectangle",
          density: "1.2 g/cm2",
          description:
            "Available in multiple colors with both matte and glossy finishes for versatile applications.",
          images: [dataimg1],
        },
        {
          id: 3,
          name: "Colored Acrylic Sheet",
          price: "₹ 150/ Sq ft",
          size: "8x4 ft",
          color: "Various Colors",
          finish: "Matte/Glossy",
          thickness: "2-20 mm",
          shape: "Rectangle",
          density: "1.2 g/cm2",
          description:
            "Available in multiple colors with both matte and glossy finishes for versatile applications.",
          images: [dataimg1],
        },
        {
          id: 4,
          name: "Colored Acrylic Sheet",
          price: "₹ 150/ Sq ft",
          size: "8x4 ft",
          color: "Various Colors",
          finish: "Matte/Glossy",
          thickness: "2-20 mm",
          shape: "Rectangle",
          density: "1.2 g/cm2",
          description:
            "Available in multiple colors with both matte and glossy finishes for versatile applications.",
          images: [dataimg1],
        },
        {
          id: 5,
          name: "Colored Acrylic Sheet",
          price: "₹ 150/ Sq ft",
          size: "8x4 ft",
          color: "Various Colors",
          finish: "Matte/Glossy",
          thickness: "2-20 mm",
          shape: "Rectangle",
          density: "1.2 g/cm2",
          description:
            "Available in multiple colors with both matte and glossy finishes for versatile applications.",
          images: [dataimg1],
        },
        {
          id: 6,
          name: "Colored Acrylic Sheet",
          price: "₹ 150/ Sq ft",
          size: "8x4 ft",
          color: "Various Colors",
          finish: "Matte/Glossy",
          thickness: "2-20 mm",
          shape: "Rectangle",
          density: "1.2 g/cm2",
          description:
            "Available in multiple colors with both matte and glossy finishes for versatile applications.",
          images: [dataimg1],
        },
        {
          id: 7,
          name: "Colored Acrylic Sheet",
          price: "₹ 150/ Sq ft",
          size: "8x4 ft",
          color: "Various Colors",
          finish: "Matte/Glossy",
          thickness: "2-20 mm",
          shape: "Rectangle",
          density: "1.2 g/cm2",
          description:
            "Available in multiple colors with both matte and glossy finishes for versatile applications.",
          images: [dataimg1],
        },
        // ... other products from your data
      ],
    },
  ];

  const defaultImage = "/api/placeholder/500/500";
  const [selectedImage, setSelectedImage] = useState(0);

  // If no product is selected, show the product list
  if (!selectedProduct) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Acrylic Sheets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Acrylicsheet[0].items.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer p-4"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.images?.[0] || defaultImage}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-blue-600 font-bold mb-2">{product.price}</p>
              <p className="text-gray-600 line-clamp-2">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Product detail view
  const product = selectedProduct;
  const images = product.images?.length > 0 ? product.images : [defaultImage];

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={() => setSelectedProduct(null)}
        className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
      >
        ← Back to Products
      </button>

      <div className="flex flex-col md:flex-row gap-8 mb-12 bg-white rounded-lg shadow-lg p-6">
        {/* Image Section */}
        <div className="md:w-1/2">
          <div className="relative">
            {/* Zoomable Image */}
            <div className="relative w-full aspect-square overflow-hidden rounded-lg border cursor-zoom-in">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: product.name,
                    isFluidWidth: true,
                    src: images[selectedImage],
                  },
                  largeImage: {
                    src: images[selectedImage],
                    width: 1200,
                    height: 1200,
                  },
                  enlargedImageContainerDimensions: {
                    width: "200%",
                    height: "150%",
                  },
                  isHintEnabled: true,
                }}
              />
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="flex gap-2 mt-4">
                {images.map((image, idx) => (
                  <button
                    key={idx}
                    className={`w-16 h-16 border rounded-md overflow-hidden ${
                      selectedImage === idx
                        ? "border-blue-500 border-2"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2">
          <div className="sticky top-4">
            <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">
              {product.price}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold mb-4">Specifications</h4>
              <dl className="space-y-2">
                {product.size && product.size !== "-" && (
                  <div className="flex">
                    <dt className="w-24 font-medium text-gray-600">Size:</dt>
                    <dd>{product.size}</dd>
                  </div>
                )}
                {product.color && product.color !== "-" && (
                  <div className="flex">
                    <dt className="w-24 font-medium text-gray-600">Color:</dt>
                    <dd>{product.color}</dd>
                  </div>
                )}
                {product.finish && product.finish !== "-" && (
                  <div className="flex">
                    <dt className="w-24 font-medium text-gray-600">Finish:</dt>
                    <dd>{product.finish}</dd>
                  </div>
                )}
                {product.thickness && product.thickness !== "-" && (
                  <div className="flex">
                    <dt className="w-24 font-medium text-gray-600">
                      Thickness:
                    </dt>
                    <dd>{product.thickness}</dd>
                  </div>
                )}
                {product.density && product.density !== "-" && (
                  <div className="flex">
                    <dt className="w-24 font-medium text-gray-600">Density:</dt>
                    <dd>{product.density}</dd>
                  </div>
                )}
                {product.shape && product.shape !== "-" && (
                  <div className="flex">
                    <dt className="w-24 font-medium text-gray-600">Shape:</dt>
                    <dd>{product.shape}</dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acrylicsheets;

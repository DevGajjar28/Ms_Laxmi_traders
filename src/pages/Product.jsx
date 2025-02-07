import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";

const Produc = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Default image if none provided
  const defaultImage = "https://via.placeholder.com/500"; // Add a placeholder image

  // Safely get images array or provide default
  const images =
    product.images && product.images.length > 0
      ? product.images
      : [defaultImage];

  return (
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
                  src: images[selectedImage] || defaultImage,
                },
                largeImage: {
                  src: images[selectedImage] || defaultImage,
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

          {/* Thumbnail Gallery - Only show if there are multiple images */}
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
              {product.size && (
                <div className="flex">
                  <dt className="w-24 font-medium text-gray-600">Size:</dt>
                  <dd>{product.size}</dd>
                </div>
              )}
              {product.color && (
                <div className="flex">
                  <dt className="w-24 font-medium text-gray-600">Color:</dt>
                  <dd>{product.color}</dd>
                </div>
              )}
              {product.finish && (
                <div className="flex">
                  <dt className="w-24 font-medium text-gray-600">Finish:</dt>
                  <dd>{product.finish}</dd>
                </div>
              )}
              {product.thickness && (
                <div className="flex">
                  <dt className="w-24 font-medium text-gray-600">Thickness:</dt>
                  <dd>{product.thickness}</dd>
                </div>
              )}
              {product.density && (
                <div className="flex">
                  <dt className="w-24 font-medium text-gray-600">Density:</dt>
                  <dd>{product.density}</dd>
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
  );
};

export default Produc;

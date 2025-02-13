import { useRef, useState } from "react";

const ProductDropdown = ({ selectedProducts = [], setSelectedProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const products = [
    "Acrylic Clear Sheet",
    "Colored Acrylic Sheet",
    "Astari Acrylic Sheet",
    "Acrylic Transparent Sheet",
    "Transparent Display Sheet",
    "Acrylic Waterproof Box",
    "QR Code Stand",
    "Acrylic Weighing Box",
  ];

  const handleProductChange = (product) => {
    if (selectedProducts.includes(product)) {
      setSelectedProducts(selectedProducts.filter((item) => item !== product));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="block font-semibold p-3">Select Product</label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 border rounded-3xl bg-white cursor-pointer"
      >
        {selectedProducts.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {selectedProducts.map((product) => (
              <span
                key={product}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
              >
                {product}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-gray-500">Select products</span>
        )}
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full bg-white border rounded-3xl shadow-lg mt-2 max-h-60 overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>

          <ul className="p-3 space-y-2 pt-8">
            {products.map((product) => (
              <li key={product}>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product)}
                    onChange={() => handleProductChange(product)}
                    className="mr-2"
                  />
                  {product}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductDropdown;

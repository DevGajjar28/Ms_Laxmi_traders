import React from "react";

const Whatsapp = ({ product }) => {
  const handleClick = () => {
    if (!product) return;

    const { name, price, images, id, category } = product;

    // Get the current path to determine the category if not explicitly provided
    const currentPath = window.location.pathname;

    // Extract category from current path as fallback if category isn't in product object
    let productCategory = category;
    if (!productCategory) {
      // Parse the URL to extract category
      const pathParts = currentPath.toLowerCase().split("/");
      const categoryIndex = pathParts.indexOf("products") + 1;
      if (categoryIndex > 0 && categoryIndex < pathParts.length) {
        productCategory = pathParts[categoryIndex];
      }
    }

    // Ensure category is valid, or use a default
    const validCategories = [
      "acrylicboxs",
      "acrylicsheets",
      "acrylicmementos",
      "acrylicrod",
      "machinecover",
    ];
    if (!productCategory || !validCategories.includes(productCategory)) {
      // Use the current page category or fallback to a default
      if (currentPath.includes("acrylicboxs")) productCategory = "acrylicboxs";
      else if (currentPath.includes("acrylicsheets"))
        productCategory = "acrylicsheets";
      else if (currentPath.includes("acrylicmementos"))
        productCategory = "acrylicmementos";
      else if (currentPath.includes("acrylicrod"))
        productCategory = "acrylicrod";
      else if (currentPath.includes("machinecover"))
        productCategory = "machinecover";
      else productCategory = "product"; // Fallback
    }

    // Construct the absolute product URL with the correct path and case
    const productURL = `${window.location.origin}/products/${productCategory}/${id}`;

    // Create the message with proper encoding
    const message = `Hello, I'm interested in buying this product:

*Product:* ${name}
*Price:* ₹${price}

🔗 *View Product:* ${productURL}`;

    // Encode the entire message once at the end
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with the properly encoded message
    window.open(`https://wa.me/+919104014663?text=${encodedMessage}`, "_blank");
  };

  return (
    <button
      className="w-full bg-[#25d366] text-white py-3 px-6 rounded-lg hover:bg-[#2dc665] transition"
      onClick={handleClick}
    >
      Send to WhatsApp
    </button>
  );
};

export default Whatsapp;

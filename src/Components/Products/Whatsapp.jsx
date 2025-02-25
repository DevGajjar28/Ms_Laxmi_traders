import React from "react";

const Whatsapp = ({ product }) => {
  const handleClick = () => {
    if (!product) return;

    const { name, price, images, id, category } = product;

    // Construct the absolute product URL with the correct path structure
    const productURL = `${window.location.origin}/Products/${category}/${id}`;

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

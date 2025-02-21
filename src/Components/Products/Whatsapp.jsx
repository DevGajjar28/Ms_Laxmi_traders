import React from "react";

const Whatsapp = ({ product }) => {
  const handleClick = () => {
    if (!product) return;

    const { name, price, images } = product;
    const productURL = window.location.href;

    const message = `Hello, I'm interested in buying this product:\n\n*Product:* ${name}\n*Price:* ₹${price}\n*Link:* ${productURL}\n*Product Image:* ${
      images?.[0] || "No image available"
    }\nPlease provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+918320201473?text=${encodedMessage}`, "_blank");
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

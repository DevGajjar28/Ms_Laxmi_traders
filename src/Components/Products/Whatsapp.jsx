import React from "react";

const Whatsapp = ({ product }) => {
  const handleClick = () => {
    if (!product) return;

    const { name, price, images, id } = product;
    const productURL = encodeURIComponent(
      `${window.location.origin}/products/${id}`
    );
    const imageUrl = images?.[0] ? encodeURIComponent(images[0]) : "";

    const message = `Hello, I'm interested in buying this product:\n\n*Product:* ${name}\n*Price:* ₹${price}\n\n🔗 *View Product:* ${decodeURIComponent(
      productURL
    )}\n🖼️ *Product Image:* ${imageUrl}`;

    window.open(
      `https://wa.me/+919104014663?text=${encodeURIComponent(message)}`,
      "_blank"
    );
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

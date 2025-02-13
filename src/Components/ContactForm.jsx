import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ProductDropdown from "./ProductDropdown";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    description: "",
    selectedProducts: [],
  });
  const [status, setStatus] = useState("");
  const [showSpecifications, setShowSpecifications] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Include selected products in form data
    const dataToSend = {
      ...formData,
      selectedProducts: formData.selectedProducts.join(", "), // Convert to comma-separated string
    };

    const response = await fetch("https://formspree.io/f/xrbeaewn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        contact: "",
        description: "",
        product: "",
      });
      setShowSpecifications(false);
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="w-full mx-auto p-6 bg-white shadow-lg rounded-xl">
      <Helmet>
        <title>Contact Us - Business Name</title>
        <meta
          name="description"
          content="Get in touch with us for inquiries, support, or feedback. We are here to help!"
        />
        <meta
          name="keywords"
          content="contact, business contact, inquiries, customer support, acrylic sheets"
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-center p-4 mb-4">Contact Us</h1>

      <div className="mt-10 max-w-3xl mx-auto p-6 bg-white shadow-lg border border-gray-600 rounded-3xl">
        {status && <p className="text-green-500 text-center">{status}</p>}

        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Product Specifications */}

          {/* Name and Email in one row */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="block font-semibold p-3">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                required
                className="w-full p-3 border rounded-3xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="email" className="block font-semibold p-3">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
                className="w-full p-3 border rounded-3xl"
              />
            </div>
          </div>

          <label htmlFor="contact" className="block font-semibold p-3">
            Phone number
          </label>
          <input
            id="contact"
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter Contact Number"
            required
            className="w-full p-3 border rounded-3xl"
          />

          {/* Product Selection Dropdown */}
          <ProductDropdown
            selectedProducts={formData.selectedProducts}
            setSelectedProducts={(products) =>
              setFormData({ ...formData, selectedProducts: products })
            }
          />

          <label htmlFor="description" className="block font-semibold p-3">
            Additional Requirements
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter any additional requirements or specifications"
            required
            className="w-full h-32 p-3 border rounded-3xl"
          />

          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-3xl hover:bg-gray-900"
          >
            Send Inquiry
          </button>
        </form>
      </div>

      {/* Address Section */}
      <div className="mt-40 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
        <div className="w-full md:w-2/1">
          <iframe
            title="Business Location Map"
            className="w-full h-48 md:h-96 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8567270801527!2d72.61809697414576!3d22.99229541745961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86094c28f79d%3A0x369b7159702fd4c4!2sHaripura%20Society!5e0!3m2!1sen!2sin!4v1738588418748!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="w-full md:w-1/2 space-y-2 text-center">
          <h2 className="text-xl font-semibold">Our Address</h2>
          <p className="text-gray-700">
            📍 125/3, Haripura Society, Opposite Sub Laxmi Society Near Laxmi
            Narayan Pumping Station, Ahmedabad- 380008, Gujarat, India
          </p>
          <p className="text-gray-700">📞 Contact: +91 98765 43210</p>
          <p className="text-gray-700">✉️ Email: info@business.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

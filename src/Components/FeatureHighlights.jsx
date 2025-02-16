import React from "react";
import {
  FaBox,
  FaBuilding,
  FaCheckCircle,
  FaClock,
  FaTruck,
} from "react-icons/fa";

const features = [
  {
    title: "Quality Assurance",
    icon: <FaCheckCircle className="w-12 h-12 text-blue-600" />,
  },
  {
    title: "Robust Infrastructure",
    icon: <FaBuilding className="w-12 h-12 text-green-600" />,
  },
  {
    title: "Fast Delivery",
    icon: <FaTruck className="w-12 h-12 text-red-600" />,
  },
  {
    title: "28+ Years of Experience",
    icon: <FaClock className="w-12 h-12 text-yellow-600" />, // New icon
  },
  {
    title: "500+ Orders Worked",
    icon: <FaBox className="w-12 h-12 text-orange-600" />, // New icon
  },
];

const FeatureHighlights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Our key features ensure the best experience for you.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md border-2 rounded-full flex flex-col items-center"
            >
              {/* Circle container for icon */}
              <div className="mb-4 p-6  flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;

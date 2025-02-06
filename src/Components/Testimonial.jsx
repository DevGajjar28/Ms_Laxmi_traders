import React from "react";

function Testimonial() {
  return (
    <section className="py-10 text-center bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500">
      <div className="max-w-full relative overflow-hidden">
        {/* Wrapper for seamless text movement */}
        <div className="relative flex items-center marquee-container">
          <div className="marquee-content animate-marquee">
            <span className="text-7xl font-bold text-white">
              Trusted Company Since 1996 | Providing 100% Satisfaction
              Guaranteed Services
            </span>
            <span className="text-7xl font-bold text-white">
              Trusted Company Since 1996 | Providing 100% Satisfaction
              Guaranteed Services
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

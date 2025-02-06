import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 60%",
            scrub: false,
          },
        }
      );
    });
  }, []);

  const tablesRef = useRef([]);

  useEffect(() => {
    tablesRef.current.forEach((table, index) => {
      gsap.fromTo(
        table,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: table,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold">M/S Laxmi Traders</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Leading Manufacturer & Trader of high-quality Acrylic products since
            1996.
          </p>

          {/* Download Button */}
          <a
            href="/m-s-laxmi-traders.pdf" // Place your actual file in the public folder
            download="Laxmi_Traders_Brochure.pdf"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300"
          >
            📥 Download Brochure
          </a>
        </div>
      </section>

      {/* Company Overview */}
      <section
        ref={(el) => sectionsRef.current.push(el)}
        className="py-16 px-6 bg-gray-100"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Who We Are</h2>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            Established in{" "}
            <span className="text-blue-600 font-semibold">1996</span> in
            Ahmedabad,
            <strong> M/S Laxmi Traders</strong> is a trusted name in the acrylic
            industry. We specialize in{" "}
            <span className=" font-semibold">
              Acrylic Sheets, Acrylic Boxes, and Acrylic Mementos
            </span>
            , offering top-quality products at competitive prices.
            <span>
              we are a Sole Proprietorship firm and manufacture the offered
              products as per the set industry norms. Our valued clients can
              avail these products from us at reasonable rates. In addition to
              this, we are also involved in offering best-in-class Acrylic Sheet
              Cutting Service to our esteemed clients.
            </span>
          </p>
        </div>
      </section>

      <section
        ref={(el) => sectionsRef.current.push(el)}
        className="py-16 px-6 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Company Factsheet
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-black to-gray-800 text-white">
                  <th className="py-4 px-6 text-left text-lg font-semibold">
                    Category
                  </th>
                  <th className="py-4 px-6 text-left text-lg font-semibold">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {/* Basic Information */}
                <tr className="bg-gray-50 border-b hover:bg-gray-100 transition">
                  <td className="py-4 px-6 font-medium flex items-center gap-2">
                    🏢 <span>Nature of Business</span>
                  </td>
                  <td className="py-4 px-6">Retailer</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-100 transition">
                  <td className="py-4 px-6 font-medium flex items-center gap-2">
                    👨‍💼 <span>CEO</span>
                  </td>
                  <td className="py-4 px-6">Rajesh Gajjar</td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-gray-100 transition">
                  <td className="py-4 px-6 font-medium flex items-center gap-2">
                    👥 <span>Employees</span>
                  </td>
                  <td className="py-4 px-6">Upto 10 People</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-100 transition">
                  <td className="py-4 px-6 font-medium flex items-center gap-2">
                    💰 <span>Annual Turnover</span>
                  </td>
                  <td className="py-4 px-6">0 - 40 L</td>
                </tr>

                {/* Legal & Financial */}
                <tr className="bg-gray-50 border-b hover:bg-gray-100 transition">
                  <td className="py-4 px-6 font-medium flex items-center gap-2">
                    🏦 <span>Banker</span>
                  </td>
                  <td className="py-4 px-6">Bank of Baroda</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-100 transition">
                  <td className="py-4 px-6 font-medium flex items-center gap-2">
                    🆔 <span>GST No.</span>
                  </td>
                  <td className="py-4 px-6">24ABPPG9706M1Z6</td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-gray-100 transition">
                  <td className="py-4 px-6 font-medium flex items-center gap-2">
                    📅 <span>GST Registration</span>
                  </td>
                  <td className="py-4 px-6">01-07-2017</td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-gray-100 transition">
                  <td className="py-4 px-6 font-medium flex items-center gap-2">
                    📅 <span>Legal Status of Firm</span>
                  </td>
                  <td className="py-4 px-6">01-07-2017</td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-gray-100 transition">
                  <td className="py-4 px-6 font-medium flex items-center gap-2">
                    📅 <span>Proprietorship</span>
                  </td>
                  <td className="py-4 px-6">
                    125/3, Haripura Society, Opposite Sub Laxmi Society Near
                    <br />
                    Laxmi Narayan Pumping Station, Ahmedabad- 380008, Gujarat,
                    India
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Payment & Shipment Details */}
      <section
        ref={(el) => sectionsRef.current.push(el)}
        className="py-16 px-6 bg-gray-100"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Payment & Shipment</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
            <div className="p-6 shadow-lg rounded-lg bg-white border-l-4 border-purple-600 w-80">
              <h3 className="text-xl font-semibold">Payment Modes</h3>
              <p className="mt-3 text-gray-700">
                Credit Card, Cash, Cheque, Online
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-white border-l-4 border-yellow-600 w-80">
              <h3 className="text-xl font-semibold">Shipment Mode</h3>
              <p className="mt-3 text-gray-700">By Road</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-gray-700">
            We are dedicated to providing top-notch acrylic products with
            exceptional service.
          </p>

          <div className="mt-12 space-y-6">
            {/* Table 1 */}
            <div
              ref={(el) => tablesRef.current.push(el)}
              className="w-full flex justify-center md:justify-start md:pl-32"
            >
              <table className="w-full md:w-2/3 border border-gray-300 shadow-lg">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="p-6 text-xl font-semibold text-blue-600">
                      🌟 High-Quality Products
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table 2 - Shifted Right */}
            <div
              ref={(el) => tablesRef.current.push(el)}
              className="w-full flex justify-center md:justify-start md:pl-44"
            >
              <table className="w-full md:w-2/3 border border-gray-300 shadow-lg">
                <tbody>
                  <tr className="bg-green-100">
                    <td className="p-6 text-xl font-semibold text-green-600">
                      👨‍🔬 Experienced Team
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table 3 - Centered */}
            <div
              ref={(el) => tablesRef.current.push(el)}
              className="w-full flex justify-center md:pl-20"
            >
              <table className="w-full md:w-2/3 border border-gray-300 shadow-lg">
                <tbody>
                  <tr className="bg-purple-100">
                    <td className="p-6 text-xl font-semibold text-purple-600">
                      🚚 Timely Delivery
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table 4 - Shifted Right */}
            <div
              ref={(el) => tablesRef.current.push(el)}
              className="w-full flex justify-center md:justify-end md:pr-24"
            >
              <table className="w-full md:w-2/3 border border-gray-300 shadow-lg">
                <tbody>
                  <tr className="bg-yellow-100">
                    <td className="p-6 text-xl font-semibold text-yellow-600">
                      💰 Competitive Prices
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table 5 - Shifted Left */}
            <div
              ref={(el) => tablesRef.current.push(el)}
              className="w-full flex justify-center md:justify-end"
            >
              <table className="w-full md:w-2/3 border border-gray-300 shadow-lg">
                <tbody>
                  <tr className="bg-red-100">
                    <td className="p-6 text-xl font-semibold text-red-600">
                      ❤️ Customer-Centric Approach
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

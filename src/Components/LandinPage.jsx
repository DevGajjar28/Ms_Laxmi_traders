import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";

const slides = [
  {
    image: img1,
    title: "Acrylic Sheets",
    description: "High-quality, durable acrylic sheets for all applications.",
  },
  {
    image: img2,
    title: "Acrylic Boxes",
    description: "Customizable acrylic boxes, perfect for storage & display.",
  },
  {
    image: img3,
    title: "Acrylic Mementos",
    description: "Elegant, personalized mementos for every occasion.",
  },
];

const LandingPage = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const swiper = document.querySelector(".swiper");
    if (swiper) {
      swiper.addEventListener("slideChangeTransitionStart", () => {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.8 }
        );
      });
    }
  }, []);

  return (
    <>
      {/* Preload LCP Image */}
      <link rel="preload" as="image" href={slides[0].image} type="image/webp" />

      <div className="w-full">
        {/* Hero Section with Auto-Sliding Carousel */}
        <section className="relative w-full h-[70vh]">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  {/* Background Image (Using img instead of background-image) */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"} // Eager loading for LCP, lazy for others
                    fetchPriority={index === 0 ? "high" : "low"} // Boost LCP priority
                  />

                  {/* Overlay (Dark for better readability) */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Text Content */}
                  <div
                    ref={textRef}
                    className="absolute top-10 left-10 md:top-20 md:left-20 text-white z-10 max-w-lg"
                  >
                    <h1 className="text-3xl md:text-5xl font-bold">
                      {slide.title}
                    </h1>
                    <p className="mt-2 text-xl">{slide.description}</p>
                    <button className="mt-4 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded transition">
                      View More Products
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  );
};

export default LandingPage;

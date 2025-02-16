import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from "../assets/img2.webp";
import img3 from "../assets/machinemain.jpg";
import img1 from "../assets/main1.avif";

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
      <link rel="preload" as="image" href={slides[0].image} type="image/webp" />

      <div className="w-full">
        <section className="relative w-full h-[calc(100vh-80px)]">
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
                  <div className="absolute inset-0">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center"
                      style={{ imageRendering: "crisp-edges" }}
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "low"}
                    />
                  </div>

                  <div className="absolute inset-0 bg-black/40" />

                  <div
                    ref={textRef}
                    className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 text-white z-10 max-w-2xl"
                  >
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl">
                      {slide.description}
                    </p>
                    <Link
                      to="./Products"
                      className="mt-8 inline-block bg-black hover:bg-gray-800 text-white px-8 py-4 rounded transition w-fit"
                    >
                      View More Products
                    </Link>
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

"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/fire.jpg";
import img2 from "../assets/Sky.png";
import DownloadPriceList from "./Download";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "ONLINE CRACKERS SIVAKASI",
    subtitle:
      "Get your online crackers in sivakasi today and make sure your celebration is truly special!",
    button: "ORDER NOW",
    bg: img1,
  },
  {
    id: 2,
    title: "ONLINE CRACKERS PURCHASE SIVAKASI",
    subtitle:
      "GVD Crackers is the right place to make your Online crackers purchase in sivakasi",
    button: "ORDER NOW",
    bg: img2,
  },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    cssEase: "linear",
  };

  const navigate = useNavigate();

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] xl:h-screen"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={slide.bg}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center text-center text-white h-full">
              <div className="p-4 md:p-8 rounded-xl max-w-2xl mx-2">
                <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 px-2">
                  {slide.subtitle}
                </p>

                {/* Buttons */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-10">
                  <button
                    className="px-6 py-2 sm:px-8 sm:py-3 
                    font-oswald font-bold uppercase 
                    text-white text-sm sm:text-[16px]
                    border-2 border-red-600 hover:bg-red-600
                    bg-transparent 
                    transition-all duration-300 ease-out
                    w-full lg:w-64"
                    onClick={() => navigate("/pages/crackerstable")}
                  >
                    {slide.button}
                  </button>

                  <div className="w-full sm:w-auto">
                    <DownloadPriceList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;

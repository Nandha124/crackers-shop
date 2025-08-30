import React from "react";
import Slider from "react-slick";
import { FaLink } from "react-icons/fa";
import img1 from "../assets/hand.jpg";
import img2 from "../assets/road.png";
import img3 from "../assets/ahop.jpg";

// Sample blog data
const blogs = [
  {
    id: 1,
    img: img1,
    title: "Online Crackers 90% Discount",
    link: "crackersTable",
    desc: "As a customer you may hear about online crackers 80% discount. Yes, it's true at Notout Crackers we sell at factory",
  },
  {
    id: 2,
    img: img3,
    title: "Online Pattasu Kadai",
    link: "home",
    desc: "Online pattasu kadai offers a wide range of fireworks at competitive prices. Buy online from your home hassle-free.",
  },
  {
    id: 3,
    img: img2,
    title: "Online Crackers 2025",
    link: "crackersTable",
    desc: "Check out the latest Online Crackers Price List 2025. Updated frequently so you won’t miss anything.",
  },
];

const BlogSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024, // lg
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // sm
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8 sm:py-12 px-3 sm:px-4 lg:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-2">
        Blog & News
      </h2>
      <p className="text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        Our Latest Blogs
      </p>

      <Slider {...settings}>
        {blogs.map((blog) => (
          <div key={blog.id} className="px-2 sm:px-3">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group">
              {/* Image */}
              <div className="relative">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-40 sm:h-56 lg:h-64 object-cover"
                />
                <a
                  href={blog.link}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-red-600 text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  <FaLink size={18} />
                </a>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 hover:text-red-600">
                  <a href={blog.link}>{blog.title}</a>
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {blog.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLink } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import img1 from "../assets/Hand.jpg";
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
    desc: "Online pattasu kadai offers a wide range  at competitive prices. Buy online from your home hassle-free.",
  },
  {
    id: 3,
    img: img2,
    title: "Online Crackers 2025",
    link: "crackersTable",
    desc: "Check out the latest Online Crackers Price List 2025. Updated frequently so you won't miss anything.",
  },
];

const BlogSlider = () => {
  return (
    <div className="container mx-auto py-8 lg:px-6 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-2">
        Blog & News
      </h2>
      <p className="text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        Our Latest Blogs
      </p>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {blogs.map((blog) => (
         <SwiperSlide key={blog.id}>
  <div className="w-full sm:w-[100%] lg:w-[100%] bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group mx-auto">
    <div className="relative">
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full h-56 object-cover"
      />
      <a
        href={blog.link}
        className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-red-600 text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <FaLink size={18} />
      </a>
    </div>
    <div className="p-4">
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 hover:text-red-600">
        <a href={blog.link}>{blog.title}</a>
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{blog.desc}</p>
    </div>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default BlogSlider;

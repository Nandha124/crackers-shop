import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import img from "../assets/gvdlogo.png";
import { FaPhoneAlt, FaRegCopyright } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

const navItems = [
  { id: 1, name: "Home", link: "/pages/home" },
  { id: 2, name: "Products", link: "/pages/crackerstable" },
  { id: 3, name: "Gallery", link: "/pages/detail" },
  { id: 4, name: "Blogs", link: "/pages/blog" },
  { id: 5, name: "Contact", link: "/pages/contact" },

];

  useEffect(() => {
    const activeItem = navItems.find(item =>
      location.pathname.includes(item.link)
    );
    if (activeItem) {
      setSelectedItem(activeItem.id);
    }
  }, [location.pathname]);

  const handleSelectItem = (item) => {
    setSelectedItem(item.id);
    navigate(item.link);
  };

  return (
    <div className="px-8 md:px-20 lg:px-36 bg-yellow-500 py-8 mt-8">
      <div className="flex flex-col text-center items-center justify-center">
        {/* Logo */}
        <img
          src={img}
          width={200}
          alt="logo"
          className="md:w-[250px] w-[150px] mb-6 cursor-pointer"
          onClick={() => navigate("/pages/home")}
        />

        {/* Navigation Links */}
        <ul className="text-black text-base md:text-xl font-bold flex flex-col md:flex-row md:gap-x-16 gap-y-5 mb-6">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelectItem(item)}
              className={`${
                selectedItem === item.id
                  ? "text-red-700 border-b-2 border-red-700"
                  : "text-black"
              } cursor-pointer hover:text-red-700 transition-colors duration-300 px-4 py-2 rounded`}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Contact icons */}
        <div className="flex justify-center items-center gap-x-6 py-3 mb-4">
          <a
            href="tel:+91 9677804273"
            className="text-gray-700 hover:text-red-700 transition-colors duration-300"
            aria-label="Call us"
          >
            <FaPhoneAlt size={28} />
          </a>
          <a
            href="mailto:nandhasubburaj1278@gmail.com"
            className="text-gray-700 hover:text-red-700 transition-colors duration-300"
            aria-label="Email us"
          >
            <MdEmail size={28} />
          </a>
          <a
            href="https://www.google.com/maps/dir/12.9524775,80.1540219/41.4860495,-74.41297"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-red-700 transition-colors duration-300"
            aria-label="Our location"
          >
            <FaLocationDot size={28} />
          </a>
        </div>

        {/* Copyright */}
        <div className="flex text-base md:text-lg gap-x-2 items-center font-bold py-3 text-gray-700">
          <FaRegCopyright size={20} />
          <span>GVD PyroPark, 2025  created by Nandhu</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

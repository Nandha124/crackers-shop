import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/gvdlogo.png";
import { FaMeta, FaXTwitter, FaBars, FaInstagram } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const navItems = [
  { id: 1, name: "Home", link: "/pages/home" },
  { id: 2, name: "Products", link: "/pages/crackerstable" },
  { id: 3, name: "Gallery", link: "/pages/detail" },
  { id: 4, name: "Blogs", link: "/pages/blog" },
  { id: 5, name: "Contact", link: "/pages/contact" },

];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Better than window.location.href

  // Active link highlighting
  const activeItemId = navItems.find((item) =>
    location.pathname.startsWith(item.link)
  )?.id;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    navigate("/pages/home");
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <div className="sticky top-0 bg-yellow-500 shadow-md z-30 px-8 lg:px-0">
      <div className="w-full flex justify-between md:justify-around items-center py-2 relative">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="md:w-[70px] w-[100px] cursor-pointer"
          onClick={handleLogoClick}
        />

        {/* Desktop Menu */}
        <ul className="gap-x-8 md:items-center md:flex hidden">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`${
                activeItemId === item.id
                  ? "text-red-700 border-b-2 border-red-700"
                  : "text-black"
              } cursor-pointer hover:text-red-700 hover:border-b-2 border-red-700 text-base lg:text-xl font-bold whitespace-nowrap`}
            >
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex gap-x-3">
          <a
            href="https://www.facebook.com/share/15xZVvgLMs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaMeta size={24} />
          </a>
          <a
            href="https://www.instagram.com/nandhu_s_06?igsh=MWlrdzNqcGN1eGt3NQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl rounded-b-xl z-50">
          <ul className="flex flex-col gap-y-3 items-start w-full py-4">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => setIsOpen(false)}
                className={`${
                  activeItemId === item.id
                    ? "text-red-700 bg-gray-100"
                    : "text-black"
                } cursor-pointer text-xl font-bold px-8 w-full py-2`}
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
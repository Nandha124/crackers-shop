// src/components/WhatsAppButton.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WhatsAppButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Option 1: Open WhatsApp chat directly
    window.open("https://wa.me/919677804273?text=Hello, I want to enquire", "_blank");

    // Option 2: Navigate to enquiry page
// 
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      aria-label="WhatsApp Enquiry"
    >
      <FaWhatsapp size={32} />
    </button>
  );
};

export default WhatsAppButton;

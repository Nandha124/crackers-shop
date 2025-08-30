import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Contact Us
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
            <p className="text-gray-600 mb-4">
              We'd love to hear from you. Fill out the form and we'll get back
              soon.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li><strong>📍 Address:</strong> 123 Main Street, City</li>
              <li><strong>📞 Phone:</strong> +91 98765 43210</li>
              <li><strong>✉️ Email:</strong> contact@example.com</li>
            </ul>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-red-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-red-600"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-red-600"
                placeholder="Your Message"
              ></textarea>
            </div>
                         <button className="px-8 py-3 inline-block 
    font-oswald font-bold uppercase 
    text-white text-[16px] 
    border-2 border-red-600 hover:bg-red-600
    
    bg-transparent 
    transition-all duration-300 ease-out
  ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

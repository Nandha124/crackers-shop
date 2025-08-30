import React, { useState } from "react";

const SubscribeBox = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter an email.");
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <div className="p-4 text-center flex flex-col justify-center items-center gap-10" >
      <div className="w-full max-w-lg p-6 ">
        <h2 className="text-2xl md:text-3xl font-bold text-center ">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Get the latest updates right in your inbox
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            type="submit"
            className="
            px-8 py-3 inline-block 
    font-oswald font-bold uppercase 
    text-black text-[16px] 
    border-2 border-red-600 hover:bg-red-600
    hover:text-white
    
    bg-transparent 
    transition-all duration-300 ease-out
  ">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeBox;

import React, { useState } from "react";
import sampleData from "../json/crackers.json";
import SamePage from "../Components/Same2";

export default function CrackersTable() {
  let idCounter = 0;

  const initialProducts = sampleData.flatMap(category =>
    category.products.map(p => {
      idCounter += 1;
      return {
        ...p,
        qty: 0,
        id: `product-${idCounter}`,
        category: category.category
      };
    })
  );

  const [items, setItems] = useState(initialProducts);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleQtyChange = (id, qty) => {
    const newQty = qty === "" ? 0 : Math.max(0, Number(qty));
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };

  // Group by category
  const itemsByCategory = {};
  items.forEach(item => {
    if (!itemsByCategory[item.category]) {
      itemsByCategory[item.category] = [];
    }
    itemsByCategory[item.category].push(item);
  });

  // Grand total calculation
  const grandTotal = items.reduce(
    (sum, item) => sum + item.qty * item.amount,
    0
  );

  // Product count
  const productCount = items.reduce((sum, item) => sum + item.qty, 0);

  // Handle WhatsApp Order
  const handleOrderNow = () => {
    const orderedItems = items.filter(item => item.qty > 0);
    if (orderedItems.length === 0) {
      alert("Please add some products before placing order.");
      return;
    }

    let message = "🧾 *My Crackers Order:*\n\n";
    orderedItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x ${item.qty} = ₹${(
        item.qty * item.amount
      ).toFixed(2)}\n`;
    });
    message += `\n🛒 *Total Items:* ${productCount}`;
    message += `\n💰 *Grand Total:* ₹${grandTotal.toFixed(2)}`;

    const phoneNumber = "919677804273";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  // Toggle category expansion on mobile
  const toggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <div className="min-w-full relative">
      <SamePage />

      {/* Mobile category selector */}
      <div className="lg:hidden mb-4">
        <select 
          className="w-full p-3 border rounded-lg bg-orange-100 font-semibold"
          onChange={(e) => setActiveCategory(e.target.value)}
          value={activeCategory || ""}
        >
          <option value="">Select a category</option>
          {Object.keys(itemsByCategory).map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-x-auto overflow-y-auto border rounded-lg">
        <table className="w-full table-auto border-collapse text-center text-sm sm:text-base">
          <thead className="bg-orange-400 text-white sticky top-0 z-10 hidden lg:table-header-group">
            <tr>
              <th className="p-2 lg:p-3 border w-20 lg:w-28">Image</th>
              <th className="p-2 lg:p-3 border">Product Name</th>
              <th className="p-2 lg:p-3 border w-24 lg:w-32">Actual Price</th>
              <th className="p-2 lg:p-3 border w-24 lg:w-32">Our Price</th>
              <th className="p-2 lg:p-3 border w-20 lg:w-28">Qty</th>
              <th className="p-2 lg:p-3 border w-24 lg:w-32">Total</th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(itemsByCategory).map(([category, categoryItems]) => (
              <React.Fragment key={category}>
                {/* Category header */}
                <tr className={activeCategory && activeCategory !== category ? "hidden" : ""}>
                  <td
                    colSpan="6"
                    className="text-lg sm:text-xl font-semibold bg-yellow-300 p-2 sm:p-3 text-center sticky top-0 z-0 cursor-pointer lg:cursor-auto"
                    onClick={() => toggleCategory(category)}
                  >
                    {category} {window.innerWidth < 1024 && (activeCategory === category ? "▲" : "▼")}
                  </td>
                </tr>

                {categoryItems.map(item => (
                  <tr 
                    key={item.id} 
                    className={`border-b even:bg-gray-50 ${activeCategory && activeCategory !== category ? "hidden" : ""}`}
                  >
                    {/* Image */}
                    <td className="p-2 lg:p-3 border">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 lg:w-12 lg:h-12 object-contain mx-auto cursor-pointer hover:scale-110 transition"
                        onClick={() => setSelectedImage(item.image)}
                      />
                    </td>
                    
                    {/* Product Name */}
                    <td className="p-2 lg:p-3 border text-left font-medium text-gray-800">
                      {item.name}
                    </td>
                    
                    {/* Prices (mobile stacked, desktop split) */}
                    <td className="p-2 lg:p-3 border font-semibold text-green-700 lg:hidden">
                      <div className="flex flex-col items-center">
                        <span className="text-green-700 font-semibold">
                          ₹{Number(item.amount).toFixed(2)}
                        </span>
                        <span className="text-red-500 line-through text-sm">
                          ₹{Number(item.actualPrice || 0).toFixed(2)}
                        </span>
                      </div>
                    </td>

                    {/* Desktop Actual Price */}
                    <td className="p-2 lg:p-3 border line-through text-red-500 hidden lg:table-cell">
                      ₹{Number(item.actualPrice || 0).toFixed(2)}
                    </td>

                    {/* Desktop Our Price */}
                    <td className="p-2 lg:p-3 border font-semibold text-green-700 hidden lg:table-cell">
                      ₹{Number(item.amount).toFixed(2)}
                    </td>
                    
                    {/* Quantity Input */}
                    <td className="p-2 sm:p-3 border">
                      <input
                        type="number"
                        min="0"
                        value={item.qty === 0 ? "" : item.qty}
                        onChange={e => handleQtyChange(item.id, e.target.value)}
                        className="w-16 lg:w-20 border rounded text-center px-1 sm:px-2 py-1 text-sm lg:text-base"
                      />
                    </td>
                    
                    {/* Total */}
                    <td className="p-2 lg:p-3 border font-bold text-green-600">
                      ₹{(item.qty * item.amount).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile product cards */}
      <div className="lg:hidden mt-4">
        {Object.entries(itemsByCategory).map(([category, categoryItems]) => (
          <div 
            key={category} 
            className={`mb-4 ${activeCategory && activeCategory !== category ? "hidden" : ""}`}
          >
            <h3 
              className="text-lg font-semibold bg-yellow-300 p-3 rounded-t-lg flex justify-between items-center"
              onClick={() => toggleCategory(category)}
            >
              {category} <span>{activeCategory === category ? "▲" : "▼"}</span>
            </h3>
            
            <div className={`${activeCategory === category ? "block" : "hidden"}`}>
              {categoryItems.map(item => (
                <div key={item.id} className="border-b p-3 bg-white flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-contain mr-2 cursor-pointer"
                        onClick={() => setSelectedImage(item.image)}
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <div className="flex flex-col mt-1">
                          <span className="text-green-700 font-semibold">
                            ₹{Number(item.amount).toFixed(2)}
                          </span>
                          <span className="text-red-500 line-through text-sm font-medium">
                            ₹{Number(item.actualPrice || 0).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-green-600 font-bold">
                      ₹{(item.qty * item.amount).toFixed(2)}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-600">Quantity:</span>
                    <input
                      type="number"
                      min="0"
                      value={item.qty === 0 ? "" : item.qty}
                      onChange={e => handleQtyChange(item.id, e.target.value)}
                      className="w-16 border rounded text-center px-1 py-1 text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Bottom Grand Total Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t p-3 lg:p-4 flex flex-col lg:flex-row items-center
       justify-around z-20 gap:20">
        <div className="text-lg lg:text-xl font-bold text-gray-800 mb-2 lg:mb-0">
          🛒 {productCount} items | 💰 ₹{grandTotal.toFixed(2)}
        </div>
        <button
          onClick={handleOrderNow}
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg transition w-full 
          lg:w-auto text-center md:text-3xl text-lg"
        >
          📦 Order Now via WhatsApp
        </button>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 bg-red-500 text-white px-3 py-1 rounded-full text-sm hover:bg-red-600"
            >
              ✖ Close
            </button>
            <img
              src={selectedImage}
              alt="Large view"
              className="max-h-[80vh] max-w-full rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}

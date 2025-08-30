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
  const [selectedImage, setSelectedImage] = useState(null); // For image modal

  const handleQtyChange = (id, qty) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: Math.max(0, Number(qty)) } : item
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

    const phoneNumber = "919677804273"; // your WhatsApp number with country code
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-w-full relative">
      <SamePage />

      {/* Scrollable Table */}
      <div className="  overflow-x-auto overflow-y-auto table-fixed max-h-full border rounded">
        <table className="w-full table-auto border-collapse text-center text-sm sm:text-base">
          <thead className="bg-orange-400 text-white sticky top-0 z-10">
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
                <tr>
                  <td
                    colSpan="6"
                    className="text-lg sm:text-xl font-semibold bg-yellow-300 p-2 sm:p-3 text-center sticky top-[40px] z-0"
                  >
                    {category}
                  </td>
                </tr>

                {categoryItems.map(item => (
                  <tr key={item.id} className="border-b even:bg-gray-50">
                    <td className="p-2 lg:p-3 border">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 lg:w-12 lg:h-12 object-contain mx-auto cursor-pointer hover:scale-110 transition"
                        onClick={() => setSelectedImage(item.image)} // click to open modal
                      />
                    </td>
                    <td className="p-2 lg:p-3 border text-left">{item.name}</td>
                    <td className="p-2 lg:p-3 border line-through text-red-500">
                      ₹{Number(item.actualPrice || 0).toFixed(2)}
                    </td>
                    <td className="p-2 lg:p-3 border font-semibold text-green-700">
                      ₹{Number(item.amount).toFixed(2)}
                    </td>
                    <td className="p-2 sm:p-3 border">
                      <input
                        type="number"
                        min="0"
                        value={item.qty}
                        onChange={e => handleQtyChange(item.id, e.target.value)}
                        className="w-16 lg:w-20 border rounded text-center px-1 sm:px-2 py-1"
                      />
                    </td>
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

      {/* Fixed Bottom Grand Total Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t p-3 lg:p-4 flex flex-col lg:flex-row items-center justify-around z-20">
        <div className="text-lg lg:text-xl font-bold text-gray-800">
          🛒 {productCount} items | 💰 ₹{grandTotal.toFixed(2)}
        </div>
        <button
          onClick={handleOrderNow}
          className="mt-2 lg:mt-0 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg transition"
        >
          📦 Order Now via WhatsApp
        </button>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm hover:bg-red-600"
            >
              ✖ Close
            </button>
            <img
              src={selectedImage}
              alt="Large view"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

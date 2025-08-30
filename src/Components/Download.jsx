import React from "react";

const DownloadPriceList = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/gvd-final.pdf"; // keep your PDF inside public folder
    link.download = "Gvd-price-list.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="px-8 py-3 inline-block 
    font-oswald font-bold uppercase 
    text-white text-[16px] 
    border-2 border-red-600 hover:bg-red-600
    
    bg-transparent 
    transition-all duration-300 ease-out 
  ">
    
      Download Price List
    </button>
  );
};

export default DownloadPriceList;

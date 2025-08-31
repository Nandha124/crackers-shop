"use client";
import React from "react";
import Img1 from "../assets/bomb.png"
import Img2 from "../assets/pots.png"
import Img3 from "../assets/star.png"
import Img4 from "../assets/ground.png"
const products = [
  {
    price: "₹85.00",
    image: Img2,
    title: "Flower pots",
    description: "Get online crackers in sivakasi from GVD Crackers",
    link: "CrackersTable",
  },
  {
    price: "₹28.00",
    image: Img3,
    title: "Twinkling stars",
    description: "Get quality online crackers sivakasi from GVD Crackers",
    link: "CrackersTable",
  },
  {
    price: "₹46.00",
    image: Img4,
    title: "Ground chakkars",
    description: "Make online crackers purchase from GVD Crackers",
    link: "CrackersTable",
  },
  {
    price: "₹98.00",
    image: Img1,
    title: "Atombombs",
    description: "Make online crackers purchase sivakasi GVD Crackers",
    link: "CrackersTable",
  },
 
];

export default function LatestProducts() {
  return (
    <div
  className="special-dish-area py-[85px] pb-[70px] bg-cover bg-center bg-[url('/back.jpg')] bg-black text-white"
>
      <div className="min-w-full  flex flex-col lg:flex lg:flex-col justify-center items-center gap-10">
        <h1 className="text-red-600 font-bold text-xl md:text-4xl text-center">LATEST PRODUCTS</h1>
        <div className="row">
          <div className="product-carousel md:flex overflow-x-auto">
            {products.map((item, idx) => (
              <div key={idx} className="special-dish-box min-w-[250px] border rounded-lg shadow-md p-4 relative">
                <span className="bg-red-400 px-1 rounded-xl absolute left-56">{item.price}</span>
                <a href={item.link}>
                  <img
                    className="img-responsive w-full h-40 object-contain"
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                  />
                </a>
                <div className="flex flex-col justify-center items-center gap-10" >
                   <h3 className="title-small title-bar-small-center mt-2 text-center">
                  <a href={item.link}>{item.title}</a>
                </h3>
                <p dangerouslySetInnerHTML={{ __html: item.description.replace(/\n/g, "<br/>") }} className="text-center" />
                <a href={item.link} className="ghost-semi-color-btn text-center     inline-block 
    font-oswald font-bold uppercase 
    text-white text-[16px] 
    border-2 border-red-600 hover:bg-red-600
    px-11 py-2.5 
    bg-transparent 
    transition-all duration-300 ease-out
  ">
                  Details
                </a>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

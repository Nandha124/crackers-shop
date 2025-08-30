import React from "react";
import { useNavigate } from "react-router-dom";
import SamePage from "../Components/Same4";

const galleryData = {
  "Sky Shots": [
    "https://5.imimg.com/data5/SELLER/Default/2024/1/375493918/SQ/GT/XP/3209555/60-multi-shots.jpeg",
    "https://i.pinimg.com/originals/b6/ba/3c/b6ba3c5de27e5374d6e2d5585562cbe3.gif",
    "https://bijili.s3.ap-south-1.amazonaws.com/product/quick-order/bij_136q.jpg",
    "https://bijili.s3.ap-south-1.amazonaws.com/product/quick-order/bij_133q.jpg"
  ],
  Blasts: [
    "https://5.imimg.com/data5/SELLER/Default/2022/11/ZT/BU/YA/8175186/deluxe-lakshmi-crackers.png",
    "https://media.tenor.com/DmBoVyKUbMkAAAAM/chinesenewyear-firecrackers.gif",
    "https://bijili.s3.ap-south-1.amazonaws.com/product/quick-order/bij_023q.jpg",
    "https://www.shutterstock.com/image-photo/diwali-fire-bomb-cracker-on-600nw-1483388597.jpg"
  ],
  Rockets: [
    "https://bijili.s3.ap-south-1.amazonaws.com/product/quick-order/bij_092q.jpg",
    "https://media.tenor.com/BpJ_l2WKyw4AAAAM/fireworks-firework.gif",
    "https://www.bbassets.com/media/uploads/p/l/40116891_1-standard-crackers-rockets-bomb-rockets.jpg",
    "https://nithishfireworks.com/images/rocket.jpg"
  ],
  Fountains: [
    "https://bijili.s3.ap-south-1.amazonaws.com/product/bij_101.jpg",
    "https://iruna-online.com/images/item/pitem55081.gif",
    "https://5.imimg.com/data5/SELLER/Default/2022/2/TS/WF/FL/41102168/catalogue-full-2021-28-.jpg",
    "https://bijili.s3.ap-south-1.amazonaws.com/product/bij_117.jpg"
  ],
  Chakkars: [
    "https://fantasycrackers.com/wp-content/uploads/2024/08/Ground-Chakkar-Deluxe-Sun-Shine.jpg",
    "https://bijili.s3.ap-south-1.amazonaws.com/product/bij_062b.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPur2u3E1J0aqGYvqwWw85E9Pw_Eqvds52Hg&s",
    "https://www.sivakasifireworks.net/wp-content/uploads/2017/01/chakkarams.jpg"
  ],
  Sparkles: [
    "https://www.sivakasifireworks.net/wp-content/uploads/2017/01/sparklers.png",
    "https://i.pinimg.com/originals/95/ab/9d/95ab9dbf5ede241d42ce5063d8f6f045.gif",
    "https://bijili.s3.ap-south-1.amazonaws.com/product/bij_020.jpg",
    "https://bijili.s3.ap-south-1.amazonaws.com/product/quick-order/bij_005q.jpg"
  ]
};

export default function Detail() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 ">
      <SamePage/>
      <h1 className="md:text-4xl text-xl font-bold text-center mb- p-6">Crackers Gallery</h1>

      {Object.entries(galleryData).map(([category, images]) => (
        <div key={category} className="mb-12 text-center">
          <h2 className="md:text-2xl text-xl font-semibold mb-4 text-gray-800">
            {category}
          </h2>

          <button
            className="px-8 py-3 mb-6 inline-block 
              font-bold uppercase 
              text-black text-[16px] 
              border border-red-600 
              hover:bg-red-600 hover:text-white
              bg-transparent 
              transition-all duration-300 ease-out
            "
              onClick={() => navigate("/pages/crackerstable")}
          >
            Order Now
          </button>

          <div
            className="
              grid gap-4 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4
            "
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl shadow-md hover:scale-105 transform transition duration-300"
              >
                <img
                  src={src}
                  alt={`${category} ${idx + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

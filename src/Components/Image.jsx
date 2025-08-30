import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/banner.gif"
const SamePage = () => {
  return (
    <div className="container   ">
      {/* Breadcrumbs */}
      

      {/* Image */}
      <div className="relative">
        <img
          src={img1}
          alt="Sample"
          className=" w-full lg:h-[750px] bg-black bg-opacity-40"
        />
            <div className="absolute top-28 lg:top-[250px]  left-32 md:left-[100px] lg:left-[200px] mt-6">
        <h1 className="md:text-3xl text-xl font-bold text-white mb-3">
          Welcome to GVD Crackers
        </h1>
       
        <nav className="text-sm mb-6">
        <ol className="list-reset flex text-white text-xl">
          <li>
            <Link to="/pages/home" className="text-orange-600">
              Home-
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-white font-medium">Blog</li>
        </ol>
      </nav>
      </div>
        
      </div>

      {/* Content */}
  
    </div>
  );
};

export default SamePage;

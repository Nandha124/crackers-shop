import React from 'react'
import img1 from "../assets/testimonial.gif"
const HeroComp = () => {
  return (
       <div className="lg:flex-row flex flex-col justify-evenly lg:items-center gap-10 py-10 px-10">
        <div className="lg:w-1/2 w-full ">
          <img src={img1} alt="one" className="rounded-xl w-full h-full" />
        </div>
        <div className="flex flex-col lg:w-1/2 w-full gap-y-5">
          <h1 className="text-red-600 font-bold text-lg md:text-3xl">GVD Crackers</h1>
          <h3 className="text-black font-medium md:text-lg text-justify whitespace-break-spaces">
Online crackers purchase in sivakasi is becoming popular now a days.
    An easy access to buy
 crackers without going out and search is one of the main reasons why people prefer online crackers purchase.
 
</h3>
        </div>
      </div>
  )
}


export default HeroComp
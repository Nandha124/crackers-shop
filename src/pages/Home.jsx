import React from 'react'

import HeroSlider from '../Components/HomeSlider'
import HeroComp from '../Components/HeroComp'
import LatestProducts from '../Components/LatestProducts'

import BlogSlider from '../Components/Card'
import DownloadPriceList from '../Components/Download'
import BackgroundGif from '../Components/Fixedbackrround'
import SubscribeBox from '../Components/Subscribe'

const Home = () => {
  return (
    <div className='overflow-x-hidden '>
        <HeroSlider/>
        <HeroComp/>
        <LatestProducts/>
        {/* <CounterComponent/> */}
        <BlogSlider/>
        <BackgroundGif/>
       <SubscribeBox/>
    </div>
  )
}

export default Home
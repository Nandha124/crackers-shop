import React from 'react'
import CounterComponent from '../Components/CounterData'
import BlogSlider from '../Components/Card'
import SamePage from '../Components/Image'
import HeroComp from '../Components/HeroComp'
import HeroComps from '../Components/Herocamp2'

const Blog = () => {
  return (
    <div>
      <SamePage/>
      <HeroComps/>
      <CounterComponent/>
      <HeroComp/>
    </div>
  )
}

export default Blog
import React from 'react'
import './CSS/Main.css'
import Hero from '../Components/Hero/Hero'
import TopTrends from '../Components/TopTrends/TopTrends'
import TopBrands from '../Components/TopBrands/TopBrands'


function Main() {
  return (
    <div className='main'>
        <Hero />
        <TopTrends />
        <TopBrands />
        <TopTrends />
    </div>
  )
}

export default Main
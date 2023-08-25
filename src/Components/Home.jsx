import React from 'react'
import Navbar from './Navbar'
import PopularSlider from './PopularSlider'
import TrendingSlider from './TrendingSlider'

const Home = ({popular,trending}) => {
  return (
 <>
 <div className="main">
 <Navbar />
 <PopularSlider popular={popular} />

 <div style={{
   
   marginTop:'4.5rem',
 
 }} >

 <TrendingSlider trending ={trending} />
 </div>

 </div>
 </>
  )
}

export default Home
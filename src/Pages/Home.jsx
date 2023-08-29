import React from 'react'
import About from '../Components/About'
import Features from '../Components/Features'
import OurTeam from '../Components/OurTeam'
import AboutUs from '../Components/AboutUs'
import Search from '../Components/Search'

const Home = () => {
  return (
    <div>
      <Search/>
      <AboutUs/>
      <About/>
      <Features/>
      <OurTeam/>
      
    </div>
  )
}

export default Home
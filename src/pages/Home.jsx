import React from 'react'
import Hero from '../component/element/Hero'
import Items from '../component/element/Items'
import Company from '../component/element/Company'
import Dishes from '../component/element/Dishes'

const Home = () => {
  return (
   <React.Fragment>
    <Hero/>
    <Items/>
    <Company/>
    <Dishes/>
   </React.Fragment>
  )
}

export default Home

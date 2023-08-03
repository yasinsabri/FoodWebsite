import React from 'react'
import Hero from '../component/element/Hero'
import Items from '../component/element/Items'
import Company from '../component/element/Company'
import Dishes from '../component/element/Dishes'
import SpecialCombo from '../component/element/SpecialCombo'
import AppSection from '../component/element/AppSection'
import Staff from '../component/element/Staff'

const Home = () => {
  return (
   <React.Fragment>
    <Hero/>
    <Items/>
    <Company/>
    <Dishes/>
    <SpecialCombo/>
    <AppSection/>
    <Staff/>
   </React.Fragment>
  )
}

export default Home

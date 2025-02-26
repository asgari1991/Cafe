import React from 'react'

import Slider from './components/templates/Index/Slider'
import About from './components/templates/Index/About'
import Services from './components/templates/Index/Services'
import Offer from './components/templates/Index/Offer'
import Menu from './components/templates/Index/Menu'

const Home = ({data}) => {
  return (
    <>
    <Slider/>
    <About/>
    <Services services={data.services}/>
    <Offer/>
    <Menu menu={data.menu}/>
    </>
  )
}
export async function getStaticProps() {
  const servicesRes=await fetch("http://localhost:4000/services")
  const servicesData=await servicesRes.json()
  const menuRes=await fetch("http://localhost:4000/menu")
  const menuData=await menuRes.json()
  return {
    props:{
      data:{
        services:servicesData,
        menu:menuData
      }
    },
    revalidate:60*60*12
  
  }
}
export default Home
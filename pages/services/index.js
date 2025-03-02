import React from 'react'
import PageHeader from '../components/modules/PageHeader/PageHeader'
import ServicesDetails from '../components/templates/Services/ServicesDetails'

const Services = ({services}) => {
  return (
   <>
   <PageHeader route={"services"}/>
   <ServicesDetails services={services}/>
   </>
  )
}
export async function getStaticProps(context) {
  const res=await fetch("http://localhost:4000/services")
  const data=await res.json()
  return{
    props:{
      services:data
    }
  }
}

export default Services
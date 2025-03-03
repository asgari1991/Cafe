import React from 'react'
import PageHeader from '../components/modules/PageHeader/PageHeader'
import Comments from '../components/templates/Testimonial/Comments'

const Testimonial = ({comment}) => {
 
  
  return (
   <>
   <PageHeader route={"Testimonial"}/>
<Comments comment={comment}/>
   </>
  )
}
export async function getStaticProps(context) {
  const res=await fetch("http://localhost:4000/comment")
  const data=await res.json()
  return{
    props:{
      comment:data
    },
    revalidate:60*60*12 //second
  }
}
export default Testimonial
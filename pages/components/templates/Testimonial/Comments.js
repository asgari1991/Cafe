
import React from 'react'
import Testimonial from '../../modules/Testimonial/Testimonial'
const Comments = ({comment}) => {
  return (
    <div className="container-fluid py-5">
    <div className="container">
        <div className="section-title">
            <h4 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Testimonial</h4>
            <h1 className="display-4">Our Clients Say</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          {comment.slice(0,4).map(cm=>(
            <Testimonial comment={cm} key={cm.id}/>
          ))}
           
        </div>
    </div>
</div>
  )
}

export default Comments
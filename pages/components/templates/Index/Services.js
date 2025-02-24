import React from 'react'
import ServiceItem from '../../modules/ServiceItem/ServiceItem'

const Services = () => {
  return (
    <div className="container-fluid pt-5">
    <div className="container">
        <div className="section-title">
            <h4 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Our Services</h4>
            <h1 className="display-4">Fresh & Organic Beans</h1>
        </div>
        <div className="row">
          <ServiceItem img={"/Images/service-1.jpg"} title={"Fastest Door Delivery"} desc={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"} icon={'faTruck'}/>
          <ServiceItem img={"/Images/service-2.jpg"} title={"Fresh Coffee Beans"} desc={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"} icon={'faCoffee'}/>
          <ServiceItem img={"/Images/service-3.jpg"} title={"Best Quality Coffee"} desc={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"} icon={'faAward'}/>
          <ServiceItem img={"/Images/service-4.jpg"} title={"Online Table Booking"} desc={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"} icon={'faTable'}/>
          
        </div>
    </div>
</div>
  )
}

export default Services
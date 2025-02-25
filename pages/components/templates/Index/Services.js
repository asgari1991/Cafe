import React from "react";
import ServiceItem from "../../modules/ServiceItem/ServiceItem";

const Services = ({ services }) => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh & Organic Beans</h1>
        </div>
        <div className="row">
          {services.map((service) => (
            <ServiceItem
              img={service.img}
              title={service.title}
              desc={service.desc}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

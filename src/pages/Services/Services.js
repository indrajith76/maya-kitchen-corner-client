import React from "react";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "../../components/ServicesCard/ServicesCard";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="container mx-auto ">
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 px-10 lg:p-0">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import servicesData from "../app/services.mjs"; // Adjust the path to your JSON file
import { ServiceCard } from "./ServiceCard";

const Services: React.FC = () => {
  return (
    <>
    <h1 className=" text-9text-center font-bold tracking-tighter bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent z-50 text-4xl md:text-6xl lg:text-9xl text-center" >Services We Provide</h1>
    <div className="grid grid-cols-3 gap-x-6 ">
      {servicesData.map((service) => (
        <ServiceCard
        key={service.id}
        id={service.id}
        title={service.title}
        description={service.description}
        // image={service.image}
        />
        ))}
    </div>
        </>
  );
};

export default Services;

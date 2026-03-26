// Services.jsx
import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";
import './Services.css'
const Services = () => {
  return (
    <>
    <div id="services" class="flex justify-center items-center m-5">
      <div class="border-3 border-sky-800 rounded-4xl  text-4xl w-60 text-center bg-sky-800 text-white">My Skills</div>
    </div>

    <div className="m-5 ">
      <p className="p-2 text-lg">I help <span className="text-sky-600 text-bold text-xl">businesses and individuals</span> transform  their ideas into scalable, high-performance  digital solutions. From building modern web  applications to developing intelligent  AI-driven systems, my focus is always on  delivering real-world impact and measurable  results.</p>
    </div>

    <section className=" ">
      <div className="max-w-6xl mx-auto px-6 ">
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>

    </section>

   <div className="bg-gray-100 shadow-lg rounded-xl m-20 p-6 border border-black hover:shadow-2xl transition duration-300 hover:-translate-y-2">

      {/* Icon */}
      
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800">
        Core Computer Science Subjects
      </h3>

      {/* Description */}
      <p className="text-gray-800 mt-2 text-sm">
        Strong foundation in core computer science subjects with the ability to solve numerical problems efficiently and explain complex topics in a simple, beginner-friendly manner.
      </p>

      

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-3">
        <ul> 
          <li className="inline-block p-1 bg-gray-300 m-1 rounded-lg hover:shadow-md/40 hover:bg-white"><a href="/">Data Structres</a></li>
          <li className="inline-block p-1 bg-gray-300 m-1 rounded-lg hover:shadow-md/40 hover:bg-white"><a href="/">Algorithms</a></li>
          <li className="inline-block p-1 bg-gray-300 m-1 rounded-lg hover:shadow-md/40 hover:bg-white"><a href="/">Operating Systems</a></li>
          <li className="inline-block p-1 bg-gray-300 m-1 rounded-lg hover:shadow-md/40 hover:bg-white"><a href="/">Database Management Systems</a></li>
          <li className="inline-block p-1 bg-gray-300 m-1 rounded-lg hover:shadow-md/40 hover:bg-white"><a href="/">Computer Organization & Architecture</a></li>
          <li className="inline-block p-1 bg-gray-300 m-1 rounded-lg hover:shadow-md/40 hover:bg-white"><a href="/">Theory of Computation</a></li>
          <li className="inline-block p-1 bg-gray-300 m-1 rounded-lg hover:shadow-md/40 hover:bg-white"><a href="/">Computer Networks</a></li>
        </ul>
        
          
        
      </div>

      {/* Link */}
       
      
    </div>

    <div className="text-center mt-12 pb-20">
      <p className="m-10 text-xl bg-gray-200 p-2 rounded-xl shadow-xl/40">I believe in writing clean, optimized, and maintainable code, and I prioritize performance, scalability, and user experience in everything I build.</p>
        <p className="text-sky-500 text-lg mb-4">
          Let's build amazing applications together 
        </p>
        <button  className="hireMe text-white px-6 py-3 rounded-full hover:shadow-md/40  transition">
          <a href="#contact" >Hire Me</a>
        </button>
    </div>  

    </>
  );
};

export default Services;
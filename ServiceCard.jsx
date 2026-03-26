// ServiceCard.jsx
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-sky-400 hover:shadow-2xl transition duration-300 hover:-translate-y-2">

      {/* Icon */}
      <div className="text-4xl mb-3">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mt-2 text-sm">
        {service.description}
      </p>

      {/* Project Count */}
      <div className="mt-3 text-sm font-semibold text-sky-600">
        {service.projects}+ Projects Completed
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-3">
        {service.tech.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-gray-200 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link */}
       
      
    </div>
  );
};

export default ServiceCard;
import React from "react";
import "./Experience.css"
const ExperienceCard = ({ exp }) => {
  return (
    <div className="border-2 border-sky-600 bg-gray-100 shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300">

      <h3 className="text-xl font-semibold">
        {exp.role}
      </h3>

      <p className="text-gray-500">
        {exp.company} • {exp.duration}
      </p>

      <p className="text-gray-800 mt-3">
        {exp.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {exp.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-white text-gray-900 text-xs px-3 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
};

export default ExperienceCard;
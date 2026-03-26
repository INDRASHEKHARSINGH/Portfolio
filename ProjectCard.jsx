import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-400/30 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-sm bg-sky-700 text-white rounded hover:bg-sky-600"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-sm border border-sky-700 rounded  "
          >
            {project.case}
          </a>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;
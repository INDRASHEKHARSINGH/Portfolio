import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../components/projectsData";

const Projects = () => {
  return (
    <>
    <section id="projects" className="min-h-screen py-5 pb-20 bg-linear-to-br from-white via-blue-50 to-purple-100">
      <div class="flex justify-center items-center m-5">
        <div class="border-3 border-sky-800 rounded-4xl  text-4xl w-60 text-center bg-sky-800 text-white">Projects</div>   
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div>
          <p className="p-5 text-lg indent-8">My projects reflect my ability to solve real-world problems using modern technologies. Each project is built with a strong focus on performance, scalability, and user experience, demonstrating my practical knowledge in full-stack development, AI/ML, and data analytics.</p> 
          <p className="p-5 text-lg">From designing responsive user interfaces to developing efficient backend systems and intelligent solutions, I ensure that every project is well-structured, optimized, and impactful.</p>
        </div>

        <p className="m-10 text-center bg-white rounded-xl shadow-xl/30">Explore my work to see how I turn ideas into functional and meaningful solutions</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
        
      </div>
      
    </section>
     
    </>
  );
};

export default Projects;
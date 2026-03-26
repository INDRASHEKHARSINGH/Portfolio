import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import experienceData from "../components/experienceData";

const Experience = () => {
  return (
    <>
    <div class="flex justify-center items-center mt-5">
      <div class="border-3 border-sky-800 rounded-4xl  text-4xl w-60 text-center bg-sky-800 text-white">Experiences</div>    
    </div>  
    <section id="experience" className="py-10 ">
      <div className="m-5 text-xl">
        <p className="p-5">My experience reflects a strong foundation in building practical, real-world solutions and continuously improving my skills in software development and AI technologies. As a developer, I focus on writing clean, efficient, and scalable code while solving complex problems with a structured and logical approach.</p>
        <p className="p-5">Through academic projects, self-driven learning, and hands-on development, I have gained experience in full-stack development, data analytics, and machine learning. I enjoy working on challenging problems that push me to learn new technologies and improve my problem-solving abilities.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">

          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
            />
          ))}

        </div>
      </div>

      <div class="flex justify-center items-center mt-5">
        <div class="border-3 border-sky-600 rounded-4xl  text-lg  text-center p-2 bg-gray-200 ">I enjoy exploring new technologies, experimenting with ideas, and transforming what I learn into functional projects and meaningful software solutions.</div>    
      </div>

    </section>
    </>
  );
};

export default Experience;
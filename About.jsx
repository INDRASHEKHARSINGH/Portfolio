import React from "react";
import './about.css'
import { FaGraduationCap, FaCode, FaRocket, FaStar,  } from "react-icons/fa";
const About = () => {
  return (
    <>
    <section id="about" className=" bg-linear-to-br from-white via-blue-50 to-purple-100 py-5 px-6 pb-20">

      <div class="flex justify-center items-center mb-10">
        <div class="border-3 border-sky-800 rounded-4xl  text-4xl w-60 text-center bg-sky-800 text-white">About Me</div>
      </div> 

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Profile */}
        <div className="flex flex-col items-center text-center md:text-left">
          <img
            src="/myAnimatedImage2.png"
            alt="profile"
            className="w-60 rounded-full object-fill shadow-xl border-4 border-white"/>

          <h2 className="text-3xl font-bold text-gray-800 mt-6">
            Indra Shekhar Singh
          </h2>

          <p className="text-gray-600 mt-2">
            Python Full Stack Developer
          </p>

          <p className="mt-4 text-gray-600 max-w-md">
            Passionate about building scalable web applications, AI/ML systems,
            and solving real-world problems using technology.
          </p>
        </div>

        {/* Right - Details */}
        <div className="space-y-6">
          {/* Education */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 inline-block"><FaGraduationCap className="hover:text-black inline-block -mt-1"/> Education</h3>
            <p className="text-gray-600">
              B.Tech in Information Technology <br />
              Institute of Engineering & Technology (IET), Ayodhya <br />
              Graduation: 2021 - 2025
            </p>
          </div>

          {/* Skills */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 "><FaCode className="hover:text-black inline-block -mt-1"/> Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript", "React", "Python", "Django", "RestAPI",
                "Java", "C++", "SQL", "PostgreSQL", "MongoDB",
                "Machine Learning", "Data Structures"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-sky-600 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2"><FaRocket className="hover:text-black inline-block -mt-1"/> Interests</h3>
            <p className="text-gray-600">
              AI/ML Development, Full Stack Development, System Design,
              Competitive Programming, and Data Analytics.
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2"><FaStar className="hover:text-black inline-block -mt-1 "/> Highlights</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Strong foundation in Data Structures & Algorithms</li>
              <li>Experience with React + Django full-stack projects</li>
              <li>Learning AI/ML and building intelligent systems</li>
              <li>Focused on high-paying tech career paths</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="stats-container">

      <div className="stat-card">
        <h2>1+</h2>
        <p>Experiences</p>
      </div>

      <div className="stat-card">
        <h2>3+</h2>
        <p>Projects</p>
      </div>

      <div className="stat-card">
        <h2>15+</h2>
        <p>Technologies</p>
      </div>

    </div>
  </section>  

    
    </>
  );
};

export default About;
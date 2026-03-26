import React from "react";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import './Hero.css'
const roles = [
    "Python Full Stack Developer",
    "AI/ML Engineer",
    "Data Analyst",
    "DevOps Engineer"
  ];

const Hero = () => {

    const [displayText, setDisplayText] = useState(" ");
      const [index, setIndex] = useState(0);
      const [roleIndex, setRoleIndex] = useState(0);
      const [isDeleting, setIsDeleting] = useState(false);
      
        useEffect(() => {
          const currentRole = roles[roleIndex];
          let speed = isDeleting ? 80 : 120;
      
          const timer = setTimeout(() => {
      
            if (!isDeleting) {
              setDisplayText(currentRole.substring(0, index + 1));
              setIndex(index + 1);
      
              if (index === currentRole.length) {
                setTimeout(() => setIsDeleting(true), 1000);
              }
      
            } else {
              setDisplayText(currentRole.substring(0, index - 1));
              setIndex(index - 1);
      
              if (index === 0) {
                setIsDeleting(false);
                setRoleIndex((roleIndex + 1) % roles.length);
              }
            }
      
          }, speed);
      
          return () => clearTimeout(timer);
      
        }, [index, isDeleting, roleIndex]);

  return (
    <>
    <section id="home" className=" bg-linear-to-br from-white via-blue-50 to-purple-100 min-h-screen mt-16 md:mt-10 flex items-center justify-center ">

      <div className="max-w-6xl mx-auto px-6  grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>

          <h3 className="text-xl text-gray-800 mb-2">
            Hi,
          </h3>

          <h1 className="name text-4xl md:text-5xl font-bold ">
            I'm Indra Shekhar Singh
          </h1>

          <h2 className="job text-2xl  mt-3 text-extrabold">
             {displayText}|
          </h2>

          <p className="text-xl mt-4">
            I develope modern web applications and AI software application
            using React, Python, Django and Machine Learning & Artificial Intelligence.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">

            <button className="hero_button text-white px-6 py-2 rounded-lg hover:shadow-lg/50">
              <a href="#">View Projects</a>
            </button>

            <button className="hero_button text-white px-6 py-2 rounded-lg hover:shadow-lg/50 ">
              <a href="/INDRASHEKHAR-Resume-5.pdf" target="_blank" >Get Resume</a>
            </button>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl mt-6 text-black hero_button rounded-xl justify-around">

            <a href="https://github.com/INDRASHEKHARSINGH">
              <FaGithub className="hover:text-black m-2 text-white"/>
            </a>

            <a href="https://www.linkedin.com/in/indrashekharsingh/">
              <FaLinkedin className="hover:text-black m-2 text-white"/>
            </a>

            <a href="mailto:indrashekhar396@gmail.com" >
              <FaEnvelope className="hover:text-black m-2 text-white"/>
            </a>

            <a href="https://wa.me/917905172525?text=Hello%20Indra,%20I%20visited%20your%20portfolio" >
              <FaWhatsapp className="hover:text-black m-2 text-white"/>
            </a>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center ">
          <span class="relative h-90 top-25 inset-0 rounded-lg border-3 border-black/50 animate-bounce"></span>
          <div className="">
          <img
            src="/myAnimatedImage2.png"
            alt="profile"
            className="aspect w-90 h-120 rounded-2xl shadow-lg/60 border-2 border-gray-300"
          /></div>
          <span class="relative h-90 top-25 inset-0 rounded-lg border-3 border-black/50 animate-bounce"></span>

        </div>

      </div>

    </section>
   </>
  );
};

export default Hero;
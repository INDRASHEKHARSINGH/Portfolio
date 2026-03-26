import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";
import HireProjectForm from "./HiredProjectForm";

const ContactSection = () => {

  const [formType, setFormType] = useState("contact");

  return (
    <>
    <div className="form-container  bg-linear-to-br from-white via-blue-50 to-purple-100 pb-10">

      <div class="flex justify-center items-center py-5">
          <div class="border-3 border-sky-800 rounded-4xl  text-4xl w-60 text-center bg-sky-800 text-white">Get In Touch
          </div>
      </div>
      
         {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-gray-600 mt-4 p-5">
          Have a project idea or want to collaborate? Feel free to reach out — 
          I'd love to hear from you!
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-2">

        {/* Contact Info */}
        <div className="space-y-6 p-2">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <span className="text-gray-700">your.email@example.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-blue-500 text-2xl" />
            <span className="text-gray-700">+91 7905172525</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            <span className="text-gray-700">Ayodhya, India</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6 text-2xl">
            <a href="#" className="text-gray-700 hover:text-black">
              <FaGithub />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              <FaLinkedin />
            </a>
          </div>

        </div> 
        
        
        
      </div>
     

      

        {/* Contact Info */}
      
     <div className="p-6 rounded-xl shadow-md space-y-4">
      <div className="buttons flex justify-center gap-8   ">
         
        
        <button onClick={() => setFormType("contact")} className="cursor-pointer shadow-lg/30  border-2 border-white text-white p-1 float-left  rounded-2xl bg-sky-500 hover:bg-sky-800">
          Contact Me
        </button>

        <button onClick={() => setFormType("hire")} className="cursor-pointer shadow-lg/30 border-2 border-white text-white p-1 float-right  rounded-2xl bg-sky-500 hover:bg-sky-800">
          Hire Me
        </button>
       
      </div>

      {formType === "contact" && <ContactForm />}
      {formType === "hire" && <HireProjectForm />}
      </div>
    </div>
    
   
    </>
  );
};

export default ContactSection
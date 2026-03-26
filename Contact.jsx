import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import emailjs from "emailjs-com"
import Swal from "sweetalert2";

function showAlert() {
  Swal.fire({
    title: "Message Sent!",
    html: "<b>Thank you!</b><br/>We will contact you soon.",
    icon: "success",
    iconColor: "#00b6ff",
    background: "#eff1f8",
    timer: 4000,
    timerProgressBar: true,
    confirmButtonText: "OK",
    confirmButtonColor: "#00b6ff",
  });
}
const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    
    e.preventDefault();

    const serviceId = "service_769mc1r";
    const templateId = "template_xw94jhf";
    const publicKey = "q36olgD1WGYhIlBqv";

    const templateParams = {
      name: name,
      phone: phone,
      email: mail,
      address: address,
      message: message,

    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
       .then((response) => {
        ( response);
        setName('');
        setPhone('');
        setMail('');
        setAddress('');
        setMessage('');
       })
       .catch((error) => {
        alert("not", error);
       })
  }    
  const isFormvalid = name && phone && mail && address && message;

  return (
    <section id="contact" className="min-h-screen bg-linear-to-br from-white via-blue-50 to-purple-100 py-10 px-6">
      {/* Heading */}
      <div class="flex justify-center items-center ">
        <div class="border-3 border-sky-800 rounded-4xl  text-4xl w-60 text-center bg-sky-800 text-white">Get In Touch</div>
      </div>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-gray-600 mt-4 text-lg">
          Have a project idea or want to collaborate? Feel free to reach out — 
          I'd love to hear from you!
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <a href="mailto:indrashekhar396@gmail.com">
              <FaEnvelope className="text-sky-700 text-2xl inline-block" />
              <span className="text-gray-700 inline-block p-2 pl-5">indrashekhar396@gmail.com</span>
            </a>  
            
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+917905172525">
            <FaPhone className="text-sky-700 text-2xl inline-block" />
            <span className="text-gray-700 inline-block p-2 pl-5">+91 7905172525</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.google.com/maps?q=26.75,82.15" target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt className="text-sky-700 text-2xl inline-block" />
            <span className="text-gray-700 inline-block p-2 pl-5">Uttar Pradesh, India</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-15 text-4xl">
            <a href="https://github.com/INDRASHEKHARSINGH" className=" text-sky-800 hover:text-sky-600">
              <FaGithub />
            </a>
         
            <a href="https://www.linkedin.com/in/indrashekharsingh/" className="text-sky-800  rounded-full hover:text-sky-600">
              <FaLinkedin />
            </a>
            
            <a href="https://www.youtube.com/@InnovativeSoftwareStudio" className="text-sky-800  hover:text-sky-600">
              <FaYoutube />
            </a>

            <a href="#" className="text-sky-800  hover:text-sky-600">
              <FaInstagram />
            </a>
            <a href="#" className="text-sky-800  hover:text-sky-600">
              <FaFacebook />
            </a>
          </div>

        </div>

        {/* Contact Form */}
        <form  onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 "
            required
          />

          <input
            type="email"
            placeholder="Email ID"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />

          <input
            type="text"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          ></textarea>

          <button
            disabled={!isFormvalid}
            onClick={showAlert}
            type="submit"
            className="w-full bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-600 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact
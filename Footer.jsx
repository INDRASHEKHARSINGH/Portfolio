import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaInstagram,  FaFacebook, FaHeart } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return(
        <>
         <footer className="footer-bg rounded-t-3xl  -mt-5 p-10">
          <div class="   px-6 ">
            <div className=" ">
              <h3 class="text-white font-semibold mb-3 text-3xl">INDRA SHEKHAR SINGH</h3>
              <p className="text-lg">Full Stack Developer | DevOps Engineer | Data Analyst | AI/ML Engineer </p>
            </div>

            <ul className="flex justify-center gap-10 text-lg pt-10 mt-3 mb-5">
              <li className="inline-block  "><a href="#about">About</a></li>
              <li className="inline-block  "><a href="#">Blog</a></li>
              <li className="inline-block  "><a href="#">CS Course</a></li>
              <li className="inline-block  "><a href="#">Game</a></li>
              <li className="inline-block  "><a href="#contact">Contact</a></li>
              <li className="inline-block  "><a href="#">Policy</a></li>
            </ul>   
          </div>
          
          <div class="border-t border-gray-700 mt-8 py-4 text-center text-sm  text-white">
            <div class="flex justify-center gap-6 mt-3  mb-5">
              <a href="https://github.com/INDRASHEKHARSINGH" class="hover:text-sky-400"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/indrashekharsingh/" class="hover:text-sky-400"> <FaLinkedin /></a>
              <a href="https://www.youtube.com/@InnovativeSoftwareStudio" class="hover:text-sky-400"><FaYoutube /></a>
              <a href="#home" class="hover:text-sky-400"><FaTwitter /></a>
              <a href="#" class="hover:text-sky-400"><FaInstagram /></a>
              <a href="#" class="hover:text-sky-400"><FaFacebook /></a>
            </div>
            <p>&copy; 2026 Indra Shekhar Singh. All rights reserved.</p>
            <p>Built with  <FaHeart className="inline text-red-500" /> for creating impactful digital experiences.</p>
          </div>
          
         </footer>   
        </>
    )
}

export default Footer;
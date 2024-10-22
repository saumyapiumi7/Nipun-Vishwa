import { FaHome, FaBriefcase, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import NipunProfile from '../assets/Nipun.jpeg';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-navyBlue to-blue-900 text-white py-6 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center px-6">
        {/* Logo and Accountant Name */}
        <div className="flex items-center space-x-4">
          {/* Profile Image */}
          <img
            src={NipunProfile}
            alt="Nipun Vishwa Profile"
            className="w-16 h-16 rounded-full border-2 border-cyan-500 shadow-xl"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-300 drop-shadow-lg">
            Nipun Vishwa
          </h1>
        </div>

        {/* Menu Button for All Screens */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-cyan-300 focus:outline-none text-3xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 uppercase font-semibold text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex`}
        >
          <li>
            <a
              href="#about"
              className="flex items-center hover:text-cyan-400 transition duration-500 relative group"
            >
              <FaHome className="mr-2" size={20} /> About
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-400 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="flex items-center hover:text-cyan-400 transition duration-500 relative group"
            >
              <FaBriefcase className="mr-2" size={20} /> Skills
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-400 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="flex items-center hover:text-cyan-400 transition duration-500 relative group"
            >
              <FaProjectDiagram className="mr-2" size={20} /> Experience
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-400 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="flex items-center hover:text-cyan-400 transition duration-500 relative group"
            >
              <FaBriefcase className="mr-2" size={20} /> Education
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-400 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center hover:text-cyan-400 transition duration-500 relative group"
            >
              <FaEnvelope className="mr-2" size={20} /> Contact
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-400 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

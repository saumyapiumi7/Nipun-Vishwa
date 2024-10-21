import { FaHome, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-navyBlue text-white py-4 px-6 shadow-md">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Accountant Name */}
        <div className="flex items-center space-x-4">
          {/* Profile Image */}
          <img
            src="/src/assets/Nipun.jpeg" 
            alt="Nipun Vishwa Profile" 
            className="w-14 h-14 rounded-full border-2 border-cyan-500 shadow-lg" 
          />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-300">
            Nipun Vishwa
          </h1>
        </div>

        {/* Navigation */}
        <ul className="flex space-x-4 md:space-x-6 mt-4 md:mt-0 uppercase font-medium text-sm md:text-lg lg:text-xl">
          <li>
            <a 
              href="#about" 
              className="flex items-center hover:text-cyan-500 transition duration-300 relative group"
            >
              <FaHome className="mr-1" size={18} /> About
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="flex items-center hover:text-cyan-500 transition duration-300 relative group"
            >
              <FaBriefcase className="mr-1" size={18} /> Skills
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className="flex items-center hover:text-cyan-500 transition duration-300 relative group"
            >
              <FaProjectDiagram className="mr-1" size={18} /> Experience
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
          <li>
            <a 
              href="#education"  // New Education link added here
              className="flex items-center hover:text-cyan-500 transition duration-300 relative group"
            >
              <FaBriefcase className="mr-1" size={18} /> Education  {/* You can choose a different icon if needed */}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="flex items-center hover:text-cyan-500 transition duration-300 relative group"
            >
              <FaEnvelope className="mr-1" size={18} /> Contacts
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

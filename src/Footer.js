import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col md:flex-row flex-wrap justify-center items-center text-center px-4">
        
        {/* Links Section */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-emerald-600">Quick Links </h3>
          <ul>
            <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Me</Link></li>

          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-emerald-600">Contact Me</h3>
          <p className="text-gray-400 text-sm md:text-base">Email: Colby Acton</p>
          <p className="text-gray-400 text-sm md:text-base">Phone: (506) 536-7494</p>
        </div>

        {/* Socials Section */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-emerald-600">Socials</h3>
          <ul>
            <li><a href="https://github.com/Cacton12" className="text-gray-400 hover:text-white">Github</a></li>
            <li><a href="https://www.linkedin.com/in/colby-acton-93740b286/" className="text-gray-400 hover:text-white">LinkedIn</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;





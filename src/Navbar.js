import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [ismenuOpen, setMenuToOpen] = useState(false);

  const toggleMenu = () => {
    setMenuToOpen(!ismenuOpen);
  };

  return (
<div className="flex w-full justify-between px-8 items-center">
  {/* Name section */}
  <div className="text-white pt-2">
    <h1 className="text-3xl raleway-regular text-emerald-600">Colby Acton</h1>
    <p className="">Programmer Analyst</p>
  </div>

  {/* Regular navbar links for larger screens */}
  <div className="hidden md:flex space-x-4 pt-4 text-emerald-600">
    <Link to="/" className="bg-gray-300 rounded-md h-8 px-2 mr-3 raleway-regular">
      <i className='bx bxs-home mr-1 pl-0'></i>Home
    </Link>
    <Link to="/projects" className="bg-gray-300 rounded-md h-8 px-2 mr-3 raleway-regular">
      <i className='bx bxs-book mr-1 pl-0'></i>Projects
    </Link>
    <Link to="/contact" className="bg-gray-300 rounded-md h-8 px-2 mr-3 raleway-regular">
      <i className='bx bxs-phone mr-1 pl-0'></i>Contact Me
    </Link>
  </div>

  {/* Menu icon for smaller screens */}
  <div className="md:hidden">
    <button onClick={toggleMenu} className="text-emerald-600 text-3xl bg-white rounded-md">
      <i className="bx bx-menu"></i>
    </button>
  </div>

  {/* Dropdown menu for smaller screens */}
  {ismenuOpen && (
    <div className="absolute top-16 right-8 bg-gray-300 rounded-md shadow-lg p-4 space-y-2">
      <Link to="/" className="block text-emerald-600">
        <button className="w-full text-left raleway-regular">
          <i className='bx bxs-home mr-2'></i>Home
        </button>
      </Link>
      <Link to="/projects" className="block text-emerald-600">
        <button className="w-full text-left raleway-regular">
          <i className='bx bxs-book mr-2'></i>Projects
        </button>
      </Link>
      <Link to="/contact" className="block text-emerald-600">
        <button className="w-full text-left raleway-regular">
          <i className='bx bxs-phone mr-2'></i>Contact Me
        </button>
      </Link>
    </div>
  )}
</div>
  );
};

export default NavBar;


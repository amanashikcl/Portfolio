import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="flex-1">
        <a
          className="btn btn-ghost hover:bg-transparent text-xl cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          Aman Ashik
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              onClick={() => scrollToSection('home')}
              className="hover:bg-transparent"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection('skills')}
              className="hover:bg-transparent"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection('contact')}
              className="hover:bg-transparent"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

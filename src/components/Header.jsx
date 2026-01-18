

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar bg-base-100/70 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('skills')}>Skills</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('contact')}>Contact</a>
            </li>
          </ul>
        </div>
        <a
          className="text-xl font-bold cursor-pointer transition-colors"
          onClick={() => scrollToSection('home')}
        >
          Aman Ashik
        </a>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end pe-4 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              className="cursor-pointer transition-colors hover:bg-transparent"
              onClick={() => scrollToSection('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer transition-colors hover:bg-transparent"
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer transition-colors hover:bg-transparent"
              onClick={() => scrollToSection('contact')}
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

import { useState } from 'react';
import Button from '../common/Button';
import { NAVIGATION_ITEMS } from '../../constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = NAVIGATION_ITEMS;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-white shadow-md">
      {/* Hero Background with Blur Effect */}
      <div className="absolute inset-0 bg-[url(./nav_bg.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 "></div>
      </div>
      
      {/* Navigation Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">


            {/* Desktop Navigation */}
            <nav className="hidden md:block">
            <ul className="flex items-center space-x-6 lg:space-x-8">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={'/location'}
                    className="text-white hover:text-[#F5652F] transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="./jclogo.png" 
              alt="Jodhpur Cafe Logo" 
              className="h-8 w-auto sm:h-10 md:h-12"
            />
          </div>

        

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <button className="btn1 text-xs sm:text-sm">
              ORDER NOW
            </button>
            <button className="btn2 text-xs sm:text-sm">
              BOOK A TABLE
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#F5652F] focus:outline-none focus:text-[#F5652F] p-1"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-md rounded-lg mt-2 mx-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-[#F5652F] transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  ORDER NOW
                </Button>
                <Button variant="primary" size="sm" className="w-full">
                  BOOK A TABLE
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Locations', path: '/locations' },
  { name: 'About', path: '/about' },
  { name: 'Careers', path: '/careers' },
  { name: 'Merchandise', path: '/merchandise' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
               <svg viewBox="0 0 100 100" className="w-full h-full text-red-600 fill-current group-hover:scale-110 transition-transform">
                  <path d="M50 10 L90 50 L50 90 L10 50 Z" />
               </svg>
               <span className="absolute font-black text-white text-xl">IN</span>
            </div>
            <div className="flex flex-col -ml-1">
              <span className="font-black text-2xl text-red-600 leading-none tracking-tighter">IN-N-OUT</span>
              <span className="font-bold text-sm text-yellow-500 leading-none">BURGER</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-red-600 ${
                  location.pathname === link.path ? 'text-red-600' : 'text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/locations"
              className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:bg-red-700 transition-colors shadow-lg"
            >
              <MapPin size={16} />
              Find Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-red-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-white border-t overflow-hidden"
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-bold uppercase tracking-widest py-2 ${
                location.pathname === link.path ? 'text-red-600' : 'text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/locations"
            onClick={() => setIsOpen(false)}
            className="w-full bg-red-600 text-white px-6 py-3 rounded-xl font-bold text-center uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <MapPin size={20} />
            Find A Location
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/blog', label: 'Blog' },
    { path: '/colors', label: 'Color Guide' },
    { path: '/service-areas', label: 'Service Areas' },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/remake-this-logo-make-it-high-quality-an_1lOeaXi_S9e63QashsobSg_MX1MnvEZTemJ90OSV9f1Iw_hd-removebg-preview.png"
              alt="Paint Works Pro"
              className="h-14 w-auto object-contain drop-shadow-lg transform group-hover:scale-105 transition-transform"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'text-yellow-300'
                    : 'text-white hover:text-yellow-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+16193047732"
              className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-6 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105"
            >
              Call Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'text-yellow-300'
                    : 'text-white hover:text-yellow-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+16193047732"
              className="block text-center bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-6 py-3 rounded-full font-bold shadow-lg mt-4"
            >
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

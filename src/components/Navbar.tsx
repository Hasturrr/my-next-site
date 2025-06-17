import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { prefix } from '@/utils/path';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);


  const navLinkStyle = "px-2 py-1 rounded hover:bg-blue-700/40 transition text-white hover:text-blue-200";

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white px-4 py-3 shadow-md backdrop-blur-sm bg-opacity-90">
      <div className="flex justify-between items-center">
        <Link href="/" className="pl-2 flex items-center">
          <img
            src={`${prefix}/images/logo.png`}
            alt="Galaxy3 Logo"
            className="h-10 w-auto object-contain hover:opacity-90 transition duration-300"
          />
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium items-center pr-2">
          {/* Dropdown: Home */}
          <div className="relative group">
            <Link href="/#hero" className={navLinkStyle}>
              Home
            </Link>
            <div className="absolute left-0 top-full w-48 bg-white text-gray-800 rounded shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
              <Link href="/#features" className="block px-4 py-2 hover:bg-gray-100">Features</Link>
              <Link href="/#solutions" className="block px-4 py-2 hover:bg-gray-100">Solutions</Link>
              <Link href="/#trends" className="block px-4 py-2 hover:bg-gray-100">Trends</Link>
              <Link href="/#contact" className="block px-4 py-2 hover:bg-gray-100">Contact Us</Link>
            </div>
          </div>

          {/* Static Links */}
          <Link href="/about" className={navLinkStyle}>About</Link>
          <Link href="/services" className={navLinkStyle}>Services</Link>
          <Link href="/projects" className={navLinkStyle}>Projects</Link>
          <Link href="/contact" className={navLinkStyle}>Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div ref={menuRef} className="md:hidden mt-3 space-y-2 text-sm font-medium bg-gray-800 rounded px-4 py-3">
          <Link href="/#hero" className="block py-1 text-white" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/#features" className="block py-1 pl-4 text-gray-300" onClick={() => setMenuOpen(false)}>↳ Features</Link>
          <Link href="/#solutions" className="block py-1 pl-4 text-gray-300" onClick={() => setMenuOpen(false)}>↳ Solutions</Link>
          <Link href="/#trends" className="block py-1 pl-4 text-gray-300" onClick={() => setMenuOpen(false)}>↳ Trends</Link>
          <Link href="/#contact" className="block py-1 pl-4 text-gray-300" onClick={() => setMenuOpen(false)}>↳ Contact CTA</Link>
          <Link href="/about" className="block py-1 text-white" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" className="block py-1 text-white" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/projects" className="block py-1 text-white" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/contact" className="block py-1 text-white" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

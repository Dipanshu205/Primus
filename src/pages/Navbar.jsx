import React, { useState, useEffect } from 'react'

export const Navbar = () => {

      const [menuOpen, setMenuOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
    const navLinks = (
        <>
        <a href="/" className="hover:underline block md:inline text-white">
            Home
          </a>
          <a href="/services" className="hover:underline block md:inline text-white">
            Services
          </a>
          <a href="/contact" className="hover:underline block md:inline text-white">
            Contact
          </a>
        </>
      );
    
  return (
    <header
    className={`fixed top-0 left-0 w-full z-50 transition-shadow ${
      scrolled ? 'shadow-md' : ''
    } bg-primary text-white`}
  >
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Primus Security</h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6">{navLinks}</nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </div>

    {/* Mobile Menu */}
    <div
      className={`md:hidden px-6 pt-2 pb-4 transition-all duration-300 ease-in-out ${
        menuOpen ? 'block' : 'hidden'
      }`}
    >
      <nav className="space-y-2 text-base">{navLinks}</nav>
    </div>
  </header>
  )
}

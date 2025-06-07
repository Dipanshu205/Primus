import React, { useState, useEffect } from 'react';

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      <a href="#services" className="hover:underline block md:inline text-white">
        Services
      </a>
      <a href="#contact" className="hover:underline block md:inline text-white">
        Contact
      </a>
    </>
  );



  return (
    <div className="min-h-screen text-gray-900">
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

      <section className="bg-primary text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Safety First. Always Primus.</h2>
        <a href="/contact">

        <button className="bg-white text-primary font-semibold px-6 py-2 rounded shadow hover:bg-gray-200">Get in Contact</button>

        </a>
      </section>

      <section id="services" className="py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">Security Guards</h4>
            <p>Providing professional security guards for various needs.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">Bodyguards</h4>
            <p>Offering personal protection services by trained bodyguards.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">Event Security</h4>
            <p>Ensuring safety and control in all types of events.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-10">Why Choose Us?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Trained Professionals</h4>
            <p>Security personnel with rigorous training.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Tech-Enabled Guards</h4>
            <p>Utilizing modern technology for enhanced security.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Verified Backgrounds</h4>
            <p>Backgrounds checked and vetted security staff.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-6">Testimonials</h3>
        <blockquote className="italic max-w-xl mx-auto text-lg">“Very professional team. The guards were vigilant and well-trained. Highly recommend Primus Security.”<br /><span className="block font-semibold mt-4">– Mrs. Abha </span></blockquote>
      </section>

      <section id="contact" className="bg-primary text-white py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <p>📍 Delhi sector 62</p>
        <p>📞 (123)-456-7590</p>
        <p>✉️ info@primussecurity.com</p>
      </section>

      <footer className="bg-black text-white text-center py-4">
        © 2025 Primus Security. All rights reserved.
      </footer>
    </div>
  );
}

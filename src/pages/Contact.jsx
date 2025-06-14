import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export default function ContactComponent() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uxkr7zn', 'template_geoq1yv', form.current, 'lU3J4uI4owD2emeM1')
    e.target.reset()
  }
  return (
    <>
    <Navbar />
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-2">Connect With Us</h2>
      <span className="block text-center text-gray-500 mb-10">We're here to elevate your experience.</span>

      <div className="grid md:grid-cols-2 gap-10 justify-center max-w-6xl mx-auto px-4">

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold text-center md:text-left mb-6">Let’s talk business — our team is ready to assist.</h3>

          <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto md:mx-0 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" name="name" placeholder="Enter your full name" className="text-black w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" name="email" placeholder="Enter your email" className="text-black w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">How can we help you?</label>
              <textarea name="project" rows="6" placeholder="Tell us briefly about your requirements or query" className="w-full px-4 py-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"></textarea>
            </div>

            <button type="submit" className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300">
              Send Message
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M14.22 21.935c-1.18 0-2.85-.83-4.17-4.8l-.72-2.16-2.16-.72c-3.96-1.32-4.79-3-4.79-4.18s.83-2.85 4.79-4.17l8.49-2.83c2.12-.71 3.89-.5 4.98.58 1.09 1.08 1.3 2.86.59 4.98l-2.83 8.49c-1.32 3.97-3 4.8-4.18 4.8zM7.64 7.34c-2.78.93-3.77 2.03-3.77 2.74s.99 1.82 3.77 2.74l2.52.84c.22.07.4.25.47.47l.84 2.52c.93 2.78 2.03 3.77 2.74 3.77s1.82-.99 2.74-3.77l2.83-8.49c.51-1.54.41-2.8-.2-3.45-.61-.66-1.87-.76-3.41-.24L7.64 7.34z"
                />
                <path
                  d="M10.11 14.705a.747.747 0 01-.53-1.28l3.58-3.59a.75.75 0 111.06 1.06l-3.58 3.59a.747.747 0 01-.53.22z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
    <Footer />
</>
  )
}
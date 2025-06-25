import React from 'react';
import { ShieldCheck, Users, AlarmClock } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const services = [
  {
    title: 'Private Security Guards',
    icon: <ShieldCheck className="w-10 h-10 text-green-700" />,
    desc: 'Highly trained guards for residential, commercial, and industrial security. Background-verified and alert.',
  },
  {
    title: 'Personal Bodyguards',
    icon: <Users className="w-10 h-10 text-green-700" />,
    desc: 'Discreet and professional close protection personnel for VIPs, executives, and influencers.',
  },
  {
    title: 'Rental Security Services',
    icon: <AlarmClock className="w-10 h-10 text-green-700" />,
    desc: 'On-demand guards for events, emergencies, and short-term security needs.',
  },
];

const advantages = [
  '24/7 Support and Emergency Response',
  'Government-verified & trained staff',
  'Tech-driven tracking and reporting',
  'Scalable for large and small needs',
  'Strict background checks and vetting',
  'Flexible rental and contract plans',
];

export default function ServicesPage() {
  return (
    <>
    <Navbar/>
    <div className="mt-7 bg-secondary text-white min-h-screen">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold">Our Security Services</h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Empowering your safety with smart, scalable and professional security solutions.
        </p>
      </header>

      {/* Services */}
      <section className="grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 shadow hover:shadow-primary/40 transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.desc}</p>
          </div>
        ))}
      </section>

      {/* Advantages */}
      <section className="mt-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-gray-300">
          {advantages.map((adv, i) => (
            <div key={i} className="bg-[#1c1c1c] rounded-xl p-4 border border-gray-700 shadow">
              ✅ {adv}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-20 px-4 py-10 bg-primary text-white rounded-xl mx-6 max-w-6xl mx-auto shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Secure Your World, One Guard at a Time</h2>
        <p className="text-gray-200 mb-6">
          Contact us today to hire professional guards or get a custom security quote.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-full transition hover:bg-gray-100"
        >
          Get in Touch →
        </a>
      </section>
    </div>

    <Footer />
    </>
  );
}

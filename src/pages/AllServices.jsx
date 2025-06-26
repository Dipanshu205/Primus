import React from 'react';
import { ShieldCheck, Users, AlarmClock } from 'lucide-react';
import { motion } from 'framer-motion';
import guardImage from '../assets/private-guard.jpg';
import bodyguardImage from '../assets/bodyguard.jpg';
import rentalImage from '../assets/rental-guard.jpg';

const allServices = [
  {
    title: 'Private Security Guards',
    icon: <ShieldCheck className="w-8 h-8 text-green-700" />,
    image: guardImage,
    desc: `Our private security guards are professionally trained and licensed to handle a range of environments — from gated communities and offices to warehouses and critical infrastructure. With round-the-clock vigilance and robust protocols, they ensure safety and order.`,
    quote: '“Security is not a product, but a process.” – Bruce Schneier'
  },
  {
    title: 'Personal Bodyguards',
    icon: <Users className="w-8 h-8 text-green-700" />,
    image: bodyguardImage,
    desc: `Our personal bodyguard service ensures discreet, professional, and elite close protection for celebrities, executives, and individuals under threat. Bodyguards are trained in threat assessment, hand-to-hand defense, and VIP escort protocols.`,
    quote: '“In the face of danger, preparation is our power.”'
  },
  {
    title: 'Rental Security Services',
    icon: <AlarmClock className="w-8 h-8 text-green-700" />,
    image: rentalImage,
    desc: `Need short-term protection? We offer rental guards for events, crowd control, or emergency deployments. Whether it’s a 3-hour event or a weekend gig, our guards arrive geared and briefed, ready to protect.`,
    quote: '“Temporary need, permanent peace of mind.”'
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AllServices() {
  return (
    <div className="bg-secondary text-white min-h-screen px-6 py-12">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-4xl font-bold text-center mb-12"
      >
        Comprehensive Security Services
      </motion.h1>

      <div className="grid gap-12 max-w-6xl mx-auto">
        {allServices.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1a1a1a] border border-gray-800 rounded-2xl shadow hover:shadow-primary/40 transition overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                {service.icon}
                <h2 className="text-2xl font-semibold">{service.title}</h2>
              </div>
              <p className="text-gray-300 mb-4">{service.desc}</p>
              <blockquote className="italic text-green-800 text-sm border-l-4 pl-4 border-green-900">
                {service.quote}
              </blockquote>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <a
          href="/contact"
          className="inline-block bg-primary hover:bg-[#2d402d] text-white px-6 py-3 rounded-full font-medium transition"
        >
          Request a Quote →
        </a>
      </motion.div>
    </div>
  );
}

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BlackDummyModel from '../components/BlackDummyModel';

const OutfitsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Outfits & Tech Advancements</h1>
        <p className="text-gray-400 mt-2">Explore our futuristic security outfits</p>
      </header>

      <section className="w-full h-[500px]">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} />
          <BlackDummyModel />
          <OrbitControls />
        </Canvas>
      </section>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Outfit Technology</h2>
        <p className="text-gray-300">
          Our outfits are designed with cutting-edge materials—lightweight, bullet-resistant, climate adaptive, and integrated with IoT sensors to ensure real-time security updates and biometric monitoring.
        </p>
      </section>
    </div>
  );
};

export default OutfitsPage;

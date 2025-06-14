// src/pages/Outfits.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BlackDummyModel from '../components/BlackDummyModel';

export default function Outfits() {
  return (
    <div className="h-screen bg-black text-white">
      <h1 className="text-center text-4xl py-6">Outfits & Tech Advancements</h1>
      <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <BlackDummyModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

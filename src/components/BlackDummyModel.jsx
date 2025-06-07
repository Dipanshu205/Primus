import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

const BlackDummyModel = () => {
  const { scene } = useGLTF('/models/black-dummy.glb'); // replace with actual path

  return (
    <Suspense fallback={null}>
      <primitive object={scene} scale={1.5} />
    </Suspense>
  );
};

export default BlackDummyModel;

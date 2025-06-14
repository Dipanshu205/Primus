// src/components/BlackDummyModel.jsx
import { useGLTF } from '@react-three/drei';

export default function BlackDummyModel() {
  const { scene } = useGLTF('/models/black-dummy.glb');
  return <primitive object={scene} scale={1.2} />;
}

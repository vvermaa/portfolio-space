import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

function Sun() {
  const ref = useRef<THREE.Mesh>(null!);
  const sunTexture = useTexture("/textures/sun.jpg");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
  <mesh ref={ref}>
    <sphereGeometry args={[3, 64, 64]} />
    <meshStandardMaterial
      map={sunTexture}
      emissive="#f9cd1e"
      emissiveIntensity={0}
    />
  </mesh>
);
}

export default function HeroSun() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.1} />

<directionalLight
  position={[-12, 12, 10]}
  intensity={9}
/>
      <Sun />
    </Canvas>
  );
}
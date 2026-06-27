import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

function Moon() {
  const ref = useRef<THREE.Mesh>(null!);
  const moonTexture = useTexture("/textures/mercury.jpg");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial map={moonTexture} />
    </mesh>
  );
}

export default function ContactMoon() {
  return (
    <Canvas camera={{ position: [0, 0, 7] }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[-12, 12, 10]} intensity={6} />
      <Moon />
    </Canvas>
  );
}
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

function Planet({ planet }: { planet: string }) {
  const ref = useRef<THREE.Mesh>(null!);
  const texture = useTexture(`/textures/${planet}.jpg`);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.004;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function ProjectPlanet({ planet }: { planet: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 7] }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[-12, 12, 10]} intensity={8} />
      <Planet planet={planet} />
    </Canvas>
  );
}
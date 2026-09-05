"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Line } from "@react-three/drei";

const Particles = ({ count = 150 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const [particles] = useState(() => {
    return Array.from({ length: count }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15 - 5 // Push slightly back
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      ),
    }));
  });

  useFrame(() => {
    if (!mesh.current) return;

    particles.forEach((particle, i) => {
      particle.position.add(particle.velocity);

      // Simple wrap-around
      if (particle.position.x > 12.5) particle.position.x = -12.5;
      if (particle.position.x < -12.5) particle.position.x = 12.5;
      if (particle.position.y > 12.5) particle.position.y = -12.5;
      if (particle.position.y < -12.5) particle.position.y = 12.5;
      if (particle.position.z > 5) particle.position.z = -20;
      if (particle.position.z < -20) particle.position.z = 5;

      dummy.position.copy(particle.position);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.04, 16, 16]} />
      <meshBasicMaterial color="#E2D4F0" transparent opacity={0.5} />
    </instancedMesh>
  );
};

export const QuantumField = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-100 mix-blend-screen" style={{ filter: "drop-shadow(0 0 16px rgba(226, 212, 240, 0.3))" }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]} // Lower DPR for background performance
      >
        <Particles count={200} />
      </Canvas>
    </div>
  );
};

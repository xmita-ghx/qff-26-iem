"use client";

import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import * as THREE from "three";

// Flocking Birds Simulation
const Boids = ({ count = 50 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);

  // Dummy object to compute transformations
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Bird geometry (simple tetrahedron/cone for silhouette)
  const birdGeo = useMemo(() => new THREE.ConeGeometry(0.05, 0.2, 3), []);
  const birdMat = useMemo(() => new THREE.MeshBasicMaterial({ color: "#FFFFFF", wireframe: true, transparent: true, opacity: 0.8 }), []);

  // Initialize random positions, velocities, and phases
  const [boidsData] = useState(() => {
    return Array.from({ length: count }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05
      ),
      phase: Math.random() * Math.PI * 2,
    }));
  });

  useFrame((state, delta) => {
    if (!mesh.current) return;

    boidsData.forEach((boid, i) => {
      // Gentle orbit around center (the cryostat)
      const centerDirection = new THREE.Vector3(0, 0, 0).sub(boid.position).normalize().multiplyScalar(0.01);
      boid.velocity.add(centerDirection);

      // Up/down flapping motion
      boid.phase += delta * 5;
      boid.velocity.y += Math.sin(boid.phase) * 0.005;

      // Limit speed
      boid.velocity.clampLength(0.02, 0.08);

      boid.position.add(boid.velocity);

      dummy.position.copy(boid.position);
      // Orient bird towards its velocity
      const target = boid.position.clone().add(boid.velocity);
      dummy.lookAt(target);
      dummy.rotateX(Math.PI / 2); // Adjust orientation so cone points forward
      dummy.updateMatrix();

      mesh.current!.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[birdGeo, birdMat, count]}>
      <coneGeometry args={[0.05, 0.2, 3]} />
      <meshBasicMaterial color="#FFFFFF" wireframe transparent opacity={0.6} />
    </instancedMesh>
  );
};

// A simplified procedural dilution refrigerator (cryostat) wireframe
const Cryostat = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2; // Continuous smooth rotation
    }
  });

  // Generate plates
  const [plates] = useState(() => {
    return [
      { radius: 2, y: 3 },
      { radius: 1.8, y: 1.5 },
      { radius: 1.5, y: 0 },
      { radius: 1.2, y: -1.5 },
      { radius: 0.8, y: -3 },
    ];
  });

  return (
    <group ref={groupRef}>
      {/* Central Support Rod */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 8, 8]} />
        <meshBasicMaterial color="#E0AAFF" wireframe />
      </mesh>

      {/* Plates */}
      {plates.map((plate, index) => (
        <group key={index} position={[0, plate.y, 0]}>
          <mesh>
            <cylinderGeometry args={[plate.radius, plate.radius, 0.1, 16]} />
            <meshBasicMaterial color="#FFFFFF" wireframe transparent opacity={0.6} />
          </mesh>
          <mesh>
            <cylinderGeometry args={[plate.radius - 0.1, plate.radius - 0.1, 0.12, 16]} />
            <meshBasicMaterial color="#9D4EDD" wireframe transparent opacity={0.4} />
          </mesh>
        </group>
      ))}

      {/* Coaxial Lines / Wires (Procedural vertical lines) */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const x = Math.cos(angle) * 0.6;
        const z = Math.sin(angle) * 0.6;
        return (
          <Line
            key={i}
            points={[
              new THREE.Vector3(x, 3, z),
              new THREE.Vector3(x, 1.5, z),
              new THREE.Vector3(x * 0.8, 0, z * 0.8),
              new THREE.Vector3(x * 0.6, -1.5, z * 0.6),
              new THREE.Vector3(x * 0.4, -3, z * 0.4),
            ]}
            color="#E0AAFF"
            lineWidth={1}
            transparent
            opacity={0.5}
          />
        );
      })}
    </group>
  );
};

export const HeroQuantumCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <Cryostat />
        <Boids count={60} />

        {/* Allows subtle user interaction for rotation/tilt */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.2}
          maxAzimuthAngle={0.2}
          minAzimuthAngle={-0.2}
        />
      </Canvas>
    </div>
  );
};

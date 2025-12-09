"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import CodeBackground
const CodeBackground = dynamic(() => import("./CodeBackground"), {
  ssr: false,
  loading: () => null,
});

export default function SkillsBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 to-black" />
    );
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 45], fov: 65 }}
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1e1b4b 100%)",
        }}
      >
        <Suspense fallback={null}>
          <CodeBackground />
          <Environment preset="city" />

          <OrbitControls
            enableZoom={true}
            enablePan={true}
            autoRotate={true}
            autoRotateSpeed={0.3}
            enableDamping={true}
            dampingFactor={0.05}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            minDistance={25}
            maxDistance={80}
            rotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

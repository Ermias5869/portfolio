"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stars } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
import { Suspense } from "react";
import CodeBackground from "./CodeBackground";

export default function SkillsBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 35], fov: 60 }}
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1e1b4b 100%)",
        }}
      >
        <color attach="background" args={["#0a0a0a"]} />

        <Suspense fallback={null}>
          <CodeBackground />
          <Environment preset="city" />
          <Stars radius={100} depth={50} count={2000} factor={4} />

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.2}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            minDistance={20}
            maxDistance={50}
          />

          <EffectComposer>
            <Bloom
              intensity={1.2}
              kernelSize={KernelSize.LARGE}
              luminanceThreshold={0.8}
              luminanceSmoothing={0.025}
            />
            <ChromaticAberration
              blendFunction={BlendFunction.NORMAL}
              offset={[0.002, 0.002]}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}

"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text, Html } from "@react-three/drei";
import * as THREE from "three";

// Programming language logos and code snippets
const codeElements = [
  // React/Next.js
  {
    type: "logo",
    content: "{ React }",
    color: "#61dafb",
    speed: 0.5,
    size: 1,
  },
  {
    type: "code",
    content: "const App = () => {\n  return <Component />\n}",
    color: "#61dafb",
    speed: 0.3,
    size: 0.8,
  },

  // JavaScript/TypeScript
  {
    type: "logo",
    content: "TS",
    color: "#3178c6",
    speed: 0.6,
    size: 1.2,
  },
  {
    type: "code",
    content: "interface User {\n  name: string\n  age: number\n}",
    color: "#3178c6",
    speed: 0.4,
    size: 0.7,
  },

  // Python
  {
    type: "logo",
    content: "Py",
    color: "#3776ab",
    speed: 0.7,
    size: 1.1,
  },
  {
    type: "code",
    content: 'def hello():\n    print("Hello World")',
    color: "#3776ab",
    speed: 0.5,
    size: 0.9,
  },

  // Node.js
  {
    type: "logo",
    content: "Node",
    color: "#339933",
    speed: 0.4,
    size: 1,
  },
  {
    type: "code",
    content:
      'app.get("/api", (req, res) => {\n  res.json({ success: true })\n})',
    color: "#339933",
    speed: 0.6,
    size: 0.8,
  },

  // Tailwind
  {
    type: "logo",
    content: "TW",
    color: "#06b6d4",
    speed: 0.8,
    size: 1,
  },
  {
    type: "code",
    content: 'className="flex items-center justify-center"',
    color: "#06b6d4",
    speed: 0.3,
    size: 0.7,
  },

  // Three.js
  {
    type: "logo",
    content: "3JS",
    color: "#049ef4",
    speed: 0.5,
    size: 1.3,
  },
  {
    type: "code",
    content: "new THREE.Mesh(geometry, material)",
    color: "#049ef4",
    speed: 0.4,
    size: 0.8,
  },

  // Docker
  {
    type: "logo",
    content: "🐳",
    color: "#2496ed",
    speed: 0.6,
    size: 1.4,
  },
  {
    type: "code",
    content: "FROM node:18-alpine\nCOPY . .\nRUN npm install",
    color: "#2496ed",
    speed: 0.5,
    size: 0.9,
  },

  // AWS
  {
    type: "logo",
    content: "AWS",
    color: "#ff9900",
    speed: 0.7,
    size: 1.2,
  },
  {
    type: "code",
    content: "aws s3 sync . s3://bucket",
    color: "#ff9900",
    speed: 0.4,
    size: 0.8,
  },
];

function CodeElement({ element, index }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [position, setPosition] = useState(() => [
    (Math.random() - 0.5) * 40,
    (Math.random() - 0.5) * 40,
    (Math.random() - 0.5) * 40,
  ]);

  const [velocity] = useState(() => [
    (Math.random() - 0.5) * element.speed,
    (Math.random() - 0.5) * element.speed,
    (Math.random() - 0.5) * element.speed,
  ]);

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      const time = state.clock.elapsedTime;

      // Update position with velocity
      const newPosition = [
        position[0] + velocity[0],
        position[1] + velocity[1],
        position[2] + velocity[2],
      ];

      // Boundary check - bounce off walls
      const bounds = 25;
      for (let i = 0; i < 3; i++) {
        if (Math.abs(newPosition[i]) > bounds) {
          velocity[i] = -velocity[i];
          newPosition[i] = Math.sign(newPosition[i]) * bounds;
        }
      }

      setPosition(newPosition);
      groupRef.current.position.set(
        newPosition[0],
        newPosition[1],
        newPosition[2]
      );

      // Gentle rotation
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.x = Math.sin(time * 0.3 + index) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position as any}>
      {element.type === "logo" ? (
        <mesh ref={meshRef}>
          <boxGeometry args={[element.size, element.size, element.size]} />
          <meshStandardMaterial
            color={element.color}
            emissive={element.color}
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.9}
          />
          {/* Logo text */}
          <Text
            position={[0, 0, element.size / 2 + 0.1]}
            fontSize={element.size * 0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {element.content}
          </Text>
        </mesh>
      ) : (
        <mesh ref={meshRef}>
          <planeGeometry args={[element.size * 8, element.size * 4]} />
          <meshBasicMaterial
            color={element.color}
            transparent
            opacity={0.7}
            side={THREE.DoubleSide}
          />
          <Html
            center
            distanceFactor={10}
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              padding: "10px",
              borderRadius: "5px",
              color: element.color,
              fontFamily: "monospace",
              fontSize: "12px",
              whiteSpace: "pre",
              backdropFilter: "blur(5px)",
            }}
          >
            {element.content}
          </Html>
        </mesh>
      )}

      {/* Trail/glow effect */}
      <mesh position={[0, 0, -0.5]}>
        <sphereGeometry args={[element.size * 1.5, 16, 16]} />
        <meshBasicMaterial color={element.color} transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

function CodeConnections() {
  const linesRef = useRef<THREE.LineSegments>(null);
  const [points] = useState(() => {
    const count = 20;
    const arr = new Float32Array(count * 3 * 2);

    for (let i = 0; i < count; i++) {
      const i6 = i * 6;
      const radius = 20;
      const angle1 = Math.random() * Math.PI * 2;
      const angle2 = Math.random() * Math.PI * 2;

      arr[i6] = Math.cos(angle1) * radius;
      arr[i6 + 1] = Math.sin(angle1) * radius;
      arr[i6 + 2] = Math.cos(angle2) * radius;

      arr[i6 + 3] = Math.cos(angle1 + 0.1) * radius * 0.8;
      arr[i6 + 4] = Math.sin(angle1 + 0.1) * radius * 0.8;
      arr[i6 + 5] = Math.cos(angle2 + 0.1) * radius * 0.8;
    }

    return arr;
  });

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#6366f1"
        transparent
        opacity={0.1}
        linewidth={1}
      />
    </lineSegments>
  );
}

function FloatingCodeParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particlesCount = 1000;

  const particles = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;

      // Random position in a sphere
      const radius = 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Random color from tech colors
      const techColors = [
        [97, 218, 251], // React blue
        [49, 120, 198], // TypeScript blue
        [55, 118, 171], // Python blue
        [51, 153, 51], // Node green
        [6, 182, 212], // Tailwind cyan
        [4, 158, 244], // Three.js blue
        [36, 150, 237], // Docker blue
        [255, 153, 0], // AWS orange
      ];

      const color = techColors[Math.floor(Math.random() * techColors.length)];
      colors[i3] = color[0] / 255;
      colors[i3 + 1] = color[1] / 255;
      colors[i3 + 2] = color[2] / 255;
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function CodeBackground() {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    camera.position.set(0, 0, 35);
  }, [camera]);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle camera movement
      camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 2;
      camera.position.y = Math.cos(state.clock.elapsedTime * 0.1) * 2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#06b6d4" />

      <group ref={groupRef}>
        {/* Floating code elements */}
        {codeElements.map((element, i) => (
          <CodeElement key={i} element={element} index={i} />
        ))}

        {/* Network connections */}
        <CodeConnections />

        {/* Background particles */}
        <FloatingCodeParticles />
      </group>
    </>
  );
}

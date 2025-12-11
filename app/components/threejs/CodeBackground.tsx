"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { TextureLoader, DoubleSide, CanvasTexture, PlaneGeometry } from "three";
import * as THREE from "three";

// Your logo configuration
const logos = [
  {
    name: "React",
    path: "/logos/react.svg",
    color: "#61dafb",
    speed: 0.15, // Slower
    size: 1.5,
    url: "https://reactjs.org",
  },
  {
    name: "NextJS",
    path: "/logos/nextjs.svg",
    color: "#000000",
    speed: 0.18, // Slower
    size: 1.6,
    url: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    path: "/logos/typescript.svg",
    color: "#3178c6",
    speed: 0.12, // Slower
    size: 1.4,
    url: "https://www.typescriptlang.org",
  },
  {
    name: "JavaScript",
    path: "/logos/javascript.svg",
    color: "#f7df1e",
    speed: 0.2, // Slower
    size: 1.5,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Python",
    path: "/logos/python.svg",
    color: "#3776ab",
    speed: 0.22, // Slower
    size: 1.7,
    url: "https://www.python.org",
  },
  {
    name: "NodeJS",
    path: "/logos/nodejs.svg",
    color: "#339933",
    speed: 0.15, // Slower
    size: 1.5,
    url: "https://nodejs.org",
  },
  {
    name: "Postgresql",
    path: "/logos/postgresql.svg",
    color: "#049ef4",
    speed: 0.18, // Slower
    size: 1.8,
    url: "https://www.postgresql.org",
  },
  {
    name: "Docker",
    path: "/logos/docker.svg",
    color: "#2496ed",
    speed: 0.2, // Slower
    size: 1.6,
    url: "https://www.docker.com",
  },
  {
    name: "AWS",
    path: "/logos/amazon.svg",
    color: "#ff9900",
    speed: 0.15, // Slower
    size: 1.7,
    url: "https://aws.amazon.com",
  },
  {
    name: "MongoDB",
    path: "/logos/mongodb.svg",
    color: "#47a248",
    speed: 0.18, // Slower
    size: 1.5,
    url: "https://www.mongodb.com",
  },
  {
    name: "Redis",
    path: "/logos/redis.svg",
    color: "#e535ab",
    speed: 0.12, // Slower
    size: 1.4,
    url: "https://redis.io",
  },
  {
    name: "Github",
    path: "/logos/github.svg",
    color: "#f1502f",
    speed: 0.18, // Slower
    size: 1.4,
    url: "https://github.com",
  },
  {
    name: "Git",
    path: "/logos/git.svg",
    color: "#f1502f",
    speed: 0.18, // Slower
    size: 1.4,
    url: "https://git-scm.com",
  },
  {
    name: "PostgreSQL",
    path: "/logos/postgresql.svg",
    color: "#336791",
    speed: 0.12, // Slower
    size: 1.6,
    url: "https://www.postgresql.org",
  },
];

// Create fallback texture
function createFallbackTexture(
  color: string,
  name: string
): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Clear background
    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, 512, 512);

    // Create a colored circle background
    ctx.beginPath();
    ctx.arc(256, 256, 200, 0, Math.PI * 2);
    ctx.fillStyle = color + "40";
    ctx.fill();

    // Draw the tech name
    ctx.fillStyle = color;
    ctx.font = "bold 48px Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const displayName = name.length > 8 ? name.substring(0, 4) : name;
    ctx.fillText(displayName, 256, 256);

    ctx.font = "bold 32px Arial, sans-serif";
    ctx.fillStyle = color + "CC";
    ctx.fillText(name, 256, 320);
  }

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// Load texture
async function loadTexture(
  path: string,
  name: string,
  color: string
): Promise<THREE.Texture> {
  return new Promise((resolve) => {
    const loader = new TextureLoader();
    loader.load(
      path,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = 8;
        resolve(texture);
      },
      undefined,
      () => {
        console.warn(`Failed to load logo: ${name}, using fallback`);
        resolve(createFallbackTexture(color, name));
      }
    );
  });
}

function LogoPlane({ logo, index, texture }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [currentTexture, setCurrentTexture] = useState<THREE.Texture | null>(
    null
  );
  const [velocity] = useState(
    () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * logo.speed,
        (Math.random() - 0.5) * logo.speed,
        (Math.random() - 0.5) * logo.speed * 0.5
      )
  );

  // Set texture
  useEffect(() => {
    if (texture) {
      setCurrentTexture(texture);
    } else {
      setCurrentTexture(createFallbackTexture(logo.color, logo.name));
    }
  }, [texture, logo.color, logo.name]);

  // Random starting position in a large 3D space
  const initialPosition = useMemo(() => {
    return new THREE.Vector3(
      (Math.random() - 0.5) * 60, // X: -30 to 30
      (Math.random() - 0.5) * 40, // Y: -20 to 20
      (Math.random() - 0.5) * 60 // Z: -30 to 30
    );
  }, []);

  // Store current position
  const [currentPosition, setCurrentPosition] = useState(initialPosition);

  // Different wandering patterns
  const wanderingPattern = useMemo(() => {
    const patterns = [
      // Random wandering with occasional direction changes
      (time: number) => {
        const wanderX = Math.sin(time * 0.2 + index * 0.5) * 0.5;
        const wanderY = Math.cos(time * 0.3 + index * 0.7) * 0.5;
        const wanderZ = Math.sin(time * 0.4 + index * 0.3) * 0.3;

        return new THREE.Vector3(wanderX, wanderY, wanderZ);
      },
      // Looping elliptical path
      (time: number) => {
        const ellipseX = Math.sin(time * 0.15 + index) * 0.8;
        const ellipseY = Math.cos(time * 0.25 + index * 1.2) * 0.6;
        const ellipseZ = Math.sin(time * 0.1 + index * 0.8) * 0.4;

        return new THREE.Vector3(ellipseX, ellipseY, ellipseZ);
      },
      // Gentle floating with drift
      (time: number) => {
        const floatX = Math.sin(time * 0.1 + index) * 0.3;
        const floatY = Math.cos(time * 0.08 + index * 0.5) * 0.4;
        const floatZ = Math.sin(time * 0.05 + index * 0.3) * 0.2;

        return new THREE.Vector3(floatX, floatY, floatZ);
      },
      // Spiral wandering
      (time: number) => {
        const spiral = time * 0.1 + index * 0.2;
        const spiralX = Math.cos(spiral) * 0.6;
        const spiralY = Math.sin(spiral) * 0.6;
        const spiralZ = Math.sin(time * 0.05) * 0.2;

        return new THREE.Vector3(spiralX, spiralY, spiralZ);
      },
    ];

    return patterns[index % patterns.length];
  }, [index]);

  // Geometry - simple plane
  const geometry = useMemo(() => {
    return new PlaneGeometry(logo.size * 2, logo.size * 2);
  }, [logo.size]);

  // Material
  const material = useMemo(() => {
    if (currentTexture) {
      return new THREE.MeshStandardMaterial({
        map: currentTexture,
        transparent: true,
        opacity: 0.95,
        side: DoubleSide,
        emissive: new THREE.Color(logo.color),
        emissiveIntensity: 0.2,
        roughness: 0.1,
        metalness: 0.9,
        alphaTest: 0.01,
      });
    }

    return new THREE.MeshStandardMaterial({
      color: logo.color,
      emissive: new THREE.Color(logo.color),
      emissiveIntensity: 0.3,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.9,
      side: DoubleSide,
    });
  }, [currentTexture, logo.color]);

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      const time = state.clock.elapsedTime;

      // Calculate wandering movement
      const wander = wanderingPattern(time);

      // Update velocity with wandering
      velocity.x += wander.x * 0.01;
      velocity.y += wander.y * 0.01;
      velocity.z += wander.z * 0.01;

      // Limit maximum speed
      velocity.clampLength(0, logo.speed * 1.5);

      // Update position with velocity
      const newPosition = currentPosition.clone().add(velocity);
      setCurrentPosition(newPosition);

      // Bounce off boundaries
      const bounds = { x: 35, y: 25, z: 35 };
      if (Math.abs(newPosition.x) > bounds.x) velocity.x = -velocity.x * 0.9;
      if (Math.abs(newPosition.y) > bounds.y) velocity.y = -velocity.y * 0.9;
      if (Math.abs(newPosition.z) > bounds.z) velocity.z = -velocity.z * 0.9;

      // Apply position
      groupRef.current.position.copy(newPosition);

      // Always face camera with slight offset for natural look
      const lookAtPosition = state.camera.position.clone();
      lookAtPosition.y += Math.sin(time * 0.2 + index) * 2;
      groupRef.current.lookAt(lookAtPosition);

      // Gentle rotation
      meshRef.current.rotation.z = Math.sin(time * 0.1 + index) * 0.2;

      // Hover effect
      const hoverScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(hoverScale, hoverScale, 1),
        0.1
      );

      // Gentle pulsing
      const pulse = Math.sin(time * 0.3 + index) * 0.05 + 1;
      meshRef.current.scale.multiplyScalar(pulse);

      // Add some turbulence
      const turbulence = Math.sin(time * 0.5 + index) * 0.01;
      meshRef.current.position.x = turbulence;
      meshRef.current.position.y = Math.cos(time * 0.3 + index) * 0.01;
    }
  });

  return (
    <group
      ref={groupRef}
      position={initialPosition}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main logo */}
      <mesh
        ref={meshRef}
        geometry={geometry}
        material={material}
        castShadow
        receiveShadow
      />

      {/* Hover effects */}
      {hovered && (
        <>
          <mesh position={[0, 0, -0.02]}>
            <planeGeometry args={[logo.size * 2.3, logo.size * 2.3]} />
            <meshBasicMaterial
              color={logo.color}
              transparent
              opacity={0.4}
              side={DoubleSide}
            />
          </mesh>

          {/* Glowing trail effect */}
          {Array.from({ length: 5 }).map((_, i) => (
            <mesh
              key={i}
              position={[0, 0, -0.03 - i * 0.02]}
              scale={1 - i * 0.1}
            >
              <planeGeometry args={[logo.size * 2.1, logo.size * 2.1]} />
              <meshBasicMaterial
                color={logo.color}
                transparent
                opacity={0.2 - i * 0.04}
                side={DoubleSide}
              />
            </mesh>
          ))}
        </>
      )}

      {/* Light */}
      <pointLight
        color={logo.color}
        intensity={hovered ? 1 : 0.3}
        distance={15}
        position={[0, 0, 3]}
      />

      {/* Trail particles - FIXED */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array(
                Array.from({ length: 30 }).flatMap((_, i) => [
                  (Math.random() - 0.5) * 0.5,
                  (Math.random() - 0.5) * 0.5,
                  -Math.random() * 0.5,
                ])
              ),
              3,
            ]}
            count={10}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color={logo.color}
          transparent
          opacity={0.3}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

function BackgroundParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 3000;

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Random position in a very large space
      positions[i3] = (Math.random() - 0.5) * 120;
      positions[i3 + 1] = (Math.random() - 0.5) * 80;
      positions[i3 + 2] = (Math.random() - 0.5) * 120;

      // Random velocity
      velocities[i3] = (Math.random() - 0.5) * 0.05;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.05;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.05;

      // Random color
      const logo = logos[Math.floor(Math.random() * logos.length)];
      const color = new THREE.Color(logo.color);

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return { positions, colors, velocities };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const geometry = particlesRef.current.geometry;
      const positions = geometry.attributes.position.array as Float32Array;
      const velocities = particles.velocities;

      // Move particles
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];

        // Wrap around boundaries
        if (Math.abs(positions[i3]) > 60) velocities[i3] = -velocities[i3];
        if (Math.abs(positions[i3 + 1]) > 40)
          velocities[i3 + 1] = -velocities[i3 + 1];
        if (Math.abs(positions[i3 + 2]) > 60)
          velocities[i3 + 2] = -velocities[i3 + 2];
      }

      geometry.attributes.position.needsUpdate = true;

      // Slow rotation
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.005;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.15}
        sizeAttenuation
      />
    </points>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null);
  const [connections, setConnections] = useState<Float32Array>(
    new Float32Array()
  );

  // Create connections between logos that get close
  useFrame((state) => {
    if (linesRef.current) {
      // We'll create dynamic connections based on proximity
      // For now, just rotate slowly
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  // Create a web of lines in the background
  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[
            new Float32Array(
              Array.from({ length: 200 }).flatMap(() => [
                (Math.random() - 0.5) * 80,
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 80,
                (Math.random() - 0.5) * 80,
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 80,
              ])
            ),
            3,
          ]}
          count={200}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#6366f1"
        transparent
        opacity={0.08}
        linewidth={1}
      />
    </lineSegments>
  );
}

export default function CodeBackground() {
  const { camera, scene } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const [textures, setTextures] = useState<THREE.Texture[]>([]);
  const [texturesLoaded, setTexturesLoaded] = useState(false);

  // Load textures
  useEffect(() => {
    const loadAllTextures = async () => {
      const texturePromises = logos.map((logo) =>
        loadTexture(logo.path, logo.name, logo.color)
      );

      try {
        const loadedTextures = await Promise.all(texturePromises);
        setTextures(loadedTextures);
        setTexturesLoaded(true);
      } catch (error) {
        console.error("Error loading textures:", error);
        const fallbackTextures = logos.map((logo) =>
          createFallbackTexture(logo.color, logo.name)
        );
        setTextures(fallbackTextures);
        setTexturesLoaded(true);
      }
    };

    loadAllTextures();
  }, []);

  // Set up scene with larger bounds
  useEffect(() => {
    camera.position.set(0, 0, 45);
    camera.lookAt(0, 0, 0);

    scene.background = new THREE.Color(0x0a0a0a);
  }, [camera, scene]);

  useFrame((state) => {
    if (groupRef.current) {
      // Very slow camera movement to show different angles
      const time = state.clock.elapsedTime;
      camera.position.x = Math.sin(time * 0.03) * 10;
      camera.position.y = Math.cos(time * 0.02) * 5;
      camera.position.z = 45 + Math.sin(time * 0.01) * 5;
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      {/* Enhanced lighting for large space */}
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[30, 30, 30]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
      />
      <pointLight position={[-30, -20, -30]} intensity={0.6} color="#8b5cf6" />
      <pointLight position={[30, 20, 30]} intensity={0.6} color="#06b6d4" />
      <pointLight position={[0, 40, 0]} intensity={0.4} color="#ffffff" />
      <hemisphereLight groundColor="#1a1a2e" intensity={0.4} />

      <group ref={groupRef}>
        {/* Loading placeholders */}
        {!texturesLoaded &&
          logos.map((logo, index) => (
            <mesh
              key={logo.name}
              position={[
                (Math.random() - 0.5) * 60,
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 60,
              ]}
            >
              <planeGeometry args={[logo.size * 2, logo.size * 2]} />
              <meshBasicMaterial
                color={logo.color}
                transparent
                opacity={0.3}
                side={DoubleSide}
              />
            </mesh>
          ))}

        {/* Actual logos */}
        {texturesLoaded &&
          logos.map((logo, index) => (
            <LogoPlane
              key={`${logo.name}-${index}`}
              logo={logo}
              index={index}
              texture={textures[index]}
            />
          ))}

        {/* Background particles */}
        <BackgroundParticles />

        {/* Connection lines */}
        <ConnectionLines />
      </group>

      {/* Large transparent boundaries for visual reference */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[80, 50, 80]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.03}
        />
      </mesh>
    </>
  );
}

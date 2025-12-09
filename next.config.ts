import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    turbo: {
      rules: {
        "*.glb": ["file-loader"],
        "*.gltf": ["file-loader"],
      },
    },
  },
  webpack: (config, { isServer }) => {
    // GLTF/GLB loader
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: "asset/resource",
    });

    // Shader files
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      type: "asset/source",
    });

    return config;
  },
};

export default nextConfig;

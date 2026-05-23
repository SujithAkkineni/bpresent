import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  turbopack: {
    // Ensure Turbopack resolves the correct workspace root on Vercel
    root: "./",
  },
};

export default nextConfig;

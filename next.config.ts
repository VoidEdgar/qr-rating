import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensures proper deployment on Vercel
  trailingSlash: true, // Helps with routing issues
};

export default nextConfig;

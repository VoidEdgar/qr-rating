/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for static deployment
  trailingSlash: true, // Fixes routing issues
};

export default nextConfig;

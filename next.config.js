/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",

  eslint: {
    // Allows production builds even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

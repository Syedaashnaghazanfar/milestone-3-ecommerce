import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '', // Leave empty if no specific port is used
        pathname: '/images/**', // Adjust based on your image paths
      },
    ],
  },
};

export default nextConfig;

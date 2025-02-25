import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },{
        protocol: 'https',
        hostname: 'img-s-msn-com.akamaized.net'
      },
      {
        protocol: 'https',
        hostname: 'aceternity.com'
      },
      {
        protocol: 'https',
        hostname: "images.unsplash.com"
      },{
        protocol: 'https',
        hostname: "assets.aceternity.com"
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

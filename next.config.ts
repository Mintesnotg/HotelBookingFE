import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  transpilePackages: ['next-auth']

};

module.exports = nextConfig;
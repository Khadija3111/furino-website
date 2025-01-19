import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  },
  webpack(config) {
    console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
    console.log('Token:', process.env.SANITY_API_TOKEN);
    return config;
  },
};

export default nextConfig;

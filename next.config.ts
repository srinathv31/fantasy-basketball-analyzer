import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sleepercdn.com",
        port: "",
        pathname: "/avatars/thumbs/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;

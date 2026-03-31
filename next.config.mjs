/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "", // empty
        pathname: "/**", // allow all paths
      },
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;

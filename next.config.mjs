/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: ["res.cloudinary.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

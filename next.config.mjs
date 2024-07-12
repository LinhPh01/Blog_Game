/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    domains: ["res.cloudinary.com"],
  },
  images: {
    unoptimized: true,
  },

  // output: "export",
};

export default nextConfig;

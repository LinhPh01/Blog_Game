/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  output: "export",
  rules: {
    "rule-name-to-disable": "off",
    // add more rules here as needed
  },
};

export default nextConfig;

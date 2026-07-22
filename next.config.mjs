/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site — every route is prerendered at build time.
  output: "export",
  trailingSlash: false,
  images: { unoptimized: true },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  images: {
    // domains: ['dummyimage.com'],
    // loader: 'custom',
    // loaderFile: './imgLoader/ImageLoader.js',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.physio.co.uk",
        port: "",
        // pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        // pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "www.dummyimage.com",
        port: "",
        // pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        // pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['dummyimage.com'],
    // loader: 'custom',
    // loaderFile: './imgLoader/ImageLoader.js',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.physio.co.uk",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "www.dummyimage.com",
        port: "",
        // pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;

/** @type {import("next").NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/h60/**",
      },
    ],
  }
}

module.exports = nextConfig

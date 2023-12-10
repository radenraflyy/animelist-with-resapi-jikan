/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net"
      },
      {
        hostname: "avatars.githubusercontent.com"
      },
      {
        hostname: "i.scdn.co"
      }
    ]
  }
}

module.exports = nextConfig

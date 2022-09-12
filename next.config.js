const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching
})

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = withPWA({
  nextConfig
})

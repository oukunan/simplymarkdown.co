const withPlugins = require('next-compose-plugins')
const removeImports = require('next-remove-imports')()

const nextConfig = {
  env: {},
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
module.exports = withPlugins([], removeImports(nextConfig))

/** @type {import('next').NextConfig} */
const webpack = require("webpack"); // Note: using require here

const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      "stream/web": false,
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      url: require.resolve("url/"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      assert: require.resolve("assert/"),
      buffer: require.resolve("buffer/"),
    };

    // Add this plugin to provide Buffer globally
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      })
    );

    return config;
  },
};

module.exports = nextConfig; // Note: using module.exports instead of export default

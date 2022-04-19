/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withTM = require("next-transpile-modules")(["mongoose", "node-fetch"]);

module.exports = withPlugins([withTM], {
  reactStrictMode: true,
  env: {
    mongodburl: "mongodburl",
  }, 
})

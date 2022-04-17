/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    mongodburl: "mongodburl",
  }, 
}

// const withTM = require('next-transpile-modules'); // pass the modules you would like to see transpiled
// module.exports = withTM({});


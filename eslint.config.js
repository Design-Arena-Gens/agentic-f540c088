const nextConfig = require("eslint-config-next");

const config = [
  ...nextConfig,
  {
    ignores: ["node_modules", ".next", "public"]
  }
];

module.exports = config;

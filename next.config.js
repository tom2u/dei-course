const localesConfig = require("./locales.json");
module.exports = {
  target: "serverless",
  i18n: localesConfig,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }
    return config;
  },
};

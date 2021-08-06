const localesConfig = require("./locales.json");
module.exports = {
  target: "serverless",
  i18n: localesConfig,
  options: {
    dist: "out_publish",
  },
};
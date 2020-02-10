const postcssPresetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");
const postcssNormalize = require("postcss-normalize");
const postcssCalc = require("postcss-calc");
const postcssImport = require("postcss-import");

module.exports = {
  plugins: [
    postcssImport(),
    postcssNormalize(),
    postcssPresetEnv({ stage: 0 }),
    autoprefixer(),
    postcssCalc()
  ]
};

const animation = require("./src/assets/tailwindDesignSystem/animations");
const buttons = require("./src/assets/tailwindDesignSystem/buttons");
const colors = require("./src/assets/tailwindDesignSystem/colors");
const inputs = require("./src/assets/tailwindDesignSystem/inputs");
const global = require("./src/assets/tailwindDesignSystem/global");
const datepicker = require("./src/assets/tailwindDesignSystem/datepicker");
const paginator = require("./src/assets/tailwindDesignSystem/paginator");
const tables = require("./src/assets/tailwindDesignSystem/tables");



module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: colors,
    },
    screens: {
      xsmall: { max: '599.98px' },
      small: { min: '600px', max: '959.98px' },
      medium: { min: '960px', max: '1279.98px' },
      large: { min: '1280px', max: '1919.98px' },
      xlarge: { min: '1920px' },
      handset: [
        { raw: '(max-width: 599.98px) and (orientation: portrait)' },
        { raw: '(max-width: 959.98px) and (orientation: landscape)' },
      ],
      tablet: [
        { raw: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)' },
        { raw: '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)' },
      ],
      web: [
        { raw: '(min-width: 840px) and (orientation: portrait)' },
        { raw: '(min-width: 1280px) and (orientation: landscape)' },
      ],
      handsetPortrait: { raw: '(max-width: 599.98px) and (orientation: portrait)' },
      tabletPortrait: { raw: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)' },
      webPortrait: { raw: '(min-width: 840px) and (orientation: portrait)' },
      handsetLandscape: { raw: '(max-width: 959.98px) and (orientation: landscape)' },
      tabletLandscape: { raw: '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)' },
      webLandscape: { raw: '(min-width: 1280px) and (orientation: landscape)' },
    },
    fontFamily: {
      sans: ["TiranTSP-Font", "sans-serif"],
      persinanNumber: ["IYekan", "sans-serif"],
    },
    boxShadow: {
      "custom-shadow": "0px 2px 5px 0px rgba(38, 51, 77, 0.03)",
      "custom-green-glow": "0px -2px 271px -3px rgba(195,240,235,1)",
      "counter-shadow": "0px 8px 16px 0px rgba(0, 0, 0, 0.10)",
      "header-shadow": "rgba(149, 157, 165, 2.42) 0px 8px 200px",
    },
    dropShadow: {
      "custom-green-glow": "0px -2px 271px -3px rgba(195,240,235,1)",
    },
    animation: animation,
  },

  plugins: [
    buttons,
    inputs,
    global,
    datepicker,
    paginator,
    tables,
  ],
};

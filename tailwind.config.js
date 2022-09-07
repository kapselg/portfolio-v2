// eslint-disable-next-line @typescript-eslint/no-var-requires
const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? "build" : "watch";

module.exports = {
  prefix: "",
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,ts,css,scss,sass,less,styl}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': 'Lalezar, cursive',
      'body': 'Source Sans Pro, sans-serif'
    },
    extend: {
      colors: {
        'granat': "#121927",
        'szar': "#3D4454",
        'lod': "#B8BED2",
        'au': "#D8A31A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

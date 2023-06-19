const { blackA, whiteA } = require("@radix-ui/colors");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */

// function generateScaleOld(name) {
//   let scale = Array.from({ length: 12 }, (_, i) => {
//     let id = i + 1;
//     return [
//       [id, `var(--${name}${id})`],
//       [`a${id}`, `var(--${name}${id})`],
//     ];
//   }).flat();

//   return Object.fromEntries(scale);
// }

function generateScale() {
  let scale = Array.from({ length: 12 }, (_, i) => {
    let id = i + 1;
    return [[id, `var(--color${id})`], [`var(--color${id})`]];
  }).flat();

  return Object.fromEntries(scale);
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: {
        DEFAULT: "var(--primary)",
      },
      ...blackA,
      ...whiteA,
      ...colors,
      color: generateScale(),
    },
  },
  plugins: [],
  darkMode: "class",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue,ts}"],
  darkMode: ['class', '[data-mode="dark"]'], // or 'media' or 'class
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/line-clamp"), require("@tailwindcss/aspect-ratio"),
  ],
   safelist: [
    {
      pattern: /e-w-(full|auto)/,
      variants: ["lg", "md", "sm", "xs", "xl"],
    },
    {
      pattern: /e-grow/,
      variants: ["lg", "md", "sm", "xs", "xl"],
    },
    {
      pattern: /e-basis-(\d{1,2}\/\d{1,2}|full|auto|0)/,
      variants: ["lg", "md", "sm", "xs", "xl"],
    },
    {
      pattern: /^!?e-max-w-(\d{1,2}\/\d{1,2})/,
      variants: ["lg", "md", "sm", "xs", "xl"],
    },
    {
      pattern: /e-offset-(1[0-2]|[1-9])/,
      variants: ["lg", "md", "sm", "xs", "xl"],
    },
    {
      pattern: /e-items-(start|center|end|baseline|stretch)/,
    },
    {
      pattern: /e-self-(start|center|end|baseline|stretch)/,
    },
    {
      pattern:
        /e-justify-(around|between|center|end|evenly|normal|start|stretch)/,
      variants: ["lg", "md", "sm", "xs", "xl"],
    },
    {
      pattern:
        /e-content-(around|baseline|between|center|end|evenly|normal|start|stretch)/,
    },
  ],
}


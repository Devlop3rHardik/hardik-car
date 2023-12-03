/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f6f7f9",
        gray: {
          "100": "#1a202c",
          "200": "#131313",
        },
        lightslategray: "#90a3bf",
        royalblue: {
          "100": "#3563e9",
          "200": "rgba(53, 99, 233, 0.3)",
        },
        white: "#fff",
        lightsteelblue: "rgba(195, 212, 233, 0.4)",
        cornflowerblue: {
          "100": "#5caffc",
          "200": "rgba(92, 175, 252, 0.3)",
        },
        steelblue: "#3d5278",
      },
      spacing: {},
      fontFamily: {
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "8xs-5": "4.5px",
        "xs-2": "11.2px",
        "59xl-6": "78.6px",
        "82xl": "101px",
        "48xl-4": "67.4px",
      },
    },
    fontSize: {
      "sm-5": "13.5px",
      lg: "18px",
      "3xl-5": "22.5px",
      "7xl-9": "26.9px",
      "base-7": "15.7px",
      inherit: "inherit",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

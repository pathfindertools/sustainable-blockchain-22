const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: false,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  variants: {
    extend: {
      margin: ['first', 'last'],
    }
  },
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "var(--primary-color)",
      accent1: "var(--accent1-color)",
      accent2: "var(--accent2-color)",
      accent3: "var(--accent3-color)",
      accent4: "var(--accent4-color)",
      black: "var(--black-color)",
      white: "var(--white-color)",
      "gray-light": "var(--gray-light-color)",
      gray: "var(--gray-color)",
      "gray-dark": "var(--gray-dark-color)",
      tina: {
        primary: "var(--tina-color-primary)",
        error: "var(--tina-color-error)",
        warning: "var(--tina-color-warning)",
        success: "var(--tina-color-success)",
        gray0: "var(--tina-color-grey-0)",
        gray1: "var(--tina-color-grey-1)",
        gray2: "var(--tina-color-grey-2)",
        gray3: "var(--tina-color-grey-3)",
        gray4: "var(--tina-color-grey-4)",
        gray5: "var(--tina-color-grey-5)",
        gray6: "var(--tina-color-grey-6)",
        gray7: "var(--tina-color-grey-7)",
        gray8: "var(--tina-color-grey-8)",
        gray9: "var(--tina-color-grey-9)",
        gray10: "var(--tina-color-grey-10)",
      }
    },
    screens: {
			lg: { max: "1000px" },
			md: { max: "800px" },
			sm: { max: "700px" },
		},
    fontSize: {
      xs: [ "var(--text-size-xs)", { lineHeight: "var(--text-leading-xs)" }],
      sm: [ "var(--text-size-sm)", { lineHeight: "var(--text-leading-sm)" }],
      base: [ "var(--text-size-md)", { lineHeight: "var(--text-leading-md)" }],
      lg: [ "var(--text-size-lg)", { lineHeight: "var(--text-leading-lg)" }],
      xl: [ "var(--text-size-xl)", { lineHeight: "var(--text-leading-xl)" }],
      '2xl': [ "var(--text-size-2xl)", { lineHeight: "var(--text-leading-2xl)" }],
      '3xl': [ "var(--text-size-3xl)", { lineHeight: "var(--text-leading-3xl)" }],
      '4xl': [ "var(--text-size-4xl)", { lineHeight: "var(--text-leading-4xl)" }],
      '5xl': [ "var(--text-size-5xl)", { lineHeight: "var(--text-leading-5xl)" }],
      '6xl': [ "var(--text-size-6xl)", { lineHeight: "var(--text-leading-6xl)" }],
      '7xl': [ "var(--text-size-7xl)", { lineHeight: "var(--text-leading-7xl)" }],
      '8xl': [ "var(--text-size-8xl)", { lineHeight: "var(--text-leading-8xl)" }],
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      textDecoration: ["active"],
      opacity: {
        7: ".075",
        15: ".15",
      },
      margin: {
        "edge": "calc((100% - 1000px) * .5)",
      },
      maxWidth: {
        "1/5": "200px",
        "1/4": "250px",
        "1/3": "333px",
        "1/2": "500px",
        "2/3": "666px",
        "3/4": "750px",
        "4/5": "800px",
        "desktop-full": "1000px",
        "desktop-half": "500px",
        "lg-20": "200px",
        "lg-25": "250px",
        "lg-33": "333px",
        "lg-50": "500px",
        "lg-66": "666px",
        "lg-75": "750px",
        "lg-80": "800px",
        "lg-100": "1000px",
      },
      minHeight: {
        "100": "25rem",
        "120": "30rem",
        "140": "35rem",
        "160": "40rem",
        "180": "45rem",
        "200": "50rem",
      },
      spacing: {
        128: "32rem",
      },
      zIndex: {
        "-2": "-2",
        "-1": "-1",
      },
      fontFamily: {
        '1': ["var(--font1)", "sans-serif"],
        '2': ["var(--font2)", "sans-serif"],
        '3': ["var(--font3)", "sans-serif"],
        '4': ["var(--font4)", "sans-serif"]
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

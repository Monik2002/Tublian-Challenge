/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderGradientColors: {
        custom: "linear-gradient(109.15deg, #FBDA61 0%, #FF5ACD 100%)",
      },
      colors: {
        "base-900-light": "#121212",
        "base-50-dark": "#1e1e1e",
        "base-100-dark": "#292929",
        "base-200-dark": "#414141",
        "base-900-dark": "#fefefe",
        "base-700-dark-tertiary": "#b7b7b7",
        "primary-gold-300": "#fdd649",
        "base-500-dark-secondary": "#888",
        gainsboro: {
          100: "#e6e6e6",
          200: "rgba(230, 230, 230, 0.09)",
        },
        dimgray: {
          100: "#5c5c5c",
          200: "#525252",
        },
        khaki: "#fbda61",
        custom: "linear-gradient(109.15deg, #FBDA61 0%, #FF5ACD 100%)",
        goldenrod: {
          100: "#e0c247",
          200: "rgba(224, 194, 71, 0.09)",
        },
        "base-gray-400-dark": "#747474",
        white: "#fff",
        "browser-ui-dark-bg": "rgba(61, 61, 61, 0.94)",
        gray: "rgba(255, 255, 255, 0.2)",
        lightgreen: "#67ce67",
      },
      spacing: {},
      fontFamily: {
        "text-xsm-font-bold": "'Space Grotesk'",
        "sf-compact-display": "'SF Compact Display'",
        "sf-pro-text": "'SF Pro Text'",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "11xl": "30px",
        "8xs": "5px",
        "32xl": "51px",
        "6xl": "25px",
      },
    },
    fontSize: {
      xs: "0.75rem",
      lg: "1.125rem",
      base: "1rem",
      sm: "0.875rem",
      xl: "1.25rem",
      "base-7": "0.981rem",
      inherit: "inherit",
    },
    screens: {
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq465: {
        raw: "screen and (max-width: 465px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq390: {
        raw: "screen and (max-width: 390px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

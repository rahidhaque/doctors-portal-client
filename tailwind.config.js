module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  screens: {
    '2xl': { 'max': '1535px' },
    // => @media (max-width: 1535px) { ... }

    'xl': { 'max': '1279px' },
    // => @media (max-width: 1279px) { ... }

    'lg': { 'max': '1023px' },
    // => @media (max-width: 1023px) { ... }

    'md': { 'max': '767px' },
    // => @media (max-width: 767px) { ... }

    'sm': { 'max': '639px' },
    // => @media (max-width: 639px) { ... }
  },
  plugins: [require("daisyui")],
}
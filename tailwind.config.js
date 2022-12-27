/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "bg-btn": "rgba(246, 246, 246, 0.5)",
      },
      height: {
        "h-200": "50rem",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

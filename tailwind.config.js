/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        "custom-gradient-from": "#ff0000",
        "custom-gradient-to": "#00ff00",
      }),
      linearGradient: (theme) => ({
        "custom-gradient": [
          theme("custom-gradient-from"),
          theme("custom-graident-to"),
        ],
      }),
    },
  },
  plugins: [],
};

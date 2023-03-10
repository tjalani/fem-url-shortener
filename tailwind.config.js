/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        darkviolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        grayishviolet: "hsl(257, 7%, 63%)",
        verydarkblue: "hsl(255, 11%, 22%)",
        verydarkviolet: "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};

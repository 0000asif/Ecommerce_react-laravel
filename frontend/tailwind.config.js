/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        white: '#fff',
        black: '#000',
        soft_blue: '#43c3D1',
        blue: '#0284FF',
        dark_blue: '#061123',
        soft_green: '#2F4858',
      },
    },
  },
  plugins: [],
};
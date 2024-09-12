/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        title:["Dosis"],

      },
      backgroundImage: {
        "primary":"linear-gradient(to left, var(--primary-gradient-1), var(--primary-gradient-2))",
        'primary-hover': 'linear-gradient(to left, rgba(255, 185, 210, 0.1), rgba(187, 155, 255, 0.1))',
      },
    },
    plugins: [],
  },
};

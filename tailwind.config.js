// import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    // flowbite.content(),
  ],
  theme: {
    extend: {
      // screens: {
      //   sm: "480px",
      //   md: "768px",
      //   lg: "976px",
      //   xl: "1440px",
      // },
      colors: {
        "primary": "#5700AD",
        "secondary":"#3F83F8",
        "black":"#000000",
        "primary-bg": "#FCECFE",
        "secondary-bg": "#F7F8FA",
        "icon-bg": "#DEDEDE",
      },
      fontFamily: {
        sans: ['Montserrat','Product Sans','sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

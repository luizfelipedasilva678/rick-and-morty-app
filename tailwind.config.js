/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/container/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#13293D',
      },
      screens: {
        sm: { max: '1200px' },
        xsm: { max: '640px' },
        x1sm: { max: '500px' },
        x2sm: { max: '280px' },
      },
    },
  },
  plugins: [],
};

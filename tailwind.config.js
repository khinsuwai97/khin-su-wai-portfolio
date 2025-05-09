/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        euro: ['var(--font-eurostile-webfont)', 'sans-serif'],
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
      colors: {
        primary: '	#0e0e17',
        blueColor: '#0E7490',
        blueColor1: '#062e3a',
        blueColor2: '#26829b',
        sidbarBg: '#fffffff7',
        navBg: 'rgba(255, 255, 255, 0.97)',
        navBgDark: 'rgba(	14, 14, 23,0.97)',
        bgContactDark: '#0b0b12',
        bgContact: '#e7f1f4',
      },
    },
  },
  plugins: [],
};

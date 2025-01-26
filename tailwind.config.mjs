/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        inter:['var(--font-inter','sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        smokeWhite:'#ebf1f5',
        blck:"#070707",
        gry:'#9ba1a0',
      },
      backgroundImage:{
        grid1:"url('../assets/images/grid1.svg')",
        pattern2:"url('../assets/images/pattern-02.svg')",
        pattern3:"url('../assets/images/pattern-06.svg')",
        pattern4:"url('../assets/images/pattern-09.svg')",
        pattern5:"url('../assets/images/pattern-10.svg')",
      }
    },
  },
  plugins: [],
};

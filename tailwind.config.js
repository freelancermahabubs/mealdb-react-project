/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#4dcc84",
        
"secondary": "#6af7d6",
        
"accent": "#5ccece",
        
"neutral": "#241F28",
        
"base-100": "#F7F7F8",
        
"info": "#45ADC9",
        
"success": "#18CD7F",
        
"warning": "#F79E45",
        
"error": "#F5615C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


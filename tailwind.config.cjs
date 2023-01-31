/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        verde: '#118C53',
        blanco: '#ffff',
        gris: '#515659',
        enlace:'#1473e6',
        amarillo: '#F2C84B',
        camara:'#61788C',
        fondo1:'#F0F0F2',
        fondo2:'#E3E3E6',
        fondo3:'#141E26'
      }
    },    
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fundo: "#E6F0FA",     // azul suave
        primario: "#1E3A8A",  // azul royal
        secundario: "#2563EB",// azul mid
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 💡 Assurez-vous que cette liste contient tous les chemins vers vos fichiers HTML/JS/etc.
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './*.html', // Exemple si votre index est à la racine
  ],
  theme: {
    // Utilisez 'extend' pour ajouter des éléments sans écraser les utilitaires par défaut de Tailwind
    extend: {
      // --- ✍️ Familles de Polices (Génère des classes comme 'font-titan')
      fontFamily: {
        // Nom de la classe: Référence à la variable CSS
        'titan': 'var(--ff-titan)',
        'pompiere': 'var(--ff-pompiere)',
      },
      
      // --- 🎨 Couleurs (Génère des classes comme 'bg-impossible', 'text-impossible', 'border-impossible')
      colors: {
        // Nom de la classe: Référence à la variable CSS
        'toto': 'var(--clr-light-green)',
        // Vous pouvez ajouter d'autres couleurs ici, par exemple :
        // 'blanc-oklch': 'var(--clr-white)',
      },
      
    },
  },
  plugins: [],
}
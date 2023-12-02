/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/index.{js,ts,jsx,tsx,mdx}',
    './src/pages/objets.{js,ts,jsx,tsx,mdx}',
    './src/profile/[descricao].{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
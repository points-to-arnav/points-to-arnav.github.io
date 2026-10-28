import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://points-to-arnav.github.io', // <--- Add this line
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});

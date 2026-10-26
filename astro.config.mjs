
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://points-to-arnav.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://galeed.github.io',
  base: '/astro-tui-portfolio2',
  vite: {
    plugins: [tailwindcss()],
  },
});

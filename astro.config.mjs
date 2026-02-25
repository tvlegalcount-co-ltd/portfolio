// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Đọc site URL từ environment variable
  // - Development: sử dụng .env (http://localhost:4321)
  // - Production: sử dụng .env.production (https://www.tvlegalcount.com)
  site: import.meta.env.PUBLIC_SITE_URL || 'http://localhost:4321',

  vite: {
    plugins: [tailwindcss()]
  }
});

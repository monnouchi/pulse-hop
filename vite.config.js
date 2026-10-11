import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
const notice=readFileSync(new URL('./public/THIRD_PARTY_NOTICES.txt',import.meta.url),'utf8');
export default defineConfig({base:'./',esbuild:{legalComments:'inline'},build:{outDir:'dist',rollupOptions:{output:{banner:`/*!\n${notice}*/`}}}});

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import { cloudflare } from "@cloudflare/vite-plugin"

// https://vite.dev/config/
export default defineConfig({
	server: {
		host:'0.0.0.0',
		proxy: {
			'/v1': {
			target: 'http://192.168.20.1',
			changeOrigin: true,
			rewrite: (path)=>path.replace('^/v1', '')
			},
		},
	},
	plugins: [
		vue(),
		// vueDevTools(),
		cloudflare()
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
	},
})

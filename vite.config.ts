import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		plugins: [react()],
		server: {
			// из-за ошибки CORS пришлось прокси использовать при попытке получить данные, такой способ получения данных работает
			proxy: {
				'/api': {
					target: process.env.VITE_API_URL,
					changeOrigin: true,
					secure: true,
				},
			},
		},
		resolve: {
			alias: {
				'@/shared': path.resolve(__dirname, './src/shared'),
				'@/components': path.resolve(__dirname, './src/components'),
			},
		},
	});
};

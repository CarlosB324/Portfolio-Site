import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import "firebase/app"
import "firebase/firestore/lite"

export default defineConfig({
	plugins: [
		react()
	],
	build: {
		rollupOptions: {
		  external: ['firebase/app , firebase/firestore/lite']
		}
	}
})
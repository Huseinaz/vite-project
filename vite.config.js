import { defineConfig } from "vite"
import eslint from "vite-plugin-eslint"

export default ({
    plugins: [eslint()]
})
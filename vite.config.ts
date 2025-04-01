import { defineConfig } from "vite";
import { readFileSync } from "fs";
import react from "@vitejs/plugin-react-swc";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { parse } from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = parse(readFileSync(resolve(__dirname, ".env")));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src") },
      { find: "@common", replacement: resolve(__dirname, "./common") },
      { find: /^~/, replacement: "" },
    ],
  },
  server: {
    host: "0.0.0.0",
    https: {},
    cors: true,
    proxy: {
      "^/(api|auth|header)/": {
        target: env.VITE_GATEWAY_URL,
        changeOrigin: true,
        autoRewrite: true,
        secure: false,
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync, existsSync } from "fs";
import { resolve } from "path";

// GitHub Pages: copia index.html para 404.html para rotas diretas funcionarem
function copy404Plugin() {
  return {
    name: "copy-404",
    closeBundle() {
      const outDir = resolve(__dirname, "dist");
      const index = resolve(outDir, "index.html");
      const notFound = resolve(outDir, "404.html");
      if (existsSync(index)) {
        copyFileSync(index, notFound);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copy404Plugin()],
  // Nome do repositório no GitHub (ex: github.com/usuario/plataforma_SAE → base: "/plataforma_SAE/")
  base: "/plataforma_SAE/",
});

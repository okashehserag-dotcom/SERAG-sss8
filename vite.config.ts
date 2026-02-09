import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/REPO_NAME/", // غيّرها لاسم الريبو تبعك بين / /
});


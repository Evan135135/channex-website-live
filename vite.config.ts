import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// Custom plugin to delete lovable-uploads from dist after build
// Logos are served from GitHub raw CDN instead, keeping the artifact small
function excludeLovableUploads() {
  return {
    name: "exclude-lovable-uploads",
    closeBundle() {
      const uploadsDir = path.resolve(__dirname, "dist/lovable-uploads");
      if (fs.existsSync(uploadsDir)) {
        fs.rmSync(uploadsDir, { recursive: true, force: true });
        console.log("✅ Removed dist/lovable-uploads (logos served from GitHub raw CDN)");
      }
      // Remove _redirects if present - SPA routing handled by wrangler.jsonc
      const redirectsFile = path.resolve(__dirname, "dist/_redirects");
      if (fs.existsSync(redirectsFile)) {
        fs.rmSync(redirectsFile);
        console.log("✅ Removed dist/_redirects (SPA routing handled by wrangler.jsonc)");
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    allowedHosts: true,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    mode === 'production' && excludeLovableUploads(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

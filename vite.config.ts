import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// Custom plugin to clean up dist after build:
// 1. Remove integration logos that are served from GitHub raw CDN (saves ~14 MB)
//    - These are referenced via raw.githubusercontent.com URLs in integrations.ts
//    - They do NOT need to be in the dist since they're fetched from GitHub CDN
// 2. Keep all other lovable-uploads files (logo, favicon, blog images, screenshots)
//    - These are referenced locally via /lovable-uploads/ paths
// 3. Remove _redirects if present - SPA routing is handled by wrangler.jsonc
function cleanupDist() {
  return {
    name: "cleanup-dist",
    closeBundle() {
      const distUploadsDir = path.resolve(__dirname, "dist/lovable-uploads");
      if (!fs.existsSync(distUploadsDir)) return;

      // Read integrations.ts to find CDN-served logos
      const integrationsPath = path.resolve(__dirname, "src/data/integrations.ts");
      const integrationsContent = fs.readFileSync(integrationsPath, "utf-8");
      const cdnLogoRegex = /raw\.githubusercontent\.com\/[^"]+\/lovable-uploads\/([^"]+)/g;
      const cdnLogos = new Set<string>();
      let match;
      while ((match = cdnLogoRegex.exec(integrationsContent)) !== null) {
        cdnLogos.add(match[1]);
      }

      // Remove only CDN-served logos from dist/lovable-uploads/
      let removed = 0;
      for (const file of cdnLogos) {
        const filePath = path.join(distUploadsDir, file);
        if (fs.existsSync(filePath)) {
          fs.rmSync(filePath);
          removed++;
        }
      }
      if (removed > 0) {
        console.log(`✅ Removed ${removed} CDN-served integration logos from dist/lovable-uploads/`);
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
    mode === 'production' && cleanupDist(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

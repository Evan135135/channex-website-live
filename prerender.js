// Simple prerendering script to inject H1 into built HTML
const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist', 'index.html');

if (fs.existsSync(distPath)) {
  let html = fs.readFileSync(distPath, 'utf-8');
  
  // Inject H1 and content into the root div for SEO
  const seoContent = `
    <h1 style="position: absolute; left: -9999px;">White-Label Channel Manager API for PMS Systems</h1>
    <div style="display: none;">
      <p>Connect your Property Management System to Booking.com, Airbnb, Expedia, and 50+ OTAs with Channex's modern REST API. White-label solution with 99.9% uptime SLA and sub-100ms response times.</p>
    </div>
  `;
  
  html = html.replace('<div id="root"></div>', `<div id="root">${seoContent}</div>`);
  
  fs.writeFileSync(distPath, html);
  console.log('✅ Prerendering complete: H1 injected for SEO');
} else {
  console.log('⚠️  dist/index.html not found, skipping prerender');
}

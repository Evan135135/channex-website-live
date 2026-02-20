import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove SEO fallback content before React hydrates
const rootElement = document.getElementById("root")!;
const seoContent = rootElement.querySelector('.seo-content');
if (seoContent) {
  seoContent.remove();
}

createRoot(rootElement).render(<App />);

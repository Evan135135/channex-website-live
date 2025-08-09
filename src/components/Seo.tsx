import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string; // full URL or path starting with '/'
  ogImage?: string;
  type?: string; // website | article
  structuredData?: any | any[]; // JSON-LD object(s)
  noindex?: boolean;
}

const BASE_URL = "https://channex.io"; // Keep consistent with index.html canonical

const ensureTag = (selector: string, create: () => HTMLElement) => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el as HTMLElement;
};

const Seo = ({ title, description, canonical, ogImage, type = "website", structuredData, noindex }: SeoProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Description
    if (description) {
      const metaDesc = ensureTag('meta[name="description"]', () => {
        const m = document.createElement('meta');
        m.setAttribute('name', 'description');
        return m;
      }) as HTMLMetaElement;
      metaDesc.setAttribute('content', description);
    }

    // Canonical
    const pathOrUrl = canonical || (typeof window !== 'undefined' ? window.location.pathname : '/');
    const canonicalUrl = pathOrUrl.startsWith('http') ? pathOrUrl : `${BASE_URL}${pathOrUrl}`;
    const linkCanonical = ensureTag('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    }) as HTMLLinkElement;
    linkCanonical.setAttribute('href', canonicalUrl);

    // Robots
    const robotsTag = ensureTag('meta[name="robots"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'robots');
      return m;
    }) as HTMLMetaElement;
    robotsTag.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph
    const setOG = (property: string, content: string) => {
      const og = ensureTag(`meta[property="${property}"]`, () => {
        const m = document.createElement('meta');
        m.setAttribute('property', property);
        return m;
      }) as HTMLMetaElement;
      og.setAttribute('content', content);
    };

    setOG('og:title', title);
    if (description) setOG('og:description', description);
    setOG('og:type', type);
    setOG('og:url', canonicalUrl);
    if (ogImage) setOG('og:image', ogImage);

    // Twitter
    const setTW = (name: string, content: string) => {
      const tw = ensureTag(`meta[name="${name}"]`, () => {
        const m = document.createElement('meta');
        m.setAttribute('name', name);
        return m;
      }) as HTMLMetaElement;
      tw.setAttribute('content', content);
    };

    setTW('twitter:card', 'summary_large_image');
    setTW('twitter:title', title);
    if (description) setTW('twitter:description', description);
    if (ogImage) setTW('twitter:image', ogImage);

    // Structured Data (JSON-LD)
    // Remove previous injected JSON-LD blocks from this component
    document.querySelectorAll('script.ld-json-seo').forEach((n) => n.parentNode?.removeChild(n));

    const dataArray = Array.isArray(structuredData) ? structuredData : (structuredData ? [structuredData] : []);
    dataArray.forEach((data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'ld-json-seo';
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
    });
  }, [title, description, canonical, ogImage, type, structuredData, noindex]);

  return null;
};

export default Seo;

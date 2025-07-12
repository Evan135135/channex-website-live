import { BlogPost, BlogCategory } from "@/types/blog";

export const blogCategories: BlogCategory[] = [
  {
    id: "1",
    name: "Industry Insights",
    slug: "industry-insights",
    description: "Hotel tech trends and market analysis"
  },
  {
    id: "2", 
    name: "Integration Guides",
    slug: "integration-guides",
    description: "Technical tutorials and API documentation"
  },
  {
    id: "3",
    name: "Case Studies", 
    slug: "case-studies",
    description: "Success stories from our partners"
  },
  {
    id: "4",
    name: "Product Updates",
    slug: "product-updates", 
    description: "Feature announcements and changelog"
  },
  {
    id: "5",
    name: "Best Practices",
    slug: "best-practices",
    description: "Tips for hoteliers and developers"
  }
];

export const blogPosts: BlogPost[] = [];
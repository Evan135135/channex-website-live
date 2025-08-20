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

export const blogPosts: BlogPost[] = [
  {
    id: "airbnb-los-pricing-channex",
    title: "New Feature: Airbnb LOS Pricing Now Supported",
    slug: "airbnb-los-pricing-channex",
    excerpt: "Channex now supports Airbnb's Length of Stay (LOS) Pricing. Set different rates based on booking length to boost occupancy and optimize revenue.",
    content: `
      <h2>New Feature: Airbnb LOS Pricing Now Supported</h2>
      <p>We're excited to announce that Channex now supports Airbnb's LOS (Length of Stay) Pricing.</p>

      <h3>What is LOS Pricing?</h3>
      <p>LOS pricing allows you to set different rates depending on how many nights a guest stays. Instead of only having a single nightly price, you can reward longer bookings with better rates.</p>
      
      <p>For example:</p>
      <ul>
        <li>1 night = $200 per night</li>
        <li>2 nights = $180 per night</li>
        <li>5 nights = $160 per night</li>
      </ul>
      
      <p>This way, guests see a clear incentive to book longer stays, while you improve occupancy and revenue management.</p>

      <h3>Why Use LOS Pricing?</h3>
      <ul>
        <li><strong>Boost occupancy</strong> – encourage longer stays by offering discounts.</li>
        <li><strong>Increase revenue</strong> – optimize pricing for different stay lengths.</li>
        <li><strong>Stay competitive</strong> – align with how many professional hosts and hotels already price on Airbnb.</li>
        <li><strong>Reduce gaps</strong> – longer bookings mean fewer small gaps between reservations.</li>
      </ul>

      <h3>How It Works in Channex</h3>
      <p>Once LOS mode is enabled, Channex automatically generates a price matrix for Airbnb using your inventory and rate plans. This matrix matches check-in dates, length of stay, and number of guests to ensure the best offer is always displayed.</p>
      
      <p>Availability updates still sync instantly, but pricing sync runs every 6 hours due to the amount of data processed.</p>

      <h3>Getting Started</h3>
      <p>LOS Pricing is currently in BETA. To enable it on your account:</p>
      <ol>
        <li>Contact Channex support to activate LOS mode for your account.</li>
        <li>Switch your Airbnb channel from rate plan mode to LOS mode.</li>
        <li>Select the listings and rate plans you'd like to use with LOS pricing.</li>
      </ol>
      
      <p>That's it, your Airbnb listings will now sync with LOS pricing through Channex.</p>
    `,
    author: {
      name: "Channex Team",
      avatar: "/placeholder.svg",
      bio: "Actionable distribution tips and product guidance."
    },
    publishDate: "2025-08-20",
    category: blogCategories[3],
    tags: ["Airbnb", "LOS Pricing", "Length of Stay", "Channex", "Feature Update", "BETA"],
    featuredImage: "/lovable-uploads/578448c6-4f90-414e-bbbd-a0d0d3ee17f2.png",
    readTime: 3,
    metaDescription: "Channex now supports Airbnb's Length of Stay (LOS) Pricing in BETA. Learn how to set different rates based on booking length to boost occupancy and optimize revenue."
  },
  {
    id: "non-refundable-airbnb-channex",
    title: "How to Offer a Non-Refundable Discount on Airbnb with Channex",
    slug: "non-refundable-discount-airbnb-channex",
    excerpt: "Boost bookings, cut cancellations, and secure revenue by adding a non-refundable rate on Airbnb via Channex—set it up in minutes.",
    content: `
      <h2>How to Offer a Non-Refundable Discount on Airbnb with Channex</h2>
      <p>If you want to boost your Airbnb bookings and reduce last-minute cancellations, adding a non-refundable discount is one of the simplest and most effective tactics. Many travelers are happy to pay less in exchange for a no-refund policy, and for you, it means more committed guests and steadier cash flow.</p>

      <h3>Why Offer a Non-Refundable Discount?</h3>
      <ol>
        <li><strong>More Bookings</strong> – A lower price point catches the eye. Many guests sort Airbnb listings by price, so offering a reduced non-refundable rate can push your property higher up in filtered searches.</li>
        <li><strong>Fewer Cancellations</strong> – Because the booking is non-refundable, guests are less likely to cancel unless absolutely necessary. This helps you avoid empty calendar gaps.</li>
        <li><strong>Better Revenue Security</strong> – Even if the guest cancels, you still keep the payment — giving you more predictable income.</li>
        <li><strong>Competitive Advantage</strong> – If similar properties in your area don’t offer a cheaper non-refundable option, you can stand out without permanently lowering your standard rate.</li>
      </ol>

      <h3>Best Practices for Non-Refundable Discounts</h3>
      <ul>
        <li><strong>Set a Meaningful Discount</strong> – Make the savings attractive enough to influence booking decisions.</li>
        <li><strong>Offer Both Rates</strong> – Keep your standard flexible rate available for guests who prefer flexibility, so you don’t miss out on those bookings.</li>
        <li><strong>Highlight the Deal</strong> – Use your Airbnb listing description to clearly explain the discount and non-refund terms so guests know the value they’re getting.</li>
        <li><strong>Match It Across OTAs</strong> – If you’re also on Booking.com or Expedia, keep your non-refundable strategy consistent to avoid pricing mismatches.</li>
      </ul>

      <h3>How to Set Up a Non-Refundable Discount in Airbnb via Channex</h3>
      <p>Follow these steps to add a non-refundable discount to your Airbnb listings through Channex:</p>
      <ol>
        <li>Sign in to your Channex account.</li>
        <li>In the top navigation bar, select your property and then <em>Channels</em> page.</li>
        <li>Find the Airbnb channel and click <em>Edit</em>.</li>
        <li>Go to <em>Listing</em> tab and click <em>Actions</em> then <em>Booking Settings</em>.</li>
        <li>Find section called: <em>Non Refundable Price Factor</em>.</li>
        <li>Enter discount value. Example: <code>0.90</code> for 10% discount or <code>0.80</code> for 20%.</li>
        <li>Click <strong>Save</strong>.</li>
      </ol>
    `,
    author: {
      name: "Channex Team",
      avatar: "/placeholder.svg",
      bio: "Actionable distribution tips and product guidance."
    },
    publishDate: "2025-08-09",
    category: blogCategories[1],
    tags: ["Airbnb", "Channex", "Pricing", "Non-refundable", "Channel Manager"],
    featuredImage: "/lovable-uploads/9395960d-6320-483a-8f62-78c6ce80f67e.png",
    readTime: 4,
    metaDescription: "Learn how to add a non-refundable discount on Airbnb via Channex to boost bookings, reduce cancellations, and secure revenue in a few easy steps."
  }
];
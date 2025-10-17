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
    id: "staah-su-vs-channex-alternative",
    title: "Thinking about STAAH SU vs Channex? Let's have the real conversation.",
    slug: "staah-su-vs-channex-alternative",
    excerpt: "An honest, founder-to-founder comparison between STAAH SU and Channex. We'll talk about what we do differently, what matters for PMS partners, and how to decide if we're the right fit.",
    content: `
      <p>We'll be the first to say it.</p>
      
      <p>STAAH SU has been around longer. They have more OTA connections, especially smaller regional ones.</p>
      
      <p>Most PMS companies nod and tell us the same thing after that: <em>"That's fine — we only care about the big OTAs anyway."</em></p>
      
      <p>That's where the real comparison starts.</p>

      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e2e8f0;" />

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">Let's talk about what actually matters</h2>

      <h3 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #334155;">Q: So you don't have 100+ OTAs?</h3>
      <p>That's true — and deliberate. Over 90% of bookings come from the big five: Booking.com, Expedia, Airbnb, Agoda, and Trip.com. We focus on those first, keep them stable, and certify updates faster. You get reliability and speed, not clutter.</p>

      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e2e8f0;" />

      <h3 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #334155;">Q: How does your pricing work?</h3>
      <p>STAAH SU often charges per room or by hotel size. Channex keeps it simple — flat USD $7 per property per month. No hidden tiers, no usage math, no sales calls to change plans.</p>

      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e2e8f0;" />

      <h3 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #334155;">Q: Are you hotel-facing?</h3>
      <p>No. Channex exists for PMS companies only. We don't market to hotels, and we never compete with your customers. You stay in control.</p>

      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e2e8f0;" />

      <h3 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #334155;">Q: What about integration time?</h3>
      <p>Our API is modern REST + Webhooks. Most PMSs go live in weeks, not months. You get full documentation and a test sandbox. Your developers can move fast — and stay independent.</p>

      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e2e8f0;" />

      <h3 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #334155;">Q: Is Channex just a channel manager?</h3>
      <p>Connectivity is our foundation, not our ceiling. We also provide optional modules:</p>
      <ul>
        <li><strong>Payment Gateway</strong> – secure PCI pass-through to Stripe and others.</li>
        <li><strong>RatePanda (coming H1 2026)</strong> – simple AI-based daily auto-pricing.</li>
      </ul>
      <p>All under the same API. Add them when you're ready.</p>

      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e2e8f0;" />


      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">Common Questions</h2>

      <h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #334155;">Do you support local or regional OTAs?</h3>
      <p>Yes — we're adding them gradually based on partner demand. If a channel matters to your hotels, tell us — we'll prioritize it.</p>

      <h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #334155;">How hard is migration?</h3>
      <p>Most PMSs move properties over in 2 weeks or less using our migration toolkit. We help every step of the way.</p>

      <h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #334155;">Can we test before switching?</h3>
      <p>Of course — you can use our sandbox environment free while evaluating.</p>

      <h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #334155;">What's your uptime and support like?</h3>
      <p>Over 99.9% uptime with real-developer support via email and Slack. No ticket limbo.</p>

      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e2e8f0;" />

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">Ready to see if it fits?</h2>
      
      <p>We're happy to walk through your setup and estimate migration time. Just drop us a line — <a href="mailto:support@channex.io" style="color: #3b82f6; text-decoration: underline;">support@channex.io</a></p>
      
      <p><strong>Let's make your connectivity invisible, reliable, and yours.</strong></p>
    `,
    author: {
      name: "Evan Davies",
      avatar: "/placeholder.svg",
      bio: "Tech Entrepreneur. Founder of channex.io, the new secure hotel distribution system."
    },
    publishDate: "2025-10-17",
    category: blogCategories[0],
    tags: ["STAAH SU", "Alternative", "PMS", "Channel Manager", "API", "Integration", "Comparison"],
    featuredImage: "/lovable-uploads/staah-channex-comparison.png",
    readTime: 5,
    metaDescription: "Compare STAAH SU and Channex – modern API-first alternative for PMS connectivity with flat pricing, faster integration, and developer-friendly tools. Contact support@channex.io for a demo."
  },
  {
    id: "airbnb-review-tags-channex",
    title: "Unlocking the Power of Airbnb Review Tags for Your Property",
    slug: "airbnb-review-tags-channex",
    excerpt: "Discover how Airbnb's Review Tags provide detailed guest feedback insights through Channex's Reviews API, helping you improve your property and boost satisfaction.",
    content: `
      <p>At Channex.io, we are constantly evolving to bring innovative tools and features that empower property managers and hosts. Our latest addition is the integration of Airbnb's Review Tags through our Reviews API. This powerful new feature enables property managers to gather and leverage more specific feedback from guests, allowing you to enhance your offerings and deliver an exceptional stay experience.</p>

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">What Are Airbnb Review Tags?</h2>
      <p>Airbnb's Review Tags are additional labels that guests and hosts can use when leaving a review. These tags help to surface specific issues or highlight particular aspects of a property. For example, if a guest felt the property had excellent amenities but the check-in process could be improved, the tags provide a structured way to communicate these insights. By categorizing feedback, Review Tags make reviews more actionable and precise.</p>

      <figure style="margin: 2rem 0;">
        <img src="/lovable-uploads/airbnb-review-tags-rating.webp" alt="Airbnb review tags interface showing rating categories for house rules, communication, and cleanliness" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.12); border: 1px solid #e2e8f0;" />
        <figcaption style="text-align: center; margin-top: 0.75rem; color: #64748b; font-size: 0.875rem; font-style: italic;">Example of using tags to leave review for the guest</figcaption>
      </figure>

      <figure style="margin: 2rem 0;">
        <img src="/lovable-uploads/airbnb-review-tags-feedback.webp" alt="Airbnb guest feedback showing public and private feedback with positive tags" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.12); border: 1px solid #e2e8f0;" />
        <figcaption style="text-align: center; margin-top: 0.75rem; color: #64748b; font-size: 0.875rem; font-style: italic;">Example of guests using tags to leave a listing review</figcaption>
      </figure>

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">Why Review Tags Matter for Property Managers</h2>
      <p>Review Tags go beyond generic feedback by offering detailed insights into the guest experience. Here's how this feature benefits your property:</p>

      <ol>
        <li><strong>Pinpoint Improvement Areas</strong> – By analyzing tagged categories such as cleanliness, communication, amenities, or location, you can identify and address recurring issues more effectively.</li>
        <li><strong>Showcase Strengths</strong> – Positive tags can help you highlight your property's strengths, such as a beautiful view, modern facilities, or seamless check-in process. This is invaluable for marketing and building trust with potential guests.</li>
        <li><strong>Boost Guest Satisfaction</strong> – When guests see their feedback addressed through tangible improvements, it enhances their trust in your management and encourages repeat bookings.</li>
        <li><strong>Enhance Operational Efficiency</strong> – By categorising and prioritising feedback, you can focus your resources on areas that matter most to guests.</li>
      </ol>

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">How Channex Makes It Easy</h2>
      <p>Our integration of Airbnb Review Tags into the Channex platform ensures that property managers can easily access and analyze these insights. Here's what you can expect:</p>

      <ul>
        <li><strong>Centralized Feedback Management</strong> – View all review tags and guest comments in one convenient dashboard.</li>
        <li><strong>Data-Driven Decisions</strong> – Utilize analytics tools to track trends and patterns in guest feedback over time.</li>
        <li><strong>Proactive Communication</strong> – Respond to guest reviews with thoughtful replies, addressing specific concerns highlighted by the tags.</li>
      </ul>

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">Putting Review Tags to Work</h2>
      <p>Here are some practical ways to use Review Tags to improve your property:</p>

      <ul>
        <li><strong>Regular Audits</strong> – Conduct weekly or monthly reviews of tagged feedback to identify trends.</li>
        <li><strong>Training Opportunities</strong> – Use feedback categories to train staff on specific areas, like improving communication or cleanliness.</li>
        <li><strong>Tailored Marketing</strong> – Highlight positive tags in your property descriptions to attract more bookings.</li>
      </ul>

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">Stay Ahead with Channex</h2>
      <p>The integration of Airbnb's Review Tags is part of our commitment to help property managers stay ahead in the competitive hospitality landscape. By leveraging this feature, you can turn guest feedback into actionable strategies that enhance your property's reputation and profitability.</p>
    `,
    author: {
      name: "Evan Davies",
      avatar: "/placeholder.svg",
      bio: "Tech Entrepreneur. Founder of channex.io, the new secure hotel distribution system."
    },
    publishDate: "2025-10-04",
    category: blogCategories[4],
    tags: ["Airbnb", "Review Tags", "Guest Feedback", "Channex", "Property Management", "Reviews API"],
    featuredImage: "/lovable-uploads/review-tags-hero.png",
    readTime: 3,
    metaDescription: "Learn how Airbnb Review Tags through Channex's Reviews API help property managers gather detailed guest feedback to improve operations and boost satisfaction."
  },
  {
    id: "airbnb-los-pricing-channex",
    title: "New Feature: Airbnb LOS Pricing Now Supported",
    slug: "airbnb-los-pricing-channex",
    excerpt: "Channex now supports Airbnb's Length of Stay (LOS) Pricing. Set different rates based on booking length to boost occupancy and optimize revenue.",
    content: `
      <p>We're excited to announce that Channex now supports Airbnb's LOS (Length of Stay) Pricing.</p>

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">What is LOS Pricing?</h2>
      <p>LOS pricing allows you to set different rates depending on how many nights a guest stays. Instead of only having a single nightly price, you can reward longer bookings with better rates.</p>
      
      <p>For example:</p>
      <ul>
        <li>1 night = $200 per night</li>
        <li>2 nights = $180 per night</li>
        <li>5 nights = $160 per night</li>
      </ul>
      
      <p>This way, guests see a clear incentive to book longer stays, while you improve occupancy and revenue management.</p>

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">Why Use LOS Pricing?</h2>
      <ul>
        <li><strong>Boost occupancy</strong> – encourage longer stays by offering discounts.</li>
        <li><strong>Increase revenue</strong> – optimize pricing for different stay lengths.</li>
        <li><strong>Stay competitive</strong> – align with how many professional hosts and hotels already price on Airbnb.</li>
        <li><strong>Reduce gaps</strong> – longer bookings mean fewer small gaps between reservations.</li>
      </ul>

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">How It Works in Channex</h2>
      <p>Once LOS mode is enabled, Channex automatically generates a price matrix for Airbnb using your inventory and rate plans. This matrix matches check-in dates, length of stay, and number of guests to ensure the best offer is always displayed.</p>
      
      <p>Availability updates still sync instantly, but pricing sync runs every 6 hours due to the amount of data processed.</p>

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">Getting Started</h2>
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
    featuredImage: "/lovable-uploads/1c0d9073-b987-4554-b250-cd69e1bdf95a.png",
    readTime: 3,
    metaDescription: "Channex now supports Airbnb's Length of Stay (LOS) Pricing in BETA. Learn how to set different rates based on booking length to boost occupancy and optimize revenue."
  },
  {
    id: "non-refundable-airbnb-channex",
    title: "How to Offer a Non-Refundable Discount on Airbnb with Channex",
    slug: "non-refundable-discount-airbnb-channex",
    excerpt: "Boost bookings, cut cancellations, and secure revenue by adding a non-refundable rate on Airbnb via Channex—set it up in minutes.",
    content: `
      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">How to Offer a Non-Refundable Discount on Airbnb with Channex</h2>
      <p>If you want to boost your Airbnb bookings and reduce last-minute cancellations, adding a non-refundable discount is one of the simplest and most effective tactics. Many travelers are happy to pay less in exchange for a no-refund policy, and for you, it means more committed guests and steadier cash flow.</p>

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">Why Offer a Non-Refundable Discount?</h2>
      <ol>
        <li><strong>More Bookings</strong> – A lower price point catches the eye. Many guests sort Airbnb listings by price, so offering a reduced non-refundable rate can push your property higher up in filtered searches.</li>
        <li><strong>Fewer Cancellations</strong> – Because the booking is non-refundable, guests are less likely to cancel unless absolutely necessary. This helps you avoid empty calendar gaps.</li>
        <li><strong>Better Revenue Security</strong> – Even if the guest cancels, you still keep the payment — giving you more predictable income.</li>
        <li><strong>Competitive Advantage</strong> – If similar properties in your area don’t offer a cheaper non-refundable option, you can stand out without permanently lowering your standard rate.</li>
      </ol>

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">Best Practices for Non-Refundable Discounts</h2>
      <ul>
        <li><strong>Set a Meaningful Discount</strong> – Make the savings attractive enough to influence booking decisions.</li>
        <li><strong>Offer Both Rates</strong> – Keep your standard flexible rate available for guests who prefer flexibility, so you don’t miss out on those bookings.</li>
        <li><strong>Highlight the Deal</strong> – Use your Airbnb listing description to clearly explain the discount and non-refund terms so guests know the value they’re getting.</li>
        <li><strong>Match It Across OTAs</strong> – If you’re also on Booking.com or Expedia, keep your non-refundable strategy consistent to avoid pricing mismatches.</li>
      </ul>

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">How to Set Up a Non-Refundable Discount in Airbnb via Channex</h2>
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
  },
  {
    id: "airbnb-checkout-instructions-channex",
    title: "How to Manage Airbnb Checkout Instructions with Channex",
    slug: "airbnb-checkout-instructions-channex",
    excerpt: "Clear checkout instructions improve guest experience and save hosts time. Learn how to set up and manage Airbnb checkout tasks directly through Channex.",
    content: `
      <p>Clear checkout instructions can make a big difference for both guests and hosts. Guests leave with confidence, and hosts save time (and headaches) by avoiding misunderstandings about keys, trash, or other details.</p>

      <p>Airbnb encourages hosts to provide clear checkout tasks, but managing and updating these instructions can be a hassle—especially across multiple listings. That's why we built Checkout Tasks right into Channex.</p>

      <p>With just a few clicks, you can define exactly what guests need to do before leaving, and Channex syncs those instructions straight to Airbnb.</p>

      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e2e8f0;" />

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">Why Checkout Instructions Matter</h2>
      
      <ul>
        <li><strong>Better guest experience</strong> – Guests don't have to guess what's expected of them.</li>
        <li><strong>Less cleaning hassle</strong> – Simple tasks like taking out trash or placing towels in one spot speed up turnovers.</li>
        <li><strong>Peace of mind</strong> – Knowing doors are locked and appliances are off helps prevent damage or safety issues.</li>
      </ul>

      <p>Instead of sending last-minute messages, you can set everything up once in Channex and let it run automatically.</p>

      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e2e8f0;" />

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">How Checkout Tasks Work in Channex</h2>
      
      <p>Channex makes it simple. Go to your <strong>Channel Settings → Listing → Actions → Checkout Tasks</strong>. From there, you'll see a list of common instructions you can turn on or off.</p>

      <p><strong>You can:</strong></p>
      <ul>
        <li>Ask guests to return keys (and specify where, e.g. "Leave keys at reception")</li>
        <li>Remind them to switch off lights and appliances</li>
        <li>Request they take out trash</li>
        <li>Ensure they lock the doors</li>
        <li>Direct them to place towels in a specific spot</li>
        <li>Add any custom request you want</li>
      </ul>

      <p>Once saved, these instructions are automatically synced to Airbnb and shown to your guests at checkout.</p>

      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e2e8f0;" />

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">Example: A Simple Checkout Flow</h2>
      
      <p>Here's what a typical setup looks like:</p>
      <ol>
        <li>Guests leave the keys at reception.</li>
        <li>They take out trash to the main bins.</li>
        <li>They switch off the AC and lights.</li>
        <li>They lock the doors on the way out.</li>
      </ol>

      <p><em>No confusion. No follow-up messages. Just a smooth checkout.</em></p>

      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e2e8f0;" />

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">How to Edit Checkout Tasks in Channex</h2>
      
      <p>Setting up checkout instructions in Channex is straightforward:</p>
      
      <ol>
        <li><strong>Edit the Airbnb channel and go to Listings tab</strong></li>
        <li><strong>Find the listing you want to edit and click Actions > Checkout Tasks</strong></li>
        <li><strong>Check the boxes you are interested in and add custom text for your guest</strong></li>
      </ol>

      <figure style="margin: 2rem 0;">
        <img src="/lovable-uploads/72b04c70-76d3-4cfc-825b-3c012770e12e.png" alt="Channex Listings tab showing Actions dropdown with Checkout Tasks option" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.12); border: 1px solid #e2e8f0;" />
        <figcaption style="text-align: center; margin-top: 0.75rem; color: #64748b; font-size: 0.875rem; font-style: italic;">Navigate to your Airbnb channel settings and select Checkout Tasks from the Actions menu</figcaption>
      </figure>

      <figure style="margin: 2rem 0;">
        <img src="/lovable-uploads/ac556622-4248-4011-a160-c1ec25c6fa79.png" alt="Manage Checkout Tasks interface in Channex with various checkout options" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.12); border: 1px solid #e2e8f0;" />
        <figcaption style="text-align: center; margin-top: 0.75rem; color: #64748b; font-size: 0.875rem; font-style: italic;">Configure your checkout tasks with checkboxes and custom instructions for guests</figcaption>
      </figure>

      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e2e8f0;" />

      <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b;">Start Using Checkout Tasks Today</h2>
      
      <p>This feature is available now in Channex. Whether you manage one Airbnb or hundreds, it only takes a minute to set up, and your future self (and your cleaning team) will thank you.</p>
    `,
    author: {
      name: "Channex Team",
      avatar: "/placeholder.svg",
      bio: "Actionable distribution tips and product guidance."
    },
    publishDate: "2025-09-08",
    category: blogCategories[1],
    tags: ["Airbnb", "Channex", "Checkout Instructions", "Guest Management", "Property Management"],
    featuredImage: "/lovable-uploads/98fd546a-dcf2-4e99-ab63-2ac38047f1c0.png",
    readTime: 3,
    metaDescription: "Learn how to set up and manage Airbnb checkout instructions with Channex to improve guest experience and streamline property turnovers."
  }
];
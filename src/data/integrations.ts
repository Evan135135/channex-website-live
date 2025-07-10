import { Integration } from "@/types/integration";

export const integrations: Integration[] = [
  {
    id: "181",
    name: "Booking Factory",
    description: "A modern PMS designed for small to medium-sized accommodations, offering tools to manage bookings, automate operations, and optimize revenue. Features include channel management, direct booking tools, and guest communication, all in one easy-to-use platform.",
    icon: "https://storage.googleapis.com/your-bucket/bookingfactory-icon.png",
    categories: ["PMS"],
    slug: "booking-factory",
    longDescription: "Booking Factory is a comprehensive cloud-based Property Management System specifically designed for small to medium-sized accommodations. Our all-in-one platform streamlines your daily operations with powerful booking management, automated workflows, and integrated channel management. Whether you're running a boutique hotel, bed & breakfast, or vacation rental, Booking Factory provides the tools you need to maximize efficiency and revenue while delivering exceptional guest experiences.",
    features: [
      "Real-time booking management across all channels",
      "Automated guest communication and email workflows",
      "Integrated channel manager for 50+ OTAs",
      "Dynamic pricing and revenue optimization",
      "Multi-property management dashboard",
      "Mobile-responsive guest portal",
      "Comprehensive reporting and analytics",
      "24/7 customer support with live chat",
      "Housekeeping management and scheduling",
      "Payment processing with multiple gateways",
      "Guest review management",
      "Maintenance request tracking"
    ],
    useCases: [
      "Boutique hotels seeking streamlined operations",
      "Bed & breakfast owners wanting to automate workflows",
      "Small hotel chains managing multiple properties",
      "Vacation rental managers optimizing bookings",
      "Independent hoteliers looking to increase direct bookings",
      "Properties wanting to improve guest communication",
      "Accommodations needing better housekeeping coordination"
    ],
    apiCapabilities: [
      "RESTful API with comprehensive endpoints",
      "Real-time availability and rate synchronization",
      "Booking creation and modification webhooks",
      "Guest data management and GDPR compliance",
      "Property and room type configuration",
      "Reporting data export functionality",
      "Payment gateway integration",
      "Third-party app integration support"
    ],
    setupSteps: [
      "Sign up for your Booking Factory account",
      "Complete the property setup wizard with room types and amenities",
      "Configure your rates and availability calendar",
      "Connect your preferred payment gateways",
      "Set up automated email templates for guest communication",
      "Integrate with your existing OTAs through Channex",
      "Train your staff using our comprehensive tutorials",
      "Go live and start accepting bookings"
    ],
    website: "https://bookingfactory.com",
    documentation: "https://docs.bookingfactory.com/api",
    screenshots: [
      "https://storage.googleapis.com/your-bucket/bookingfactory-dashboard.png",
      "https://storage.googleapis.com/your-bucket/bookingfactory-calendar.png", 
      "https://storage.googleapis.com/your-bucket/bookingfactory-reports.png",
      "https://storage.googleapis.com/your-bucket/bookingfactory-mobile.png"
    ],
    videoUrl: "https://www.youtube.com/watch?v=bookingfactory-demo",
    supportedLanguages: ["English", "Spanish", "French", "German", "Italian"],
    supportEmail: "support@bookingfactory.com",
    setupGuideUrl: "https://help.bookingfactory.com/setup-guide",
    privacyPolicyUrl: "https://bookingfactory.com/privacy",
    pricing: {
      model: "Subscription-based with tiered plans",
      details: "Flexible pricing based on the number of rooms and properties you manage. All plans include core PMS features with advanced tools available in higher tiers.",
      features: [
        "No setup or installation fees",
        "Free data migration from existing systems",
        "All integrations included at no extra cost",
        "24/7 technical support",
        "Regular feature updates and improvements",
        "30-day free trial with full access",
        "Cancel anytime with no long-term contracts"
      ]
    },
    integrationFeatures: {
      dataSync: ["Reservations", "Rates", "Availability", "Guest Profiles", "Property Data", "Financial Reports"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "182",
    name: "Abode",
    description: "A flexible PMS tailored for vacation rentals and small accommodations, offering tools for booking management, automation, and guest communication. Ideal for properties seeking simplicity and efficiency in operations.",
    icon: "https://storage.googleapis.com/your-bucket/abode-icon.png",
    categories: ["PMS", "Vacation Rentals"],
    slug: "abode",
    longDescription: "Abode is a user-friendly Property Management System designed specifically for vacation rentals, short-term rentals, and small accommodations. Built with simplicity in mind, Abode streamlines your property operations while maintaining the personal touch that guests expect. Our platform combines powerful automation with intuitive design, making it easy to manage bookings, communicate with guests, and optimize your rental business.",
    features: [
      "Automated booking confirmations and guest messaging",
      "Multi-channel calendar synchronization",
      "Smart pricing recommendations",
      "Guest screening and verification tools",
      "Maintenance and cleaning coordination",
      "Financial reporting and tax preparation",
      "Mobile app for on-the-go management",
      "Integration with smart locks and IoT devices",
      "Review management across platforms",
      "Customizable booking website builder"
    ],
    useCases: [
      "Vacation rental owners managing multiple properties",
      "Airbnb hosts seeking professional tools",
      "Small B&B operators wanting automation",
      "Property managers handling short-term rentals",
      "Real estate investors in rental business",
      "Hotel owners with apartment-style accommodations"
    ],
    apiCapabilities: [
      "RESTful API for seamless integrations",
      "Real-time booking and availability sync",
      "Guest communication automation",
      "Property and amenity management",
      "Financial data and reporting access",
      "Maintenance request workflows",
      "Review and rating synchronization"
    ],
    setupSteps: [
      "Create your Abode account and verify identity",
      "Add your properties with photos and descriptions",
      "Set up your pricing and availability calendar",
      "Configure automated guest communication templates",
      "Connect to your preferred booking channels",
      "Set up cleaning and maintenance workflows",
      "Launch your direct booking website",
      "Start accepting and managing bookings"
    ],
    website: "https://abodepms.com",
    documentation: "https://docs.abodepms.com",
    screenshots: [
      "https://storage.googleapis.com/your-bucket/abode-dashboard.png",
      "https://storage.googleapis.com/your-bucket/abode-calendar.png",
      "https://storage.googleapis.com/your-bucket/abode-messaging.png"
    ],
    videoUrl: "https://www.youtube.com/watch?v=abode-demo",
    supportedLanguages: ["English", "Spanish", "French"],
    supportEmail: "support@abodepms.com",
    setupGuideUrl: "https://help.abodepms.com/getting-started",
    privacyPolicyUrl: "https://abodepms.com/privacy",
    pricing: {
      model: "Per-property monthly subscription",
      details: "Simple pricing based on the number of properties you manage. Includes all features with no hidden fees.",
      features: [
        "Unlimited bookings and guest communications",
        "All channel integrations included",
        "24/7 customer support",
        "Free setup and onboarding",
        "No commission fees on direct bookings",
        "14-day free trial"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Availability", "Rates", "Guest Data", "Reviews"],
      realTime: true,
      webhooks: true,
      bulkOperations: false,
      customFields: true
    }
  },
  {
    id: "183",
    name: "Make.com",
    description: "A versatile automation platform that connects your PMS with various apps and services to create custom workflows. Ideal for streamlining operations, automating tasks, and improving efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/make-icon.png",
    categories: ["API"],
    slug: "make-com",
    longDescription: "Make.com (formerly Integromat) is a powerful visual automation platform that enables you to connect your PMS with hundreds of applications and services. Create sophisticated workflows without coding, automate repetitive tasks, and integrate your hotel operations with external tools like CRM systems, marketing platforms, and financial software. Perfect for properties that want to build custom automation solutions.",
    features: [
      "Visual workflow builder with drag-and-drop interface",
      "1000+ pre-built app integrations",
      "Advanced data transformation and filtering",
      "Real-time and scheduled automation triggers",
      "Error handling and workflow monitoring",
      "Custom webhook support",
      "Multi-step complex automations",
      "Data storage and temporary variables",
      "Conditional logic and branching",
      "Team collaboration and sharing"
    ],
    useCases: [
      "Properties wanting custom PMS integrations",
      "Hotels needing CRM synchronization",
      "Automating guest communication workflows",
      "Connecting PMS with marketing tools",
      "Financial data synchronization",
      "Custom reporting and analytics",
      "Inventory management automation"
    ],
    apiCapabilities: [
      "HTTP/REST API connectivity",
      "Webhook receivers and senders",
      "JSON and XML data processing",
      "Database connections",
      "File processing and storage",
      "Email and SMS automation",
      "Authentication protocols (OAuth, API keys)"
    ],
    setupSteps: [
      "Sign up for Make.com account",
      "Install PMS connector from app directory",
      "Authenticate your PMS connection",
      "Design your automation scenarios",
      "Test workflows with sample data",
      "Deploy and monitor automations",
      "Set up error notifications and handling"
    ],
    website: "https://make.com",
    documentation: "https://docs.make.com",
    screenshots: [
      "https://storage.googleapis.com/your-bucket/make-workflow.png",
      "https://storage.googleapis.com/your-bucket/make-integrations.png",
      "https://storage.googleapis.com/your-bucket/make-monitoring.png"
    ],
    videoUrl: "https://www.youtube.com/watch?v=make-automation-demo",
    supportedLanguages: ["English", "German", "Spanish", "French", "Portuguese", "Japanese"],
    supportEmail: "support@make.com",
    setupGuideUrl: "https://help.make.com/hc/en-us/articles/getting-started",
    privacyPolicyUrl: "https://make.com/en/privacy-notice",
    pricing: {
      model: "Usage-based with free tier",
      details: "Pay only for the operations you use. Free tier includes 1,000 operations per month. Scale up as your automation needs grow.",
      features: [
        "Free tier with 1,000 operations/month",
        "No setup or monthly fees for free tier",
        "Pay-as-you-scale pricing model",
        "Enterprise plans available",
        "All integrations included",
        "24/7 community support"
      ]
    },
    integrationFeatures: {
      dataSync: ["Custom Data", "Webhooks", "API Calls", "File Processing"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "184",
    name: "Front Desk Master",
    description: "A robust PMS for hostels, hotels, and small accommodations, offering features like channel management, automation, and reporting. Ideal for properties seeking an all-in-one, user-friendly platform.",
    icon: "https://storage.googleapis.com/your-bucket/frontdeskmaster-icon.png",
    categories: ["PMS", "Budget"],
    slug: "front-desk-master",
    longDescription: "Front Desk Master is a comprehensive Property Management System designed specifically for hostels, budget hotels, and small accommodations. Built to handle high-volume, budget-conscious operations, our platform offers powerful booking management, automated workflows, and detailed reporting. Perfect for properties that need to manage multiple guests per room, group bookings, and cost-effective operations.",
    features: [
      "Multi-guest room management for hostels",
      "Group booking and allocation tools", 
      "Automated check-in/check-out processes",
      "Integrated payment processing",
      "Housekeeping and maintenance scheduling",
      "Guest communication automation",
      "Detailed financial reporting",
      "Channel manager for 40+ OTAs",
      "Walk-in booking management",
      "Staff scheduling and permissions",
      "Inventory and supplies tracking"
    ],
    useCases: [
      "Hostels managing dormitory-style accommodations",
      "Budget hotels with high guest turnover",
      "Backpacker accommodations",
      "Youth hostels and student housing",
      "Small hotels focusing on cost efficiency",
      "Properties with shared room configurations"
    ],
    apiCapabilities: [
      "RESTful API for system integration",
      "Real-time availability and booking sync",
      "Guest management and check-in automation",
      "Payment processing integration",
      "Reporting data export",
      "Third-party app connectivity",
      "Bulk operations for group management"
    ],
    setupSteps: [
      "Register for Front Desk Master account",
      "Configure property settings and room types",
      "Set up dormitory and shared room configurations",
      "Configure payment gateways and pricing",
      "Train staff on the hostel-specific features",
      "Connect to booking channels via Channex",
      "Set up automated guest communications",
      "Go live with full operations"
    ],
    website: "https://frontdeskmaster.com",
    documentation: "https://docs.frontdeskmaster.com",
    screenshots: [
      "https://storage.googleapis.com/your-bucket/fdm-dashboard.png",
      "https://storage.googleapis.com/your-bucket/fdm-dormitory.png",
      "https://storage.googleapis.com/your-bucket/fdm-checkin.png"
    ],
    videoUrl: "https://www.youtube.com/watch?v=fdm-hostel-demo",
    supportedLanguages: ["English", "Spanish", "German", "French"],
    supportEmail: "support@frontdeskmaster.com",
    setupGuideUrl: "https://help.frontdeskmaster.com/setup",
    privacyPolicyUrl: "https://frontdeskmaster.com/privacy",
    pricing: {
      model: "Affordable monthly subscription per property",
      details: "Budget-friendly pricing designed for hostels and small accommodations. No per-bed fees, just simple property-based pricing.",
      features: [
        "Unlimited beds and guest management",
        "All channel integrations included",
        "Free staff training and support",
        "No setup or installation fees",
        "Cancel anytime flexibility",
        "30-day money-back guarantee"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Availability", "Guest Data", "Payments", "Room Assignments"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: false
    }
  },
  {
    id: "185",
    name: "Omnihotelier",
    description: "Integrate your PMS with Omnihotelier to streamline bookings, optimize revenue, and enhance guest management. Ideal for properties seeking comprehensive hospitality solutions.",
    icon: "https://storage.googleapis.com/your-bucket/omnihotelier-icon.png",
    categories: ["IBE", "PMS"],
    slug: "omnihotelier",
    longDescription: "Omnihotelier is a comprehensive hospitality platform that combines Internet Booking Engine (IBE) capabilities with powerful PMS integration features. Designed for hotels that want to maximize direct bookings while maintaining seamless operations, Omnihotelier offers advanced revenue optimization, guest management, and booking engine technologies in one integrated solution.",
    features: [
      "Advanced Internet Booking Engine with conversion optimization",
      "Real-time availability and rate management",
      "Revenue optimization and dynamic pricing",
      "Guest profile and preference management",
      "Multi-language and multi-currency support",
      "Mobile-responsive booking interface",
      "Integration with major PMS systems",
      "Advanced analytics and reporting",
      "Loyalty program management",
      "Group booking functionality"
    ],
    useCases: [
      "Hotels wanting to increase direct bookings",
      "Properties seeking revenue optimization",
      "Hotels needing advanced booking engine features",
      "Accommodations targeting international guests",
      "Properties with complex rate structures",
      "Hotels implementing loyalty programs"
    ],
    apiCapabilities: [
      "RESTful API for seamless PMS integration",
      "Real-time booking and availability sync",
      "Guest data and preference management",
      "Revenue and pricing optimization",
      "Analytics and reporting data access",
      "Multi-property support",
      "Third-party integration capabilities"
    ],
    setupSteps: [
      "Register for Omnihotelier account",
      "Configure your property and room inventory",
      "Set up your booking engine and customize design",
      "Integrate with your existing PMS system",
      "Configure pricing and revenue optimization rules",
      "Set up guest communication templates",
      "Train staff on the platform features",
      "Launch and monitor performance"
    ],
    website: "https://omnihotelier.com",
    documentation: "https://docs.omnihotelier.com",
    screenshots: [
      "https://storage.googleapis.com/your-bucket/omnihotelier-booking.png",
      "https://storage.googleapis.com/your-bucket/omnihotelier-dashboard.png",
      "https://storage.googleapis.com/your-bucket/omnihotelier-revenue.png"
    ],
    videoUrl: "https://www.youtube.com/watch?v=omnihotelier-demo",
    supportedLanguages: ["English", "Spanish", "French", "German", "Italian", "Portuguese"],
    supportEmail: "support@omnihotelier.com",
    setupGuideUrl: "https://help.omnihotelier.com/integration-guide",
    privacyPolicyUrl: "https://omnihotelier.com/privacy",
    pricing: {
      model: "Revenue-based commission model",
      details: "Pay only for successful bookings generated through our platform. No upfront costs or monthly fees.",
      features: [
        "No setup or monthly subscription fees",
        "Commission only on confirmed bookings",
        "All features included in every plan",
        "Free booking engine customization",
        "24/7 technical support",
        "Performance analytics included"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Rates", "Availability", "Guest Profiles", "Revenue Data"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "166",
    name: "Turbosuite",
    description: "Connect your PMS with Turbosuite to leverage advanced pricing and revenue optimization tools. Ideal for properties seeking to maximize profitability and streamline operations.",
    icon: "https://storage.googleapis.com/your-bucket/turbosuite-icon.png",
    categories: ["RMS"]
  },
  {
    id: "1",
    name: "Hotelnetwork",
    description: "Connect your PMS with HotelNetwork to expand your reach through its distribution channels. Ideal for properties seeking greater visibility and diverse booking sources.",
    icon: "https://storage.googleapis.com/your-bucket/hotelnetwork-icon.png",
    categories: ["Distribution", "OTA"]
  },
  {
    id: "2",
    name: "PriceTravel",
    description: "Reach travelers across Latin America. Ideal for properties targeting regional tourists and travel agencies.",
    icon: "https://storage.googleapis.com/your-bucket/pricetravel-icon.png",
    categories: ["Regional", "OTA", "Latin America"]
  },
  {
    id: "3",
    name: "Getaroom",
    description: "Streamline bookings and expand your reach to global travelers. Ideal for properties seeking increased visibility through diverse distribution channels.",
    icon: "https://storage.googleapis.com/your-bucket/getaroom-icon.png",
    categories: ["Global", "OTA", "Distribution"]
  },
  {
    id: "4",
    name: "Szallas",
    description: "Connect with Hungary's leading travel platform. Ideal for properties targeting travelers in Central and Eastern Europe.",
    icon: "https://storage.googleapis.com/your-bucket/szallas-icon.png",
    categories: ["Regional", "Europe", "OTA"]
  },
  {
    id: "5",
    name: "Roombeast",
    description: "Ideal for properties aiming to simplify operations and boost visibility in the Latam market.",
    icon: "https://storage.googleapis.com/your-bucket/roombeast-icon.png",
    categories: ["Regional", "Latin America", "OTA"]
  },
  {
    id: "6",
    name: "Hostelworld",
    description: "For Hostels & Budget Stays. Ideal for properties seeking global travellers and social, budget-conscious guests.",
    icon: "https://storage.googleapis.com/your-bucket/hostelworld-icon.png",
    categories: ["Global", "Budget", "OTA"],
    slug: "hostelworld",
    longDescription: "Hostelworld is the world's leading hostel booking platform, connecting over 13 million young travelers annually with unique accommodation experiences. Specializing in budget-friendly, social accommodations, Hostelworld is the go-to platform for backpackers, gap year travelers, and adventure seekers. Our integration helps properties tap into this vibrant, social travel community.",
    features: [
      "Global network of budget travelers",
      "Social travel community focus",
      "Backpacker and gap year traveler targeting",
      "Group booking capabilities for travel groups",
      "Real-time availability and pricing",
      "Guest review and rating system",
      "Mobile-optimized booking experience",
      "Multi-bed room management",
      "Flexible cancellation policies",
      "Social features and traveler connections",
      "Local activity and tour recommendations",
      "24/7 customer support"
    ],
    useCases: [
      "Hostels and budget accommodations",
      "Backpacker-focused properties",
      "Social accommodations with shared spaces",
      "Budget hotels targeting young travelers",
      "Properties in popular backpacker routes",
      "Accommodations near universities and colleges",
      "Adventure and activity-focused locations"
    ],
    apiCapabilities: [
      "Hostelworld Partner API",
      "Real-time bed and room availability sync",
      "Multi-bed room configuration",
      "Group booking management",
      "Guest communication and messaging",
      "Review and rating synchronization",
      "Performance analytics for budget segment",
      "Promotional content management"
    ],
    setupSteps: [
      "Apply for Hostelworld partner account",
      "Complete property verification process",
      "Set up hostel profile with social features",
      "Configure room types and bed configurations",
      "Connect via Channex integration platform",
      "Optimize content for backpacker audience",
      "Set up competitive pricing for budget market",
      "Launch and engage with traveler community"
    ],
    website: "https://hostelworld.com",
    documentation: "https://partners.hostelworld.com/api",
    screenshots: [
      "https://storage.googleapis.com/your-bucket/hostelworld-listing.png",
      "https://storage.googleapis.com/your-bucket/hostelworld-social.png",
      "https://storage.googleapis.com/your-bucket/hostelworld-booking.png"
    ],
    videoUrl: "https://www.youtube.com/watch?v=hostelworld-community-demo",
    supportedLanguages: ["English", "Spanish", "French", "German", "Portuguese", "Italian"],
    supportEmail: "partners@hostelworld.com",
    setupGuideUrl: "https://partners.hostelworld.com/setup",
    privacyPolicyUrl: "https://hostelworld.com/privacy",
    pricing: {
      model: "Commission-based on completed bookings",
      details: "Competitive commission rates for budget accommodation segment. No upfront costs or monthly fees.",
      features: [
        "No listing or setup fees",
        "Commission only on confirmed stays",
        "Free access to global backpacker community",
        "Social media marketing support",
        "Budget traveler market insights",
        "24/7 customer service support",
        "Seasonal promotion opportunities"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Bed Availability", "Rates", "Guest Data", "Reviews", "Social Features"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: false
    }
  },
  {
    id: "7",
    name: "Airbnb",
    description: "Sync your PMS with Airbnb to manage bookings, rates, and availability effortlessly. Perfect for short-term rentals and unique stays.",
    icon: "/src/assets/airbnb-logo.png",
    categories: ["Global", "Vacation Rentals", "OTA"],
    slug: "airbnb",
    longDescription: "Airbnb is the world's leading marketplace for unique stays and experiences. Our seamless integration allows property managers to effortlessly synchronize their listings, manage bookings, and optimize pricing across this global platform that connects millions of hosts with travelers seeking authentic accommodations.",
    features: [
      "Automated listing synchronization",
      "Dynamic pricing optimization",
      "Guest communication tools",
      "Multi-calendar management",
      "Instant booking capabilities",
      "Professional hosting tools",
      "Performance insights",
      "Mobile app integration",
      "Smart pricing recommendations",
      "Guest screening tools"
    ],
    useCases: [
      "Vacation rental properties",
      "Unique and boutique accommodations",
      "Multi-property portfolio managers",
      "Hosts seeking global reach",
      "Properties targeting experience-focused travelers",
      "Short-term rental investors"
    ],
    apiCapabilities: [
      "REST API integration",
      "Real-time availability updates",
      "Pricing synchronization",
      "Booking management",
      "Guest messaging",
      "Review handling",
      "Calendar synchronization",
      "Photo management"
    ],
    setupSteps: [
      "Set up your Airbnb host account",
      "Complete identity verification",
      "Create your property listings",
      "Connect through Channex integration",
      "Configure pricing and availability rules",
      "Test booking flow and go live"
    ],
    website: "https://airbnb.com",
    documentation: "https://developers.airbnb.com",
    screenshots: [
      "https://storage.googleapis.com/your-bucket/airbnb-listing.png",
      "https://storage.googleapis.com/your-bucket/airbnb-calendar.png",
      "https://storage.googleapis.com/your-bucket/airbnb-messaging.png"
    ],
    videoUrl: "https://www.youtube.com/watch?v=airbnb-integration-demo",
    supportedLanguages: ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Japanese", "Korean"],
    supportEmail: "support@airbnb.com",
    setupGuideUrl: "https://help.airbnb.com/en/article/setup-guide",
    privacyPolicyUrl: "https://airbnb.com/privacy",
    pricing: {
      model: "Host service fee on bookings",
      details: "Airbnb charges a service fee for each booking. No upfront costs to list your property.",
      features: [
        "Free to list your property",
        "Global marketing exposure",
        "24/7 customer support",
        "Host protection insurance",
        "Secure payment processing",
        "Mobile management apps"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Availability", "Rates", "Guest Messages", "Reviews"],
      realTime: true,
      webhooks: true,
      bulkOperations: false,
      customFields: false
    }
  },
  {
    id: "8",
    name: "Agoda",
    description: "Easily connect your PMS with Agoda to manage bookings, rates, and availability. Ideal for properties focused on travellers in the Asia-Pacific and beyond.",
    icon: "/src/assets/agoda-logo.png",
    categories: ["Asia", "Global", "OTA"],
    slug: "agoda",
    longDescription: "Agoda is Asia's leading online travel platform, serving over 45 million travelers annually across the Asia-Pacific region and beyond. As part of Booking Holdings, Agoda offers unparalleled reach in Asian markets while providing global distribution capabilities. Our integration ensures seamless connectivity to this crucial market, with localized support and market-specific features.",
    features: [
      "Dominant presence in Asia-Pacific markets",
      "Real-time rate and availability management",
      "Multi-currency and payment method support",
      "Local language customer service",
      "Mobile-first booking experience",
      "Flash sales and promotional tools",
      "Agoda Homes for alternative accommodations",
      "Business travel solutions",
      "Loyalty program integration (PointsMAX)",
      "Local market insights and analytics",
      "24/7 multilingual support",
      "Flexible cancellation policy management"
    ],
    useCases: [
      "Properties targeting Asian travelers",
      "Hotels in Asia-Pacific destinations",
      "Accommodations seeking Asian market penetration",
      "Properties with mobile-savvy guests",
      "Hotels offering alternative accommodation types",
      "Businesses targeting younger demographics",
      "Properties in emerging Asian markets"
    ],
    apiCapabilities: [
      "Agoda Connectivity API",
      "Real-time inventory and rate synchronization",
      "Booking management and modifications",
      "Guest data and preferences handling",
      "Multi-property portfolio management",
      "Promotional content and deals management",
      "Performance analytics and reporting",
      "Payment and settlement integration"
    ],
    setupSteps: [
      "Apply for Agoda partner account",
      "Complete property verification process",
      "Set up property profile with local market focus",
      "Configure room types and rate structures",
      "Integrate via Channex connectivity platform",
      "Optimize content for Asian market preferences",
      "Set up promotional campaigns and flash sales",
      "Monitor performance and adjust strategy"
    ],
    website: "https://agoda.com",
    documentation: "https://developers.agoda.com",
    screenshots: [
      "https://storage.googleapis.com/your-bucket/agoda-listing.png",
      "https://storage.googleapis.com/your-bucket/agoda-mobile.png",
      "https://storage.googleapis.com/your-bucket/agoda-partner.png",
      "https://storage.googleapis.com/your-bucket/agoda-analytics.png"
    ],
    videoUrl: "https://www.youtube.com/watch?v=agoda-asia-integration",
    supportedLanguages: ["English", "Thai", "Japanese", "Korean", "Chinese (Simplified)", "Chinese (Traditional)", "Bahasa Indonesia", "Vietnamese"],
    supportEmail: "partnersupport@agoda.com",
    setupGuideUrl: "https://partners.agoda.com/setup-guide",
    privacyPolicyUrl: "https://agoda.com/privacy",
    pricing: {
      model: "Competitive commission structure",
      details: "Market-competitive commission rates with no setup fees. Special rates available for properties in strategic markets.",
      features: [
        "No joining or setup fees",
        "Competitive commission rates",
        "Free marketing exposure in Asia",
        "Access to flash sale promotions",
        "PointsMAX loyalty program benefits",
        "Local market support team",
        "Free property content optimization"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Rates", "Availability", "Guest Profiles", "Local Preferences", "Mobile Data"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "9",
    name: "Hotelbeds",
    description: "Link your PMS with Hotelbeds to access a global B2B travel network. Perfect for properties seeking partnerships with travel agents and tour operators.",
    icon: "https://storage.googleapis.com/your-bucket/hotelbeds-icon.png",
    categories: ["B2B", "Global", "Distribution", "OTA"]
  },
  {
    id: "10",
    name: "Trip.com",
    description: "Attract travellers from Asia and beyond. Ideal for properties seeking a global audience with a focus on Asian markets.",
    icon: "https://storage.googleapis.com/your-bucket/tripcom-icon.png",
    categories: ["Asia", "Global", "OTA"],
    slug: "trip-com",
    longDescription: "Trip.com is China's leading online travel platform and one of the world's largest travel service providers. With over 400 million users globally, Trip.com offers unparalleled access to Chinese outbound travelers and growing Asian markets. Our integration enables properties to tap into this massive and lucrative market segment with localized services and payment methods.",
    features: [
      "Access to 400+ million global users",
      "Dominant presence in Chinese travel market",
      "Multi-language platform support",
      "Local payment method integration (Alipay, WeChat Pay)",
      "Chinese traveler preference optimization",
      "24/7 multilingual customer service",
      "Mobile-first booking experience",
      "Group booking and corporate travel solutions",
      "Trip.com loyalty program integration",
      "Local destination guides and recommendations",
      "Real-time translation services",
      "Cultural preference customization"
    ],
    useCases: [
      "Properties targeting Chinese travelers",
      "Hotels in popular Asian destinations",
      "Accommodations seeking Asian market expansion",
      "Properties near major tourist attractions",
      "Hotels offering cultural experiences",
      "Business travel focused accommodations",
      "Properties in gateway cities for Asian travelers"
    ],
    apiCapabilities: [
      "Trip.com Partner API connectivity",
      "Real-time inventory and rate management",
      "Multi-language booking processing",
      "Local payment method integration",
      "Guest preference and cultural data sync",
      "Group booking management",
      "Performance analytics for Asian markets",
      "Review and rating synchronization"
    ],
    setupSteps: [
      "Apply for Trip.com partner program",
      "Complete property verification and compliance check",
      "Set up property profile with Chinese market focus",
      "Configure local payment methods and currency",
      "Integrate via Channex connectivity solution",
      "Optimize content for Chinese traveler preferences",
      "Set up customer service in local languages",
      "Launch and monitor Asian market performance"
    ],
    website: "https://trip.com",
    documentation: "https://partners.trip.com/api-docs",
    screenshots: [
      "https://storage.googleapis.com/your-bucket/tripcom-listing.png",
      "https://storage.googleapis.com/your-bucket/tripcom-mobile.png",
      "https://storage.googleapis.com/your-bucket/tripcom-payments.png",
      "https://storage.googleapis.com/your-bucket/tripcom-analytics.png"
    ],
    videoUrl: "https://www.youtube.com/watch?v=tripcom-china-market-demo",
    supportedLanguages: ["Chinese (Simplified)", "Chinese (Traditional)", "English", "Japanese", "Korean", "Thai", "Bahasa Indonesia"],
    supportEmail: "partnersupport@trip.com",
    setupGuideUrl: "https://partners.trip.com/setup-guide",
    privacyPolicyUrl: "https://trip.com/privacy",
    pricing: {
      model: "Market-specific commission rates",
      details: "Competitive commission structure tailored to Asian markets. Special rates available for strategic properties and destinations.",
      features: [
        "No setup or joining fees",
        "Market-competitive commission rates",
        "Access to Chinese payment methods",
        "Local currency settlement options",
        "Marketing support for Asian campaigns",
        "Dedicated account management",
        "Cultural training and support resources"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Rates", "Availability", "Guest Preferences", "Payment Data", "Cultural Data"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "11",
    name: "Despegar",
    description: "Latin America's leading travel platform. Ideal for properties targeting travellers across the region.",
    icon: "https://storage.googleapis.com/your-bucket/despegar-icon.png",
    categories: ["Latin America", "Regional", "OTA"]
  },
  {
    id: "12",
    name: "Traveloka",
    description: "Reach travellers across Southeast Asia. Ideal for properties targeting this fast-growing regional market.",
    icon: "https://storage.googleapis.com/your-bucket/traveloka-icon.png",
    categories: ["Asia", "Regional", "OTA"]
  },
  {
    id: "13",
    name: "VRBO",
    description: "Manage vacation rental bookings seamlessly. Perfect for properties offering unique stays and family-friendly accommodations.",
    icon: "https://storage.googleapis.com/your-bucket/vrbo-icon.png",
    categories: ["Vacation Rentals", "Global", "OTA"],
    slug: "vrbo",
    longDescription: "VRBO (Vacation Rentals by Owner) is the world's leading vacation rental marketplace, specializing in whole-home rentals for families and groups. As part of Expedia Group, VRBO connects property owners with travelers seeking authentic, home-like experiences. Our integration provides comprehensive tools for managing vacation rental bookings, guest communications, and property optimization across this premium platform.",
    features: [
      "Whole-home vacation rental focus",
      "Family and group traveler targeting",
      "Premium property showcasing",
      "Advanced calendar and availability management",
      "Guest screening and verification tools",
      "Flexible cancellation policy options",
      "Property protection and insurance",
      "Local experience recommendations",
      "Multi-property portfolio management",
      "Seasonal pricing optimization",
      "Guest review and rating system",
      "24/7 customer support"
    ],
    useCases: [
      "Vacation rental property owners",
      "Whole-home rental specialists",
      "Properties targeting families and groups",
      "Premium vacation accommodation providers",
      "Multi-property vacation rental managers",
      "Seasonal rental properties",
      "Properties in popular vacation destinations"
    ],
    apiCapabilities: [
      "VRBO Partner API integration",
      "Real-time availability and pricing sync",
      "Booking and reservation management",
      "Guest communication automation",
      "Property content and photo management",
      "Cancellation and modification handling",
      "Performance analytics and insights",
      "Multi-calendar synchronization"
    ],
    setupSteps: [
      "Create VRBO property manager account",
      "List your vacation rental properties",
      "Complete property verification process",
      "Set up comprehensive property descriptions and photos",
      "Configure pricing and availability calendars",
      "Connect via Channex integration platform",
      "Optimize listings for family and group bookings",
      "Launch and monitor booking performance"
    ],
    website: "https://vrbo.com",
    documentation: "https://help.vrbo.com/partner-resources",
    screenshots: [
      "https://storage.googleapis.com/your-bucket/vrbo-listing.png",
      "https://storage.googleapis.com/your-bucket/vrbo-calendar.png",
      "https://storage.googleapis.com/your-bucket/vrbo-family.png",
      "https://storage.googleapis.com/your-bucket/vrbo-dashboard.png"
    ],
    videoUrl: "https://www.youtube.com/watch?v=vrbo-vacation-rental-demo",
    supportedLanguages: ["English", "Spanish", "French", "German", "Italian", "Portuguese"],
    supportEmail: "partnersupport@vrbo.com",
    setupGuideUrl: "https://help.vrbo.com/partner-setup",
    privacyPolicyUrl: "https://vrbo.com/privacy",
    pricing: {
      model: "Annual subscription or pay-per-booking",
      details: "Choose between annual subscription model or pay-per-booking commission. Subscription offers lower total costs for active properties.",
      features: [
        "Two flexible pricing models available",
        "No listing fees for basic package",
        "Priority placement opportunities",
        "Advanced property promotion tools",
        "Guest damage protection included",
        "24/7 customer service support",
        "Marketing and advertising benefits"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Availability", "Rates", "Guest Data", "Property Details", "Reviews"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "14",
    name: "Google Hotels & Vacation Rentals",
    description: "Showcase your property directly in search results. Ideal for hotels and vacation rentals seeking increased visibility and direct bookings.",
    icon: "https://storage.googleapis.com/your-bucket/google-icon.png",
    categories: ["Vacation Rentals", "Distribution", "OTA"]
  },
  {
    id: "15",
    name: "Tiket",
    description: "Reach travellers across Indonesia and beyond. Perfect for properties targeting Southeast Asian markets.",
    icon: "https://storage.googleapis.com/your-bucket/tiket-icon.png",
    categories: ["Asia", "Regional", "OTA"]
  },
  {
    id: "16",
    name: "MG Bedbank",
    description: "Access Southeast Asia's leading B2B travel distribution network. Ideal for properties seeking connections with travel agents and wholesalers.",
    icon: "https://storage.googleapis.com/your-bucket/mgbedbank-icon.png",
    categories: ["B2B", "Asia", "Distribution"]
  },
  {
    id: "17",
    name: "HRS",
    description: "Streamline bookings for business travelers and corporate clients. Ideal for properties targeting the corporate travel market.",
    icon: "https://storage.googleapis.com/your-bucket/hrs-icon.png",
    categories: ["Corporate", "Global", "B2B", "OTA"]
  },
  {
    id: "18",
    name: "Hipcamp",
    description: "Ideal for campsites, glamping, and unique nature-focused properties.",
    icon: "https://storage.googleapis.com/your-bucket/hipcamp-icon.png",
    categories: ["Outdoor", "Vacation Rentals", "OTA"]
  },
  {
    id: "19",
    name: "TravelgateX",
    description: "Access a global marketplace of travel distributors. Ideal for properties seeking broad B2B connectivity and increased distribution.",
    icon: "https://storage.googleapis.com/your-bucket/travelgatex-icon.png",
    categories: ["B2B", "Global", "Distribution"]
  },
  {
    id: "20",
    name: "Hopper",
    description: "Connect with Hopper to reach a mobile-first audience seeking personalised travel deals. Ideal for properties targeting tech-savvy, price-conscious travellers.",
    icon: "https://storage.googleapis.com/your-bucket/hopper-icon.png",
    categories: ["OTA", "Global"]
  },
  {
    id: "21",
    name: "Reconline",
    description: "Connect with Reconline GDS to access global distribution channels and connect with travel agents worldwide. Ideal for properties seeking broader exposure and increased bookings.",
    icon: "https://storage.googleapis.com/your-bucket/reconline-icon.png",
    categories: ["Distribution", "Global", "B2B"]
  },
  {
    id: "22",
    name: "Hostelhop",
    description: "For budget-conscious and social travelers. Ideal for hostels and shared accommodations seeking increased visibility.",
    icon: "https://storage.googleapis.com/your-bucket/hostelhop-icon.png",
    categories: ["Budget", "Global", "OTA"]
  },
  {
    id: "23",
    name: "MakeMyTrip",
    description: "India's leading travel platform. Perfect for properties targeting travellers across India and beyond.",
    icon: "https://storage.googleapis.com/your-bucket/makemytrip-icon.png",
    categories: ["Asia", "Regional", "OTA"]
  },
  {
    id: "24",
    name: "Roibos",
    description: "A robust B2B travel platform. Ideal for properties seeking connections with tour operators, travel agents, and wholesalers worldwide.",
    icon: "https://storage.googleapis.com/your-bucket/roibos-icon.png",
    categories: ["B2B", "Global", "Distribution"]
  },
  {
    id: "25",
    name: "Tablet Michelin",
    description: "Connect with Tablet Hotels to showcase your property on a curated platform for boutique and luxury stays. Ideal for properties offering unique experiences and aiming to attract high-end travelers.",
    icon: "https://storage.googleapis.com/your-bucket/tablet-icon.png",
    categories: ["Luxury", "Global", "OTA"]
  },
  {
    id: "26",
    name: "Didatravel",
    description: "China's leading B2B travel platform. Ideal for properties targeting travel agents, tour operators, and wholesalers globally.",
    icon: "https://storage.googleapis.com/your-bucket/didatravel-icon.png",
    categories: ["B2B", "Asia", "Distribution", "OTA"]
  },
  {
    id: "27",
    name: "Hoterip",
    description: "A leading travel platform in Southeast Asia. Ideal for properties targeting Indonesian travelers and regional markets.",
    icon: "https://storage.googleapis.com/your-bucket/hoterip-icon.png",
    categories: ["Asia", "Regional", "OTA"]
  },
  {
    id: "28",
    name: "Mr & Mrs Smith",
    description: "A curated platform for luxury and boutique stays. Ideal for properties offering unique, high-end experiences.",
    icon: "https://storage.googleapis.com/your-bucket/mrandmrssmith-icon.png",
    categories: ["Luxury", "Global", "OTA"]
  },
  {
    id: "29",
    name: "Hotel Tonight",
    description: "Attract last-minute travelers seeking great deals. Ideal for properties targeting spontaneous, mobile-first bookings.",
    icon: "https://storage.googleapis.com/your-bucket/hoteltonight-icon.png",
    categories: ["OTA", "Global"]
  },
  {
    id: "30",
    name: "Bookeasy",
    description: "Australia's leading tourism destination management platform. Ideal for properties targeting local and regional travelers.",
    icon: "https://storage.googleapis.com/your-bucket/bookeasy-icon.png",
    categories: ["Regional", "Australia", "Distribution"]
  },
  {
    id: "31",
    name: "Hyperguest",
    description: "Access a direct, commission-free B2B distribution network. Ideal for properties seeking to optimize margins and connect with travel agents globally.",
    icon: "https://storage.googleapis.com/your-bucket/hyperguest-icon.png",
    categories: ["B2B", "Global", "Distribution"]
  },
  {
    id: "32",
    name: "Inntopia",
    description: "Connect your PMS with Inntopia to streamline bookings and packaging for resorts, hotels, and vacation rentals. Ideal for properties targeting year-round leisure and group travelers.",
    icon: "https://storage.googleapis.com/your-bucket/inntopia-icon.png",
    categories: ["Vacation Rentals", "OTA"]
  },
  {
    id: "33",
    name: "Travia",
    description: "Ideal for properties catering to travelers exploring Iceland's unique destinations.",
    icon: "https://storage.googleapis.com/your-bucket/travia-icon.png",
    categories: ["Regional", "Europe", "OTA"]
  },
  {
    id: "34",
    name: "Mitchell Corp",
    description: "Ideal for properties targeting domestic and international travelers exploring New Zealand.",
    icon: "https://storage.googleapis.com/your-bucket/mitchell-icon.png",
    categories: ["Regional", "Australia", "OTA"]
  },
  {
    id: "35",
    name: "Wink",
    description: "Connect with Wink to streamline bookings and enhance distribution through its travel platform. Ideal for properties seeking innovative solutions to reach modern travelers.",
    icon: "https://storage.googleapis.com/your-bucket/wink-icon.png",
    categories: ["Distribution", "OTA"]
  },
  {
    id: "36",
    name: "Hookusbookus",
    description: "Integrate with Hookusbookus to streamline bookings and connect with travelers seeking unique accommodations. Ideal for properties offering personalized and distinctive experiences.",
    icon: "https://storage.googleapis.com/your-bucket/hookusbookus-icon.png",
    categories: ["OTA", "Vacation Rentals"]
  },
  {
    id: "37",
    name: "Spot2nite",
    description: "Connect with Spot2Nite to manage bookings for RV parks and campgrounds seamlessly. Ideal for properties catering to travelers seeking outdoor and road trip adventures.",
    icon: "https://storage.googleapis.com/your-bucket/spot2nite-icon.png",
    categories: ["Outdoor", "Vacation Rentals", "OTA"]
  },
  {
    id: "38",
    name: "Camping Vision",
    description: "Integrate your PMS with Camping Vision to access Europe's leading platform for campsite bookings. Ideal for campgrounds, glamping sites, and holiday parks targeting outdoor enthusiasts.",
    icon: "https://storage.googleapis.com/your-bucket/campingvision-icon.png",
    categories: ["Outdoor", "Europe", "Vacation Rentals"]
  },
  {
    id: "39",
    name: "Ratedock",
    description: "Streamline rate and inventory distribution across multiple channels. Ideal for properties seeking efficient and centralized management solutions.",
    icon: "https://storage.googleapis.com/your-bucket/ratedock-icon.png",
    categories: ["Distribution", "OTA"]
  },
  {
    id: "40",
    name: "Emerging Travel Group",
    description: "Integrate your PMS with Emerging Travel Group platforms like RateHawk, RoundTrip, and ZenHotels to reach B2B, corporate, and individual travelers all over the world.",
    icon: "https://storage.googleapis.com/your-bucket/etg-icon.png",
    categories: ["Europe", "Regional", "OTA"]
  },
  {
    id: "41",
    name: "OpenGDS.com",
    description: "Streamline distribution and connect with local travel agents and OTAs.",
    icon: "https://storage.googleapis.com/your-bucket/opengds-icon.png",
    categories: ["Distribution", "B2B", "OTA"]
  },
  {
    id: "42",
    name: "HRS Australia",
    description: "Seamlessly connect your PMS with HRS Australia to manage bookings, rates, and availability in real-time. Ideal for hotels looking to expand their reach in the Australian market.",
    icon: "https://storage.googleapis.com/your-bucket/hrsau-icon.png",
    categories: ["Australia", "Regional", "OTA"]
  },
  {
    id: "43",
    name: "Moverii",
    description: "Ideal for properties seeking a user-friendly solution to streamline operations and enhance guest experiences.",
    icon: "https://storage.googleapis.com/your-bucket/moverii-icon.png",
    categories: ["OTA"]
  },
  {
    id: "44",
    name: "Booking.com",
    description: "Connect your PMS to Booking.com for seamless management of rates, availability, and reservations. Ideal for all property types aiming for global reach.",
    icon: "/lovable-uploads/aed36b81-7956-4937-9330-50eecab307fe.png",
    categories: ["OTA", "Global"],
    slug: "booking-com",
    longDescription: "Booking.com is the world's leading digital travel company, connecting properties with millions of travelers worldwide. Our integration provides real-time synchronization of rates, availability, and reservations, ensuring your property maintains optimal visibility and booking efficiency across this massive platform.",
    features: [
      "Real-time rate and availability sync",
      "Instant booking confirmations",
      "Multi-language support",
      "Mobile-optimized listings",
      "Advanced pricing tools",
      "Guest review management",
      "24/7 technical support",
      "Performance analytics dashboard"
    ],
    useCases: [
      "Hotels seeking maximum global exposure",
      "Properties targeting international travelers",
      "Accommodations looking to increase direct bookings",
      "Businesses wanting comprehensive booking management",
      "Properties needing multi-currency support"
    ],
    apiCapabilities: [
      "RESTful API integration",
      "Real-time XML connectivity",
      "Webhook notifications",
      "Bulk operations support",
      "Rate loading and management",
      "Inventory synchronization",
      "Booking modifications",
      "Cancellation handling"
    ],
    setupSteps: [
      "Create your Booking.com Extranet account",
      "Complete property verification process",
      "Configure your Channex integration settings",
      "Map your room types and rate plans",
      "Test the connection with sample bookings",
      "Go live and monitor performance"
    ],
    website: "https://booking.com",
    documentation: "https://developers.booking.com",
    screenshots: [
      "https://storage.googleapis.com/your-bucket/booking-screenshot-1.png",
      "https://storage.googleapis.com/your-bucket/booking-screenshot-2.png",
      "https://storage.googleapis.com/your-bucket/booking-screenshot-3.png"
    ],
    videoUrl: "https://www.youtube.com/watch?v=example",
    supportedLanguages: ["English", "Spanish", "French", "German", "Italian", "Portuguese"],
    supportEmail: "support@booking.com",
    setupGuideUrl: "https://partner.booking.com/en-gb/help/setup-guide",
    privacyPolicyUrl: "https://booking.com/privacy",
    pricing: {
      model: "Commission-based",
      details: "No setup fees. You only pay when you receive bookings through our platform.",
      features: [
        "No monthly subscription fees",
        "Commission only on confirmed bookings",
        "Free listing creation and management",
        "Access to global marketing campaigns",
        "24/7 customer support included"
      ]
    },
    integrationFeatures: {
      dataSync: ["Rates", "Availability", "Bookings", "Guest Data", "Property Info"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "45",
    name: "Expedia",
    description: "Integrate your PMS with Expedia to streamline bookings, rates, and availability. Perfect for properties targeting a wide, global audience.",
    icon: "https://storage.googleapis.com/your-bucket/expedia-icon.png",
    categories: ["OTA", "Global"],
    slug: "expedia",
    longDescription: "Expedia Group is one of the world's largest online travel companies, reaching over 750 million people annually across its family of brands including Expedia.com, Hotels.com, and Vrbo. Our integration provides seamless connectivity to this massive distribution network, enabling properties to manage rates, availability, and bookings across multiple Expedia Group platforms from a single interface.",
    features: [
      "Multi-brand exposure across Expedia Group portfolio",
      "Real-time rate and inventory synchronization",
      "Advanced revenue management tools",
      "Automated booking confirmations and modifications",
      "Guest review management across platforms",
      "Performance analytics and market insights",
      "Mobile-optimized listings",
      "24/7 technical support",
      "Dynamic packaging opportunities",
      "Group booking capabilities",
      "Last-minute deals promotion",
      "Loyalty program integration"
    ],
    useCases: [
      "Hotels seeking maximum global distribution",
      "Properties targeting North American markets",
      "Accommodations wanting package deal exposure",
      "Hotels looking to increase weekend occupancy",
      "Properties needing comprehensive market data",
      "Businesses targeting corporate travelers",
      "Hotels wanting loyalty program benefits"
    ],
    apiCapabilities: [
      "EQC (Expedia QuickConnect) API",
      "Real-time availability and rate updates",
      "Booking retrieval and management",
      "Property and room type configuration",
      "Rate plan and inventory management",
      "Guest data synchronization",
      "Promotional content management",
      "Performance reporting data"
    ],
    setupSteps: [
      "Apply for Expedia Partner Central account",
      "Complete property verification and quality review",
      "Set up your property profile and photos",
      "Configure rate plans and room inventory",
      "Connect via Channex EQC integration",
      "Test booking flow and data synchronization",
      "Optimize listing content for better visibility",
      "Launch and monitor performance metrics"
    ],
    website: "https://expedia.com",
    documentation: "https://developers.expediagroup.com",
    screenshots: [
      "https://storage.googleapis.com/your-bucket/expedia-listing.png",
      "https://storage.googleapis.com/your-bucket/expedia-partner-central.png",
      "https://storage.googleapis.com/your-bucket/expedia-analytics.png",
      "https://storage.googleapis.com/your-bucket/expedia-mobile.png"
    ],
    videoUrl: "https://www.youtube.com/watch?v=expedia-integration-demo",
    supportedLanguages: ["English", "Spanish", "French", "German", "Italian", "Japanese", "Korean", "Chinese"],
    supportEmail: "partnersupport@expedia.com",
    setupGuideUrl: "https://help.expedia.com/partner-setup-guide",
    privacyPolicyUrl: "https://expedia.com/privacy",
    pricing: {
      model: "Commission-based on bookings",
      details: "Pay only when guests book and stay. No upfront costs or monthly fees. Commission rates vary by property type and market.",
      features: [
        "No setup or listing fees",
        "Commission only on completed stays",
        "Free access to marketing campaigns",
        "Complimentary property photos",
        "24/7 customer service support",
        "Performance marketing opportunities",
        "Flexible rate and inventory management"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Rates", "Availability", "Guest Data", "Reviews", "Property Content"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "46",
    name: "Pricepoint",
    description: "Connect your PMS with Pricepoint RMS to automate pricing and optimize revenue. Ideal for properties seeking dynamic rate management and increased profitability.",
    icon: "https://storage.googleapis.com/your-bucket/pricepoint-icon.png",
    categories: ["RMS"]
  },
  {
    id: "47",
    name: "Rategenie",
    description: "Integrate your PMS with Rategenie to automate dynamic pricing and maximize revenue. Ideal for properties seeking smarter rate management and improved occupancy.",
    icon: "https://storage.googleapis.com/your-bucket/rategenie-icon.png",
    categories: ["RMS"]
  },
  {
    id: "48",
    name: "Elastic Hotel",
    description: "Connect your PMS with Elastic Hotel to optimize your distribution strategy and enhance channel management. Ideal for properties seeking flexible and efficient connectivity solutions.",
    icon: "https://storage.googleapis.com/your-bucket/elastichotel-icon.png",
    categories: ["RMS"]
  },
  {
    id: "49",
    name: "Room Price Genie",
    description: "Integrate your PMS with RoomPriceGenie to simplify dynamic pricing and maximize revenue. Ideal for small to medium-sized properties seeking easy and effective rate management.",
    icon: "https://storage.googleapis.com/your-bucket/roompricegenie-icon.png",
    categories: ["RMS"]
  },
  {
    id: "50",
    name: "Cultbooking",
    description: "Integrate your PMS with CultBooking to enhance direct bookings through customizable booking engines. Ideal for properties seeking to increase direct revenue and reduce commission costs.",
    icon: "https://storage.googleapis.com/your-bucket/cultbooking-icon.png",
    categories: ["IBE"]
  },
  {
    id: "51",
    name: "GuestTraction",
    description: "Connect your PMS with GuestTraction to streamline bookings and enhance guest experiences through innovative tools. Ideal for properties aiming to attract and retain travelers in the Australasian market.",
    icon: "https://storage.googleapis.com/your-bucket/guesttraction-icon.png",
    categories: ["IBE", "Australia"]
  },
  {
    id: "52",
    name: "Zapier",
    description: "A powerful automation platform that connects your PMS with thousands of apps to streamline workflows. Ideal for automating tasks like data syncing, notifications, and guest communication across multiple tools.",
    icon: "https://storage.googleapis.com/your-bucket/zapier-icon.png",
    categories: ["API"]
  },
  {
    id: "53",
    name: "Aiosell",
    description: "An all-in-one property management system that combines channel management, revenue optimization, and automation tools. Ideal for properties seeking to maximize efficiency and profitability with an integrated solution.",
    icon: "https://storage.googleapis.com/your-bucket/aiosell-icon.png",
    categories: ["PMS"]
  },
  {
    id: "54",
    name: "ReservationKey",
    description: "A user-friendly PMS designed for small to medium-sized accommodations, offering tools for booking management, channel integration, and guest communication. Ideal for properties seeking affordability and simplicity.",
    icon: "https://storage.googleapis.com/your-bucket/reservationkey-icon.png",
    categories: ["PMS"]
  },
  {
    id: "55",
    name: "Hotelier 101",
    description: "A comprehensive PMS designed for independent hotels and small accommodations, offering tools for booking management, channel connectivity, and guest engagement. Ideal for properties seeking an intuitive and affordable solution.",
    icon: "https://storage.googleapis.com/your-bucket/hotelier101-icon.png",
    categories: ["PMS"]
  },
  {
    id: "56",
    name: "Ermes Hotels",
    description: "A cloud-based PMS tailored for independent hotels and small chains, offering features like booking management, channel integration, and revenue optimization. Ideal for properties seeking efficient and user-friendly solutions.",
    icon: "https://storage.googleapis.com/your-bucket/ermes-icon.png",
    categories: ["PMS"]
  },
  {
    id: "57",
    name: "Front Desk Express",
    description: "A simple and intuitive PMS designed for small to mid-sized accommodations, providing tools for reservation management, guest tracking, and reporting. Ideal for properties seeking a streamlined and cost-effective solution.",
    icon: "https://storage.googleapis.com/your-bucket/frontdeskexpress-icon.png",
    categories: ["PMS"]
  },
  {
    id: "58",
    name: "BananaDesk",
    description: "A cloud-based PMS designed for hostels and budget accommodations, offering tools for reservation management, guest check-ins, and channel integration. Ideal for properties focused on efficiency and affordability.",
    icon: "https://storage.googleapis.com/your-bucket/bananadesk-icon.png",
    categories: ["PMS", "Budget"]
  },
  {
    id: "59",
    name: "Resmaster",
    description: "A comprehensive PMS offering booking management, channel integration, and guest communication tools. Ideal for properties seeking a reliable solution to streamline operations and boost reservations.",
    icon: "https://storage.googleapis.com/your-bucket/resmaster-icon.png",
    categories: ["PMS"]
  },
  {
    id: "60",
    name: "GuestSmart",
    description: "A user-friendly PMS designed for small to medium-sized properties, offering features like booking management, channel integration, and guest communication. Ideal for properties seeking to enhance efficiency and improve guest experiences.",
    icon: "https://storage.googleapis.com/your-bucket/guestsmart-icon.png",
    categories: ["PMS"]
  },
  {
    id: "61",
    name: "Zavia ERP",
    description: "An advanced property management and enterprise resource planning system designed for the hospitality industry. Offers tools for reservations, inventory, finance, and operational management. Ideal for properties seeking an all-in-one, scalable solution.",
    icon: "https://storage.googleapis.com/your-bucket/zaviaerp-icon.png",
    categories: ["PMS"]
  },
  {
    id: "62",
    name: "Ayrton",
    description: "A modern property management system designed for hotels and accommodations, offering tools for reservations, guest management, and operational efficiency. Ideal for properties seeking a seamless and intuitive management solution.",
    icon: "https://storage.googleapis.com/your-bucket/ayrton-icon.png",
    categories: ["PMS"]
  },
  {
    id: "63",
    name: "Johku",
    description: "A versatile property management system tailored for tourism and hospitality businesses, offering tools for bookings, sales, and customer management. Ideal for properties seeking an all-in-one solution to streamline operations and enhance guest experiences.",
    icon: "https://storage.googleapis.com/your-bucket/johku-icon.png",
    categories: ["PMS"]
  },
  {
    id: "64",
    name: "Eksenia",
    description: "A comprehensive PMS solution designed for hotels and accommodations, offering features like reservation management, channel integration, and guest services. Ideal for properties seeking to optimize operations and elevate guest experiences.",
    icon: "https://storage.googleapis.com/your-bucket/eksenia-icon.png",
    categories: ["PMS"]
  },
  {
    id: "65",
    name: "Nokumo",
    description: "A versatile property management system offering tools for booking management, task automation, and guest communication. Ideal for small to medium-sized accommodations seeking streamlined operations and improved efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/nokumo-icon.png",
    categories: ["PMS"]
  },
  {
    id: "66",
    name: "Igloorooms",
    description: "A property management system designed for budget accommodations and small to medium-sized properties, offering features like booking management, channel integration, and guest communication. Ideal for properties seeking a cost-effective and user-friendly solution.",
    icon: "https://storage.googleapis.com/your-bucket/igloorooms-icon.png",
    categories: ["PMS"]
  },
  {
    id: "67",
    name: "MasterYield",
    description: "A comprehensive property management and revenue optimization system, offering tools for booking management, channel connectivity, and pricing automation. Ideal for properties seeking to maximize revenue and streamline operations.",
    icon: "https://storage.googleapis.com/your-bucket/masteryield-icon.png",
    categories: ["PMS"]
  },
  {
    id: "68",
    name: "Comando",
    description: "A modern property management system designed for hotels and accommodations, providing tools for reservations, guest management, and operational efficiency. Ideal for properties seeking an intuitive and scalable solution.",
    icon: "https://storage.googleapis.com/your-bucket/comando-icon.png",
    categories: ["PMS"]
  },
  {
    id: "69",
    name: "The Lobby Boy",
    description: "A user-friendly property management system tailored for boutique hotels and small accommodations. Offers tools for booking management, guest communication, and operations. Ideal for properties seeking simplicity and personalized service.",
    icon: "https://storage.googleapis.com/your-bucket/thelobbyboy-icon.png",
    categories: ["PMS"]
  },
  {
    id: "70",
    name: "Booktech",
    description: "A Norwegian property management system offering solutions for booking management, channel integration, and guest services. Ideal for accommodations seeking efficient and localized tools to streamline operations.",
    icon: "https://storage.googleapis.com/your-bucket/booktech-icon.png",
    categories: ["PMS"]
  },
  {
    id: "71",
    name: "Desbravador",
    description: "A robust property management system designed for hotels and resorts, offering tools for reservations, financial management, and operational control. Ideal for properties in Latin America seeking a comprehensive and scalable solution.",
    icon: "https://storage.googleapis.com/your-bucket/desbravador-icon.png",
    categories: ["PMS"]
  },
  {
    id: "72",
    name: "PAN Hospitality",
    description: "A South African property management solution offering tools for reservations, guest management, and operational efficiency. Ideal for hotels, lodges, and guesthouses seeking a reliable and localized system to streamline their operations.",
    icon: "https://storage.googleapis.com/your-bucket/panhospitality-icon.png",
    categories: ["PMS"]
  },
  {
    id: "73",
    name: "Bookipro",
    description: "A user-friendly property management system designed for small to medium-sized accommodations, offering features like booking management, channel integration, and guest communication. Ideal for properties seeking simplicity and efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/bookipro-icon.png",
    categories: ["PMS"]
  },
  {
    id: "74",
    name: "OTASync",
    description: "A cloud-based property management system offering booking management, channel synchronization, and revenue optimization tools. Ideal for small to medium-sized accommodations seeking a seamless all-in-one solution.",
    icon: "https://storage.googleapis.com/your-bucket/otasync-icon.png",
    categories: ["PMS"]
  },
  {
    id: "75",
    name: "Pxsol",
    description: "A powerful property management and channel management solution, offering tools for booking management, rate optimization, and operational efficiency. Ideal for hotels and accommodations seeking to streamline workflows and maximize revenue.",
    icon: "https://storage.googleapis.com/your-bucket/pxsol-icon.png",
    categories: ["PMS"]
  },
  {
    id: "76",
    name: "Dtravel",
    description: "A decentralized platform for managing short-term rental bookings, offering tools for direct reservations, lower fees, and blockchain-based security. Ideal for property owners seeking more control and transparency in their operations.",
    icon: "https://storage.googleapis.com/your-bucket/dtravel-icon.png",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "77",
    name: "Winpax",
    description: "A user-friendly property management system designed for small to medium-sized accommodations, offering tools for booking management, guest services, and operational efficiency. Ideal for properties seeking an affordable and intuitive solution.",
    icon: "https://storage.googleapis.com/your-bucket/winpax-icon.png",
    categories: ["PMS"]
  },
  {
    id: "78",
    name: "Roomsy",
    description: "A cloud-based property management system designed for small to medium-sized accommodations, offering features like booking management, invoicing, and reporting. Ideal for properties seeking a simple and efficient way to manage operations.",
    icon: "https://storage.googleapis.com/your-bucket/roomsy-icon.png",
    categories: ["PMS"]
  },
  {
    id: "79",
    name: "Easy Rez",
    description: "A straightforward property management system offering tools for booking management, channel integration, and guest communication. Ideal for small to medium-sized accommodations seeking an easy-to-use and efficient solution.",
    icon: "https://storage.googleapis.com/your-bucket/easyrez-icon.png",
    categories: ["PMS"]
  },
  {
    id: "80",
    name: "Finner",
    description: "A modern property management system designed to streamline bookings, optimize revenue, and enhance guest experiences. Ideal for hotels and accommodations seeking an intuitive and efficient solution.",
    icon: "https://storage.googleapis.com/your-bucket/finner-icon.png",
    categories: ["PMS"]
  },
  {
    id: "81",
    name: "TMRW Hotels",
    description: "An innovative property management solution focusing on contactless operations and digital guest experiences. Ideal for modern accommodations seeking to enhance efficiency and provide seamless self-service options for guests.",
    icon: "https://storage.googleapis.com/your-bucket/tmrwhotels-icon.png",
    categories: ["PMS"]
  },
  {
    id: "82",
    name: "Cortec AG",
    description: "A Swiss-based property management and technology provider offering tailored solutions for hotels and accommodations, including booking management, channel integration, and operational tools.",
    icon: "https://storage.googleapis.com/your-bucket/cortec-icon.png",
    categories: ["PMS"]
  },
  {
    id: "83",
    name: "Quovai",
    description: "A comprehensive property management solution tailored for small to medium-sized accommodations, offering tools for booking management, channel integration, and guest services. Ideal for properties seeking efficient and user-friendly software to enhance operations.",
    icon: "https://storage.googleapis.com/your-bucket/quovai-icon.png",
    categories: ["PMS"]
  },
  {
    id: "84",
    name: "Turbo PMS",
    description: "A lightweight and efficient property management system designed for small to medium-sized accommodations. Features include booking management, guest communication, and channel integration. Ideal for properties seeking a fast and easy-to-use solution.",
    icon: "https://storage.googleapis.com/your-bucket/turbopms-icon.png",
    categories: ["PMS"]
  },
  {
    id: "85",
    name: "Hotelsminder",
    description: "A cloud-based property management solution offering tools for booking management, channel synchronization, and operational efficiency. Ideal for small to medium-sized accommodations seeking to streamline processes and improve guest experiences.",
    icon: "https://storage.googleapis.com/your-bucket/hotelsminder-icon.png",
    categories: ["PMS"]
  },
  {
    id: "86",
    name: "HotelMU",
    description: "An Indonesia-based property management system designed to streamline hotel operations, offering features such as booking management, guest communication, and financial tracking.",
    icon: "https://storage.googleapis.com/your-bucket/hotelmu-icon.png",
    categories: ["PMS"]
  },
  {
    id: "87",
    name: "Guest.Guru",
    description: "A specialized platform for revenue optimization and guest engagement, offering tools for dynamic pricing, upselling, and personalized communication. Ideal for properties seeking to boost revenue and enhance guest satisfaction.",
    icon: "https://storage.googleapis.com/your-bucket/guestguru-icon.png",
    categories: ["PMS"]
  },
  {
    id: "88",
    name: "Lodging System",
    description: "A comprehensive cloud-based property management solution offering tools for reservations, channel management, and guest services. Ideal for hotels, resorts, and vacation rentals seeking to streamline operations and enhance guest experiences.",
    icon: "https://storage.googleapis.com/your-bucket/lodgingsystem-icon.png",
    categories: ["PMS"]
  },
  {
    id: "89",
    name: "Digitelia",
    description: "A cutting-edge platform specializing in digital transformation for the hospitality industry, offering tools for online bookings, marketing, and operational efficiency. Ideal for properties looking to modernize and enhance their digital presence.",
    icon: "https://storage.googleapis.com/your-bucket/digitelia-icon.png",
    categories: ["PMS"]
  },
  {
    id: "90",
    name: "HotelPoint",
    description: "A Greek-based property management system offering tools for booking management, channel integration, and guest communication. Ideal for hotels and accommodations seeking a localized and efficient solution to streamline operations.",
    icon: "https://storage.googleapis.com/your-bucket/hotelpoint-icon.png",
    categories: ["PMS"]
  },
  {
    id: "91",
    name: "OnePlace",
    description: "A Mexico-based property management platform providing tools for reservation management, channel integration, and guest communication. Ideal for accommodations in Latin America seeking an intuitive and localized solution to enhance efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/oneplace-icon.png",
    categories: ["PMS", "Latin America"]
  },
  {
    id: "92",
    name: "ResBook",
    description: "A cloud-based property management system designed for boutique accommodations, lodges, and vacation rentals. Offers tools for booking management, channel integration, and guest communication.",
    icon: "https://storage.googleapis.com/your-bucket/resbook-icon.png",
    categories: ["PMS"]
  },
  {
    id: "93",
    name: "Easy Front Desk by BrattaSoft",
    description: "A comprehensive property management solution tailored for hotels and accommodations, offering tools for reservations, billing, and operational management. Ideal for properties in Latin America.",
    icon: "https://storage.googleapis.com/your-bucket/brattosoft-icon.png",
    categories: ["PMS", "Latin America"]
  },
  {
    id: "94",
    name: "Lodgy",
    description: "A property management system designed for hotels and accommodations in Latin America, offering tools for reservation management, billing, and operational efficiency. Ideal for properties seeking a localized and comprehensive solution to optimize their operations.",
    icon: "https://storage.googleapis.com/your-bucket/lodgy-icon.png",
    categories: ["PMS", "Latin America"]
  },
  {
    id: "95",
    name: "Sky Arabia PMS",
    description: "A cloud-based property management system tailored for hotels and accommodations in the MENA region. Offers features like booking management, channel integration, and guest services.",
    icon: "https://storage.googleapis.com/your-bucket/skyarabia-icon.png",
    categories: ["PMS"]
  },
  {
    id: "96",
    name: "Bouk by Ed Hotels",
    description: "A comprehensive property management solution offering tools for reservations, channel management, and revenue optimization. Ideal for hotels and accommodations seeking to enhance operations, improve guest experiences, and maximize profitability.",
    icon: "https://storage.googleapis.com/your-bucket/bouk-icon.png",
    categories: ["PMS"]
  },
  {
    id: "97",
    name: "Hotelgest",
    description: "A cloud-based property management system designed for independent hotels and small accommodations. Offers features like booking management, channel integration, and guest communication. Ideal for properties seeking a simple and efficient solution to streamline operations and boost revenue.",
    icon: "https://storage.googleapis.com/your-bucket/hotelgest-icon.png",
    categories: ["PMS"]
  },
  {
    id: "98",
    name: "ResClick",
    description: "A user-friendly property management system designed for small to medium-sized accommodations. Offers tools for booking management, channel integration, and direct booking optimization. Ideal for properties in Spanish-speaking markets",
    icon: "https://storage.googleapis.com/your-bucket/resclick-icon.png",
    categories: ["PMS"]
  },
  {
    id: "99",
    name: "PetroffSoft",
    description: "A Bulgarian-based property management system offering solutions for hotels and accommodations, including reservation management, billing, and reporting. Ideal for properties seeking a reliable and localized tool to streamline operations and enhance guest services.",
    icon: "https://storage.googleapis.com/your-bucket/petroffsoft-icon.png",
    categories: ["PMS"]
  },
  {
    id: "100",
    name: "StarHotelier",
    description: "A comprehensive property management system designed for hotels and accommodations, offering features such as reservation management, channel integration, and guest communication.",
    icon: "https://storage.googleapis.com/your-bucket/starhotelier-icon.png",
    categories: ["PMS"]
  },
  {
    id: "101",
    name: "Bitz Softwares",
    description: "A Brazilian-based property management system providing solutions for hotels, inns, and vacation rentals. Features include reservation management, financial control, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/bitzsoftwares-icon.png",
    categories: ["PMS", "Latin America"]
  },
  {
    id: "102",
    name: "GuestPro",
    description: "An Indonesia-based property management system offering tools for booking management, guest services, and operational automation. Ideal for hotels, guesthouses, and resorts in Southeast Asia seeking an intuitive and efficient solution to enhance their operations.",
    icon: "https://storage.googleapis.com/your-bucket/guestpro-icon.png",
    categories: ["PMS", "Asia"]
  },
  {
    id: "103",
    name: "NewSoft PMS",
    description: "A flexible property management system offering tools for reservations, channel management, and guest services. Ideal for hotels, resorts, and accommodations seeking a reliable solution to streamline operations and optimize efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/newsoft-icon.png",
    categories: ["PMS", "Asia"]
  },
  {
    id: "104",
    name: "Callista",
    description: "A comprehensive property management system designed for hotels and resorts, offering tools for reservations, billing, and channel management. Ideal for properties seeking a scalable and efficient solution to enhance operations and guest experiences.",
    icon: "https://storage.googleapis.com/your-bucket/callista-icon.png",
    categories: ["PMS"]
  },
  {
    id: "105",
    name: "Wander",
    description: "A modern platform for managing luxury vacation rentals, offering features like smart home integration, seamless booking management, and guest services. Ideal for high-end properties seeking to provide exceptional and tech-enabled guest experiences.",
    icon: "https://storage.googleapis.com/your-bucket/wander-icon.png",
    categories: ["PMS", "Luxury", "Vacation Rentals"]
  },
  {
    id: "106",
    name: "Blue Jay PMS",
    description: "A cloud-based property management system designed for small to medium-sized accommodations. Offers features like booking management, channel integration, and guest communication. Ideal for properties seeking an affordable and efficient solution to streamline operations.",
    icon: "https://storage.googleapis.com/your-bucket/bluejay-icon.png",
    categories: ["PMS", "Asia"]
  },
  {
    id: "107",
    name: "Book.World",
    description: "A global property management and booking platform offering tools for reservations, channel management, and guest services. Ideal for hotels and vacation rentals seeking a seamless solution to manage bookings and enhance operational efficiency across multiple channels.",
    icon: "https://storage.googleapis.com/your-bucket/bookworld-icon.png",
    categories: ["PMS"]
  },
  {
    id: "108",
    name: "GuestPoint",
    description: "A cloud-based property management system designed for hotels, resorts, and vacation rentals. Offers features like booking management, channel integration, and guest communication tools.",
    icon: "https://storage.googleapis.com/your-bucket/guestpoint-icon.png",
    categories: ["PMS"]
  },
  {
    id: "109",
    name: "Retreat Guru",
    description: "A platform designed for wellness retreats and group experiences, offering tools for booking management, payment processing, and guest communication. Ideal for properties focused on retreats, wellness, and holistic experiences.",
    icon: "https://storage.googleapis.com/your-bucket/retreatguru-icon.png",
    categories: ["PMS"]
  },
  {
    id: "110",
    name: "Aaryatm",
    description: "A property management system designed for hotels and accommodations, offering tools for booking management, guest communication, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/aaryatm-icon.png",
    categories: ["PMS"]
  },
  {
    id: "111",
    name: "Mashvisor",
    description: "A real estate analytics platform designed for investors and property managers, offering tools for property search, rental analysis, and investment insights. Ideal for those seeking to optimize property investments and make data-driven decisions in real estate.",
    icon: "https://storage.googleapis.com/your-bucket/mashvisor-icon.png",
    categories: ["PMS"]
  },
  {
    id: "112",
    name: "Webia",
    description: "A Finnish-based platform offering property management and reservation solutions for hotels, vacation rentals, and accommodations. Features include booking management, channel integration, and guest communication.",
    icon: "https://storage.googleapis.com/your-bucket/webia-icon.png",
    categories: ["PMS"]
  },
  {
    id: "113",
    name: "Ayenda",
    description: "A hotel chain management platform offering tools for booking management, revenue optimization, and guest services. Ideal for budget accommodations and small hotel chains in Latin America seeking to streamline operations and enhance guest experiences.",
    icon: "https://storage.googleapis.com/your-bucket/ayenda-icon.png",
    categories: ["PMS", "Latin America"]
  },
  {
    id: "114",
    name: "HotelMeister",
    description: "A comprehensive property management system designed for hotels and accommodations, offering features like booking management, guest communication, and reporting tools.",
    icon: "https://storage.googleapis.com/your-bucket/hotelmeister-icon.png",
    categories: ["PMS"]
  },
  {
    id: "115",
    name: "Bookelier",
    description: "A property management and booking platform designed for boutique hotels and accommodations, offering tools for reservations, guest communication, and revenue management.",
    icon: "https://storage.googleapis.com/your-bucket/bookelier-icon.png",
    categories: ["PMS"]
  },
  {
    id: "116",
    name: "Servoit Solutions",
    description: "A Philippine-based provider of property management systems and IT solutions for the hospitality industry. Offering tools for reservation management, guest services, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/servoit-icon.png",
    categories: ["PMS", "Asia"]
  },
  {
    id: "117",
    name: "Revenatium",
    description: "A revenue management platform designed for hotels and accommodations, offering tools for dynamic pricing, forecasting, and performance analysis.",
    icon: "https://storage.googleapis.com/your-bucket/revenatium-icon.png",
    categories: ["PMS"]
  },
  {
    id: "118",
    name: "Atlantis Asia",
    description: "A provider of tailored property management and IT solutions for the hospitality industry in Asia. Offering tools for reservation management, guest communication, and operational optimization.",
    icon: "https://storage.googleapis.com/your-bucket/atlantisasia-icon.png",
    categories: ["PMS", "Asia"]
  },
  {
    id: "119",
    name: "Zaaer",
    description: "A property management system offering tools for booking management, guest communication, and operational efficiency. Ideal for hotels and accommodations seeking an intuitive, cloud-based solution to streamline operations and enhance guest experiences.",
    icon: "https://storage.googleapis.com/your-bucket/zaaer-icon.png",
    categories: ["PMS"]
  },
  {
    id: "120",
    name: "EzyInn",
    description: "A cloud-based property management system designed for small to medium-sized accommodations, offering tools for booking management, guest communication, and channel integration.",
    icon: "https://storage.googleapis.com/your-bucket/ezyinn-icon.png",
    categories: ["PMS"]
  },
  {
    id: "121",
    name: "Big Solutions",
    description: "An Indonesia-based provider of property management and IT solutions, offering tools for hotel management, booking integration, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/bigsolutions-icon.png",
    categories: ["PMS", "Asia"]
  },
  {
    id: "122",
    name: "StarRez",
    description: "A leading property management system designed for student housing, multifamily, and vacation rentals. Offers tools for reservation management, billing, maintenance, and guest communication.",
    icon: "https://storage.googleapis.com/your-bucket/starrez-icon.png",
    categories: ["PMS"]
  },
  {
    id: "123",
    name: "RoverPass",
    description: "A property management platform designed for campgrounds, RV parks, and outdoor accommodations. Offers tools for reservation management, payment processing, and guest communication.",
    icon: "https://storage.googleapis.com/your-bucket/roverpass-icon.png",
    categories: ["PMS", "Outdoor"]
  },
  {
    id: "124",
    name: "Firefly Reservations",
    description: "A cloud-based property management system designed for vacation rentals, offering tools for booking management, guest communication, and channel integration.",
    icon: "https://storage.googleapis.com/your-bucket/firefly-icon.png",
    categories: ["PMS", "Outdoor"]
  },
  {
    id: "125",
    name: "Fitshotel",
    description: "A property management system designed for the hospitality industry, offering tools for booking management, guest services, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/fitshotel-icon.png",
    categories: ["PMS"]
  },
  {
    id: "126",
    name: "Hiswen",
    description: "A property management system offering solutions for hotel management, booking integration, and guest services. Ideal for hotels and accommodations seeking an efficient platform to streamline operations, manage bookings, and enhance guest experiences.",
    icon: "https://storage.googleapis.com/your-bucket/hiswen-icon.png",
    categories: ["PMS"]
  },
  {
    id: "127",
    name: "Bidrento",
    description: "A property management and rental platform offering tools for booking management, payment processing, and guest communication.",
    icon: "https://storage.googleapis.com/your-bucket/bidrento-icon.png",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "128",
    name: "GetaBedSuite",
    description: "A property management system designed for hotels, vacation rentals, and guesthouses, offering tools for booking management, guest communication, and channel integration.",
    icon: "https://storage.googleapis.com/your-bucket/getabedsuite-icon.png",
    categories: ["PMS"]
  },
  {
    id: "129",
    name: "Zimple.Cloud",
    description: "A cloud-based property management system offering tools for booking management, guest communication, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/zimplecloud-icon.png",
    categories: ["PMS"]
  },
  {
    id: "130",
    name: "The Zenden Group",
    description: "A hospitality management platform offering solutions for property management, booking integration, and guest services.",
    icon: "https://storage.googleapis.com/your-bucket/zendengroup-icon.png",
    categories: ["PMS"]
  },
  {
    id: "131",
    name: "EZCloud",
    description: "A cloud-based property management system offering solutions for booking management, guest communication, and operational efficiency. Ideal for hotels, resorts, and guesthouses in Vietnam and Southeast Asia.",
    icon: "https://storage.googleapis.com/your-bucket/ezcloud-icon.png",
    categories: ["PMS", "Asia"]
  },
  {
    id: "132",
    name: "RevivoTech",
    description: "An India-based provider of property management and revenue optimization solutions, offering tools for booking management, dynamic pricing, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/revivotech-icon.png",
    categories: ["PMS", "Asia"]
  },
  {
    id: "133",
    name: "Citrus PMS",
    description: "A cloud-based property management system offering features for booking management, guest services, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/citrus-icon.png",
    categories: ["PMS", "Asia"]
  },
  {
    id: "134",
    name: "Alojate Pro",
    description: "A property management system designed for vacation rentals and small accommodations, offering tools for booking management, guest communication, and financial tracking.",
    icon: "https://storage.googleapis.com/your-bucket/alojatepro-icon.png",
    categories: ["PMS"]
  },
  {
    id: "135",
    name: "CakraSoft",
    description: "A property management software provider offering solutions for booking management, guest services, and hotel operations.",
    icon: "https://storage.googleapis.com/your-bucket/cakrasoft-icon.png",
    categories: ["PMS", "Asia"]
  },
  {
    id: "136",
    name: "Msool",
    description: "A cloud-based property management platform offering tools for booking management, guest communication, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/msool-icon.png",
    categories: ["PMS"]
  },
  {
    id: "137",
    name: "Jaras.io",
    description: "A property management system offering tools for booking management, guest communication, and operational efficiency. Ideal for hotels and accommodations seeking a user-friendly, scalable solution to streamline operations and enhance guest satisfaction.",
    icon: "https://storage.googleapis.com/your-bucket/jarasio-icon.png",
    categories: ["PMS"]
  },
  {
    id: "138",
    name: "Host-It",
    description: "An Austrian-based property management system offering solutions for booking management, channel integration, and guest services.",
    icon: "https://storage.googleapis.com/your-bucket/hostit-icon.png",
    categories: ["PMS"]
  },
  {
    id: "139",
    name: "Sophia Solution",
    description: "A property management and hospitality solution provider offering tools for booking management, guest communication, and operational optimization.",
    icon: "https://storage.googleapis.com/your-bucket/sophiasolution-icon.png",
    categories: ["PMS"]
  },
  {
    id: "140",
    name: "Hotelzify",
    description: "A property management system offering tools for booking management, guest communication, and channel integration.",
    icon: "https://storage.googleapis.com/your-bucket/hotelzify-icon.png",
    categories: ["PMS"]
  },
  {
    id: "141",
    name: "BeBetter Hotels",
    description: "A property management platform designed to optimize hotel operations, offering tools for booking management, guest communication, and revenue management.",
    icon: "https://storage.googleapis.com/your-bucket/bebetterhotels-icon.png",
    categories: ["PMS", "Latin America"]
  },
  {
    id: "142",
    name: "RezStream",
    description: "A cloud-based property management system offering features for booking management, channel integration, and guest services.",
    icon: "https://storage.googleapis.com/your-bucket/rezstream-icon.png",
    categories: ["PMS"]
  },
  {
    id: "143",
    name: "Vikey",
    description: "A cloud-based property management system offering tools for booking management, guest communication, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/vikey-icon.png",
    categories: ["PMS"]
  },
  {
    id: "144",
    name: "Dibooq",
    description: "A cloud-based property management system offering solutions for booking management, guest communication, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/dibooq-icon.png",
    categories: ["PMS"]
  },
  {
    id: "145",
    name: "EveryLeisure",
    description: "A property management and booking platform designed for leisure facilities, including parks, resorts, and recreational accommodations. Offers tools for reservation management, guest services, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/everyleisure-icon.png",
    categories: ["PMS", "Outdoor"]
  },
  {
    id: "146",
    name: "Aplend",
    description: "A property management and booking platform designed for vacation rentals, resorts, and chalets. Offering tools for booking management, guest communication, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/aplend-icon.png",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "147",
    name: "Livedin",
    description: "A property management and guest experience platform designed for vacation rentals and boutique accommodations. Offering tools for booking management, guest communication, and personalized services.",
    icon: "https://storage.googleapis.com/your-bucket/livedin-icon.png",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "148",
    name: "GoHost",
    description: "A property management system designed for small to medium-sized accommodations, offering tools for booking management, guest services, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/gohost-icon.png",
    categories: ["PMS"]
  },
  {
    id: "149",
    name: "Beingidly",
    description: "A property management and automation platform offering tools for booking management, guest communication, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/beingidly-icon.png",
    categories: ["PMS"]
  },
  {
    id: "150",
    name: "Wasimil",
    description: "A property management system offering solutions for booking management, guest services, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/wasimil-icon.png",
    categories: ["PMS"]
  },
  {
    id: "151",
    name: "Diafasol",
    description: "A property management solution offering tools for booking management, guest communication, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/diafasol-icon.png",
    categories: ["PMS"]
  },
  {
    id: "152",
    name: "Hanz",
    description: "A property management system designed for hotels and accommodations in Vietnam, offering features like booking management, guest services, and operational optimization.",
    icon: "https://storage.googleapis.com/your-bucket/hanz-icon.png",
    categories: ["PMS", "Asia"]
  },
  {
    id: "153",
    name: "RunHotel",
    description: "A cloud-based property management system designed to streamline hotel operations, offering tools for booking management, guest communication, and revenue optimization.",
    icon: "https://storage.googleapis.com/your-bucket/runhotel-icon.png",
    categories: ["PMS"]
  },
  {
    id: "154",
    name: "Zotel.ai",
    description: "An AI-driven property management system designed to optimize hotel operations, offering features like booking management, dynamic pricing, and guest services automation.",
    icon: "https://storage.googleapis.com/your-bucket/zotelai-icon.png",
    categories: ["PMS"]
  },
  {
    id: "155",
    name: "SaffronStays",
    description: "A hospitality platform specializing in managing and booking unique, luxury vacation homes and villas. Ideal for property owners and travelers seeking curated, high-end stays in various destinations.",
    icon: "https://storage.googleapis.com/your-bucket/saffronstays-icon.png",
    categories: ["PMS"]
  },
  {
    id: "156",
    name: "Halmo",
    description: "A property management system designed for hotels and accommodations, offering tools for booking management, guest communication, and operational optimization.",
    icon: "https://storage.googleapis.com/your-bucket/halmo-icon.png",
    categories: ["PMS"]
  },
  {
    id: "157",
    name: "Rentware",
    description: "A property management and rental platform offering solutions for booking management, guest communication, and payment processing.",
    icon: "https://storage.googleapis.com/your-bucket/rentware-icon.png",
    categories: ["PMS"]
  },
  {
    id: "158",
    name: "TodoAlojamiento",
    description: "A property management and booking platform designed for accommodations, offering tools for reservation management, guest services, and operational optimization.",
    icon: "https://storage.googleapis.com/your-bucket/todoalojamiento-icon.png",
    categories: ["PMS"]
  },
  {
    id: "159",
    name: "Hosroom",
    description: "A property management system offering solutions for booking management, guest communication, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/hosroom-icon.png",
    categories: ["PMS"]
  },
  {
    id: "160",
    name: "Twik PMS",
    description: "A cloud-based property management system offering tools for booking management, guest services, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/twikpms-icon.png",
    categories: ["PMS"]
  },
  {
    id: "161",
    name: "JoodBooking",
    description: "A property management and booking platform designed for small to medium-sized accommodations, offering features like reservation management, guest communication, and payment processing.",
    icon: "https://storage.googleapis.com/your-bucket/joodbooking-icon.png",
    categories: ["PMS"]
  },
  {
    id: "162",
    name: "TrivSmart",
    description: "A property management system designed to streamline hotel operations, offering tools for booking management, guest communication, and revenue optimization.",
    icon: "https://storage.googleapis.com/your-bucket/trivsmart-icon.png",
    categories: ["PMS"]
  },
  {
    id: "163",
    name: "HelloHosty",
    description: "A property management and automation platform designed for vacation rental owners and managers, offering tools for booking management, guest communication, and operations automation.",
    icon: "https://storage.googleapis.com/your-bucket/hellohosty-icon.png",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "164",
    name: "Appartman.hu",
    description: "A property management platform focused on vacation rentals and apartments, offering tools for booking management, guest communication, and operational efficiency. Ideal for property owners in Hungary.",
    icon: "https://storage.googleapis.com/your-bucket/appartmanhu-icon.png",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "165",
    name: "Hububb",
    description: "A property management platform offering solutions for booking management, guest services, and operational efficiency. Ideal for small to medium-sized hotels, vacation rentals.",
    icon: "https://storage.googleapis.com/your-bucket/hububb-icon.png",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "167",
    name: "Bookinglayer",
    description: "A cloud-based property management system designed for boutique accommodations, retreat centers, and activity-based businesses. Offering tools for booking management, guest communication, and payment processing.",
    icon: "https://storage.googleapis.com/your-bucket/bookinglayer-icon.png",
    categories: ["PMS"]
  },
  {
    id: "168",
    name: "SIHoteles",
    description: "A comprehensive property management system designed for hotels and accommodations, offering tools for booking management, guest services, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/sihoteles-icon.png",
    categories: ["PMS"]
  },
  {
    id: "169",
    name: "PassPass",
    description: "A property management and guest experience platform offering tools for booking management, contactless check-in, and guest communication.",
    icon: "https://storage.googleapis.com/your-bucket/passpass-icon.png",
    categories: ["PMS"]
  },
  {
    id: "170",
    name: "Ozin.ai",
    description: "An AI-powered property management system designed to optimize hotel operations, offering features like dynamic pricing, booking management, and guest communication.",
    icon: "https://storage.googleapis.com/your-bucket/ozinai-icon.png",
    categories: ["PMS"]
  },
  {
    id: "171",
    name: "SeguriServer",
    description: "A property management and security platform offering solutions for booking management, guest communication, and data security.",
    icon: "https://storage.googleapis.com/your-bucket/seguriserver-icon.png",
    categories: ["PMS"]
  },
  {
    id: "172",
    name: "MyTourist Cloud",
    description: "A cloud-based property management system designed for hotels, resorts, and vacation rentals. Offering tools for booking management, guest communication, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/mytouristcloud-icon.png",
    categories: ["PMS"]
  },
  {
    id: "173",
    name: "ReyHut",
    description: "A property management and booking platform designed for small to medium-sized accommodations. Offering tools for reservation management, guest communication, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/reyhut-icon.png",
    categories: ["PMS"]
  },
  {
    id: "174",
    name: "Sojori",
    description: "A property management and booking platform designed for vacation rentals and boutique accommodations. Offering tools for booking management, guest communication, and operational optimization.",
    icon: "https://storage.googleapis.com/your-bucket/sojori-icon.png",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "175",
    name: "Guestpedia",
    description: "A property management system offering tools for booking management, guest communication, and operational efficiency. Ideal for hotels, resorts, and vacation rentals seeking an intuitive platform to enhance guest experiences and streamline daily operations.",
    icon: "https://storage.googleapis.com/your-bucket/guestpedia-icon.png",
    categories: ["PMS"]
  },
  {
    id: "176",
    name: "Mr. Alfred",
    description: "A property management and guest experience platform designed for hotels, resorts, and vacation rentals. Offering tools for booking management, guest communication, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/mralfred-icon.png",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "177",
    name: "Project Bay",
    description: "A property management platform offering solutions for booking management, guest services, and operational efficiency. Ideal for hotels, resorts, and vacation rentals.",
    icon: "https://storage.googleapis.com/your-bucket/projectbay-icon.png",
    categories: ["PMS"]
  },
  {
    id: "178",
    name: "Dolcerent",
    description: "A property management and rental platform designed for vacation rentals and short-term accommodations. Offering tools for booking management, payment processing, and guest communication.",
    icon: "https://storage.googleapis.com/your-bucket/dolcerent-icon.png",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "179",
    name: "Hoone",
    description: "A property management and booking platform designed for vacation rentals and small accommodations. Offering features for booking management, guest communication, and operational efficiency.",
    icon: "https://storage.googleapis.com/your-bucket/hoone-icon.png",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "180",
    name: "B-Company",
    description: "A Swiss-based company offering property management and IT solutions for the hospitality industry. Specializing in booking management, guest services, and operational optimization",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "186",
    name: "Muaroa",
    description: "Muaroa provides website solutions for tourism and businesses in French Polynesia, including online bookings, payments, and marketing services.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "187",
    name: "Annwn Stay",
    description: "Annwn Stay is an integrated hospitality platform offering tools like a guest app for self-check-in, a channel manager, a booking engine, and a property management system to automate operations and enhance guest experiences.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "188",
    name: "TIC Rural",
    description: "TIC Rural is a booking service offering over 300 rural houses in Catalonia, Spain, providing online reservations and personalized customer support.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "189",
    name: "Hotelfabrik",
    description: "Hotelfabrik is an IT consulting firm based in South Tyrol, Italy, specializing in optimizing hotel operations through services like hospitality consulting, tailored software solutions, and comprehensive technical support.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "190",
    name: "uhotels",
    description: "UHotels.app offers digital solutions for the hospitality industry, including a guest app for service orders and payments, a booking engine integrated with systems like Fidelio and Opera, and cloud-based hotel websites with availability calendars.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "191",
    name: "OpenHotel",
    description: "OpenHotel provides a comprehensive cloud-based Property Management System (PMS) designed to streamline hotel operations. Their integrated solutions include channel management, yield management, and enterprise management tools, all developed in-house for seamless functionality.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "192",
    name: "BV Trip",
    description: "BV Trip is a reservation management system designed for small to medium-sized accommodations, such as bed and breakfasts and campsites.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS", "Asia"]
  },
  {
    id: "193",
    name: "Waverick",
    description: "Waverick Adventures is a platform that allows users to find and compare surf camps and schools across various Moroccan destinations, including Taghazout, Rabat, Imsouane, Dakhla, Casablanca, and Essaouira.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["OTA"]
  },
  {
    id: "194",
    name: "Hugo-hotelsoftware",
    description: "HUGO Hotelsoftware is a professional cloud-based hotel management system offering features such as an online booking engine, channel manager, and digital guest services.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "195",
    name: "Pricelabs",
    description: "PriceLabs is a cloud-based dynamic pricing and revenue management tool designed for the vacation and short-term rental industry. It offers automated, data-driven pricing recommendations.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["RMS"]
  },
  {
    id: "196",
    name: "Adcsystems",
    description: "ADC sistemi d.o.o. offers an intuitive property management system (PMS) designed for tourist accommodations, providing seamless automation and guest convenience.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "197",
    name: "Stayhub",
    description: "StayHub is a Saudi-based property management system (PMS) designed to simplify rental operations for vacation rentals, private units, and serviced apartments. It offers centralized tools for booking management, pricing automation, smart lock integration, and compliance with local platforms like Shmoos and Absher.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "198",
    name: "Labuhardilla",
    description: "Labuhardilla.online is a property management system (PMS) tailored for boutique accommodations, offering tools for booking management, guest communication, and operational automation.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "199",
    name: "Credencesoft",
    description: "CredenceSoft's BookOne PMS is a cloud-based property management system designed to streamline hotel operations, including front desk management, reservations, billing, housekeeping, and guest services.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "200",
    name: "Hotelar",
    description: "Hotelar is an intuitive online property management system (PMS) designed for hotels, guesthouses, hostels, and similar accommodations. It simplifies reservation and stay management with features like drag-and-drop booking, real-time room status updates, and automated document generation.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "201",
    name: "Priceone",
    description: "PriceOne.ai is an AI-driven, all-in-one platform that integrates Property Management System (PMS), Channel Management System (CMS), and Revenue Management System (RMS) functionalities.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "202",
    name: "Homeyhuts",
    description: "Homeyhuts is an India-based platform offering flexible property management solutions for homestays and vacation rentals. It provides tools for listing optimization, calendar synchronization, guest communication, and marketing support.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "203",
    name: "Quartoverde",
    description: "QuartoVerde is a cloud-based property management system (PMS) tailored for small to mid-sized hospitality businesses. It offers a free plan with essential features such as unlimited reservations, guest registration.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "204",
    name: "Reeka",
    description: "Reeka is a property management system (PMS) tailored for short-term rental operators, particularly in Africa.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "205",
    name: "Connectingpax",
    description: "ConnectingPax is a Brazil-based, cloud-native property management system (PMS) designed for hotels and guesthouses. It offers comprehensive modules for reservations, housekeeping, finance, and guest services, all accessible via desktop or mobile.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS", "Latin America"]
  },
  {
    id: "206",
    name: "Zafari",
    description: "Zafari is a no-cost, Africa-focused property management and booking system designed for safari lodges, boutique hotels, and vacation rentals. It offers direct booking tools, flexible rate management (including resident/non-resident pricing), and seamless OTA synchronization.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS", "Asia"]
  },
  {
    id: "207",
    name: "Djituhs",
    description: "Djitu Hospitality Solution is a Bali-based property management and revenue optimization company serving over 100 hotels, villas, and resorts across Indonesia.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS", "Asia"]
  },
  {
    id: "208",
    name: "Bedlygo",
    description: "BedlyGo is an AI-powered platform designed for short-term rental professionals, offering advanced market analysis, dynamic pricing tools, and customizable PDF reports to optimize revenue and reduce investment risk.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "209",
    name: "Snapguest",
    description: "SnapGuest is a mobile-first property management solution tailored for short-term rental hosts and small accommodation providers in Slovenia and Croatia. It streamlines guest registration by scanning MRZ codes on passports or IDs, automatically syncing data with national systems like eTurizem (AJPES) and eVisitor.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "210",
    name: "Staylist",
    description: "Staylist is a comprehensive, cloud-based property management system (PMS) tailored for RV parks, campgrounds, cabins, and glamping sites. It offers an all-in-one solution encompassing reservations, guest communication, dynamic pricing, and integrated point-of-sale (POS) systems.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "211",
    name: "HotelFriend",
    description: "HotelFriend is a comprehensive, cloud-based Property Management System (PMS) designed to streamline hotel operations and enhance guest experiences.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["PMS"]
  },
  {
    id: "212",
    name: "Pitchup",
    description: "Pitchup.com is a leading online booking platform specializing in outdoor accommodations such as campsites, glamping sites, and caravan parks.",
    icon: "https://storage.googleapis.com/your-bucket/bcompany-icon.png",
    categories: ["OTA"]
  }
];
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Code2, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Lock,
  Activity,
  CreditCard,
  Puzzle,
  FileText,
  Webhook,
  Users,
  Eye
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: Smartphone,
      title: "White Label Channel Manager",
      description: "Seamlessly integrates into PMS platforms with your brand, your experience — Channex stays invisible. Fast to implement via API or iFrame widget.",
      highlight: "Your Brand"
    },
    {
      icon: Zap,
      title: "Real-Time OTA Connectivity",
      description: "Certified connections with Booking.com, Expedia, Airbnb, Agoda, and more. Instant updates for availability, rates, and restrictions with automatic reservation import & sync.",
      highlight: "Instant Updates"
    },
    {
      icon: Code2,
      title: "Powerful API for Developers",
      description: "Fully documented REST API built for fast, scalable integrations with modern authentication, API keys, and granular access control.",
      highlight: "Developer First"
    },
    {
      icon: BarChart3,
      title: "High Reliability & Speed",
      description: "Built with performance in mind featuring low-latency updates to OTAs and scales seamlessly with your PMS growth.",
      highlight: "99.9% Uptime"
    },
    {
      icon: Users,
      title: "Multi-Property & Group Support",
      description: "Manage multiple properties from a single integration. Scalable for PMS systems with enterprise hotel groups.",
      highlight: "Enterprise Ready"
    },
    {
      icon: Eye,
      title: "Full Logs for OTA and PMS",
      description: "See all logs of what was sent to each channel and what the PMS sent to Channex. Find which API call changed availability or prices easily.",
      highlight: "Complete Visibility"
    }
  ];

  const advancedFeatures = [
    {
      icon: CreditCard,
      title: "Payment Gateway API",
      description: "Charge cards without PCI burden. Supports Stripe & other gateways with simple unified API for payments and refunds.",
      badge: "Optional Add-on"
    },
    {
      icon: Puzzle,
      title: "Marketplace & App Integrations",
      description: "Connect to third-party apps (Priceless, Room Price Genie etc.) Future-ready for AI integrations & automation tools.",
      badge: "Optional"
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Secure data handling with full control over access to customer data."
    },
    {
      icon: Activity,
      title: "Activity Logs & Audit Trail",
      description: "Track all API activity for troubleshooting and compliance with transparent data flow."
    }
  ];

  const developerTools = [
    {
      icon: FileText,
      title: "SDKs & Sample Code",
      description: "Easy to get started with comprehensive documentation"
    },
    {
      icon: Lock,
      title: "Sandbox Environment", 
      description: "Test before going live with full API access"
    },
    {
      icon: Webhook,
      title: "Webhooks & Automation Support",
      description: "Connect to Zapier, Make, or your custom workflows"
    }
  ];

  const otaLogos = [
    "Booking.com", "Expedia", "Airbnb", "Agoda", "Hotels.com", "Trip.com"
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Code2 size={16} />
              Complete Feature Overview
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white font-inter leading-tight drop-shadow-lg">
              The Invisible
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Advantage</span>
              <br />for PMS Providers
            </h1>
            
            <p className="text-xl text-white font-inter max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Everything you need to connect your Property Management System to the world's leading booking platforms - while keeping your brand front and center.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white drop-shadow-lg">99.9%</div>
                <div className="text-white/90 drop-shadow-md">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white drop-shadow-lg">&lt;100ms</div>
                <div className="text-white/90 drop-shadow-md">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white drop-shadow-lg">50+</div>
                <div className="text-white/90 drop-shadow-md">OTA Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              The foundation of our channel manager API designed specifically for PMS providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-primary bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <feature.icon size={24} className="text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.highlight}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground font-inter">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Integrations */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Advanced Integrations
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Optional add-ons to extend your PMS capabilities even further.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advancedFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-primary bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <feature.icon size={24} className="text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground font-inter">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Security & Compliance
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Enterprise-grade security and compliance built into every integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-primary bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground font-inter">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Developer-Friendly Tools
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Everything developers need to integrate quickly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {developerTools.map((tool, index) => (
              <Card 
                key={tool.title}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-primary bg-card/50 backdrop-blur-sm text-center"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                    <tool.icon size={24} className="text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground font-inter">
                    {tool.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {tool.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Distribution & OTA Logos */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Global Distribution
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Trusted by PMS providers worldwide with regional OTA support across Asia, Europe, and Americas.
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold text-center text-foreground font-inter mb-8">
              Certified OTA Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
              {otaLogos.map((ota, index) => (
                <div 
                  key={ota} 
                  className="text-center p-4 bg-background/50 rounded-lg border border-border/30 hover:border-primary/20 transition-colors w-full"
                >
                  <div className="text-lg font-semibold text-foreground">{ota}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">
              And 40+ more regional and niche booking platforms
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white shadow-glow">
            <h2 className="text-4xl lg:text-5xl font-bold font-inter mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 font-inter mb-8 max-w-2xl mx-auto">
              Join hundreds of PMS providers who trust Channex to power their OTA connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-inter">
                View the API
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 font-inter">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
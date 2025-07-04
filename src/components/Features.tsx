import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Smartphone,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Code2,
      title: "Developer-First API",
      description: "Simple, feature-packed REST API with comprehensive documentation. No more CSV mapping or bulky XML files.",
      highlight: "JSON-based"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-100ms response times with 99.9% uptime SLA. Built for scale with global CDN infrastructure.",
      highlight: "<100ms response"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Channex follows industry-standard security practices to help keep your PMS platform and customers protected.",
      highlight: "PCI Compliant"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Connect to 50+ OTAs worldwide including regional and niche booking platforms.",
      highlight: "50+ OTAs"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Monitor API usage, booking performance, and channel health with detailed dashboards.",
      highlight: "Live metrics"
    },
    {
      icon: Smartphone,
      title: "White Label Ready",
      description: "Fully customizable interface that seamlessly integrates with your existing PMS brand.",
      highlight: "Your brand"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            <Code2 size={16} />
            Developer Experience
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
            Built for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Modern PMS</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Everything you need to connect your Property Management System to the world's leading booking platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
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
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded font-inter">
                    {feature.highlight}
                  </span>
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

        {/* Code Example Section */}
        <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-elegant">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground font-inter">
                Get started in minutes
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                Our REST API is designed for developers, by developers. Start integrating with just a few lines of code.
              </p>
              <Button className="bg-gradient-primary hover:shadow-primary transition-all duration-300 font-inter">
                View Full Documentation
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-6 overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-400 text-sm ml-2 font-mono">api.channex.io</span>
              </div>
              <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
{`POST /v1/properties
{
  "property": {
    "title": "Luxury Hotel Downtown",
    "currency": "USD",
    "timezone": "UTC"
  }
}

// Response
{
  "id": "prop_123abc",
  "status": "active",
  "channels": ["booking", "expedia"]
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
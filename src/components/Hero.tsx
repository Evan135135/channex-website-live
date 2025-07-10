import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
const heroImage = "https://cdn.prod.website-files.com/5feef9d9acad0185ffea8445/6005701164ecb7076b1f7cc5_Channex%20Header%20Illustration.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-glow"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-glow" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container mx-auto px-4 lg:px-6 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Zap size={16} />
              NEW: Now you can chat with Booking, Expedia & Airbnb
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground font-inter leading-tight">
                Embedded
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Channel Manager API</span>
                <br />
                for PMS Systems
              </h1>
              
              <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-lg">
                Channex enables Property Management Systems to seamlessly connect with online travel agents like Booking.com, Airbnb, Expedia, and more.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-elegant transition-all duration-300 font-inter text-lg px-8 py-6 h-auto"
                onClick={() => navigate('/start-integration')}
              >
                Start Integration
                <ArrowRight size={20} className="ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/20 hover:bg-primary/5 font-inter text-lg px-8 py-6 h-auto"
                asChild
              >
                <a href="https://docs.channex.io/" target="_blank" rel="noopener noreferrer">
                  <Code size={20} className="mr-2" />
                  View API Docs
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground font-inter">5000+</div>
                <div className="text-sm text-muted-foreground font-inter">Properties Connected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground font-inter">99.9%</div>
                <div className="text-sm text-muted-foreground font-inter">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground font-inter">&lt;100ms</div>
                <div className="text-sm text-muted-foreground font-inter">API Response</div>
              </div>
            </div>
          </div>

          {/* Right content - Dashboard image */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Channex Dashboard Interface" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-primary/5 rounded-2xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-primary animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="text-sm font-medium text-foreground font-inter">Live Sync</div>
              <div className="text-xs text-muted-foreground font-inter">Real-time updates</div>
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-primary animate-fade-in" style={{ animationDelay: "1s" }}>
              <div className="text-sm font-medium text-foreground font-inter">API Calls Today</div>
              <div className="text-2xl font-bold text-primary font-inter">2.4M</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
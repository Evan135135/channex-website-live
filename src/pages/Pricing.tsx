import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Shield, RefreshCw } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Standard Plan",
      price: "$30",
      period: "per month",
      description: "For Individual properties such as hotels and Vacation Rentals to work directly with Channex",
      popular: true,
      features: [
        "Individual property management",
        "Direct hotel integration",
        "Vacation rental support",
        "Basic channel management",
        "Standard support"
      ]
    },
    {
      name: "WhiteLabel",
      price: "$130",
      period: "per Month",
      description: "For tech providers like PMS and Booking Engines. Very Competitive Prices per property.",
      popular: false,
      features: [
        "White-label solution",
        "PMS integration",
        "Booking engine support",
        "Competitive per-property pricing",
        "Advanced features",
        "Priority support"
      ]
    },
    {
      name: "Enterprise",
      price: "Contact",
      period: "per month (billed monthly)",
      description: "For large businesses with special requirements.",
      popular: false,
      features: [
        "Custom requirements",
        "Large-scale deployment",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "Training & onboarding"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Header Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Price plans
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
              Our prices are a fixed fee per month and then a small charge per hotel or vacation rental 
              connected. We only charge for properties with active channels.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most popular
                  </Badge>
                )}
                
                <CardHeader className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-foreground font-inter">{plan.name}</h3>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground font-inter">From</div>
                    <div className="text-4xl font-bold text-foreground font-inter">{plan.price}</div>
                    <div className="text-sm text-muted-foreground font-inter">{plan.period}</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center font-inter">{plan.description}</p>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground font-inter">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary hover:shadow-primary' : ''} font-inter`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* OTA Section */}
          <div className="text-center mb-16 p-8 bg-muted/50 rounded-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-inter">Are you an OTA?</h2>
            <p className="text-muted-foreground font-inter">
              Please get in touch if you would like to connect Channex as a channel
            </p>
          </div>

          {/* Trust Signals */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground font-inter">Accepted Payment Methods</h3>
              <p className="text-muted-foreground font-inter">Visa, Mastercard, and more secure payment options</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <RefreshCw className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground font-inter">Money Back Guarantee</h3>
              <p className="text-muted-foreground font-inter">If you're not 100% satisfied, get your money back</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground font-inter">SSL Secure Payment</h3>
              <p className="text-muted-foreground font-inter">Your information is protected by 256-bit SSL encryption</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
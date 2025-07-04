import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Shield, RefreshCw, X } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Standard Plan",
      price: "$30",
      period: "per month",
      description: "For Individual properties such as hotels and Vacation Rentals to work directly with Channex",
      popular: true,
      features: [
        "Mews or Apaleo PMS Connection",
        "No API access",
        "Channel Manager",
        "Messages And Reviews",
        "Standard Support"
      ]
    },
    {
      name: "WhiteLabel",
      price: "$130",
      period: "per Month",
      description: "For tech providers like PMS and Booking Engines. Very Competitive Prices per property.",
      popular: false,
      features: [
        "Competitive per-property pricing",
        "API Access",
        "White-label solution",
        "Mapping API",
        "Tech Support"
      ]
    },
    {
      name: "Enterprise",
      price: "$1500",
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
                        {feature === "No API access" ? (
                          <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                        ) : (
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        )}
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

          {/* Feature Comparison Table */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-inter">
              Feature Comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-6 font-semibold text-foreground font-inter">Features</th>
                    <th className="text-center p-6 font-semibold text-foreground font-inter">Standard</th>
                    <th className="text-center p-6 font-semibold text-foreground font-inter">WhiteLabel</th>
                    <th className="text-center p-6 font-semibold text-foreground font-inter">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Hotels Fee (Per Property)", standard: "$50", whitelabel: "$7", enterprise: "Contact" },
                    { feature: "Vacation Rental Fee (Per unit)", standard: "$4", whitelabel: "$0.50", enterprise: "Contact" },
                    { feature: "Dashboard", standard: "✓", whitelabel: "✓", enterprise: "✓" },
                    { feature: "PMS Integration", standard: "✓", whitelabel: "✓", enterprise: "✓" },
                    { feature: "API Access", standard: "✗", whitelabel: "✓", enterprise: "✓" },
                    { feature: "Channel Reports", standard: "✓", whitelabel: "✓", enterprise: "✓" },
                    { feature: "Support via Chat & Email", standard: "✓", whitelabel: "✓", enterprise: "✓" },
                    { feature: "Unlimited Users", standard: "✓", whitelabel: "✓", enterprise: "✓" },
                    { feature: "Onboarding & Training", standard: "✓", whitelabel: "✓", enterprise: "✓" },
                    { feature: "Messaging & Reviews App", standard: "Included", whitelabel: "$7 / $0.50", enterprise: "✓" },
                    { feature: "Channel and Mapping API", standard: "✗", whitelabel: "✓", enterprise: "✓" },
                    { feature: "Custom Billing", standard: "✗", whitelabel: "✗", enterprise: "✓" }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/25"}>
                      <td className="p-6 font-medium text-foreground font-inter">{row.feature}</td>
                      <td className="p-6 text-center text-muted-foreground font-inter">
                        {row.standard === "✓" ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : row.standard === "✗" ? (
                          <span className="text-muted-foreground">—</span>
                        ) : (
                          row.standard
                        )}
                      </td>
                      <td className="p-6 text-center text-muted-foreground font-inter">
                        {row.whitelabel === "✓" ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : row.whitelabel === "✗" ? (
                          <span className="text-muted-foreground">—</span>
                        ) : (
                          row.whitelabel
                        )}
                      </td>
                      <td className="p-6 text-center text-muted-foreground font-inter">
                        {row.enterprise === "✓" ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : row.enterprise === "✗" ? (
                          <span className="text-muted-foreground">—</span>
                        ) : (
                          row.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Channels Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center text-foreground mb-8 font-inter">
                Supported Channels
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-6 font-semibold text-foreground font-inter">Channel</th>
                      <th className="text-center p-6 font-semibold text-foreground font-inter">Standard</th>
                      <th className="text-center p-6 font-semibold text-foreground font-inter">WhiteLabel</th>
                      <th className="text-center p-6 font-semibold text-foreground font-inter">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { channel: "Booking.com", standard: "✓", whitelabel: "✓", enterprise: "✓" },
                      { channel: "Expedia", standard: "✓", whitelabel: "✓", enterprise: "✓" },
                      { channel: "Google Hotel Search (Hotels & Vacation Rentals)", standard: "✓", whitelabel: "✓", enterprise: "✓" },
                      { channel: "Airbnb", standard: "✓", whitelabel: "✓", enterprise: "✓" },
                      { channel: "Hostelworld", standard: "✓", whitelabel: "✓", enterprise: "✓" },
                      { channel: "Agoda", standard: "✓", whitelabel: "✓", enterprise: "✓" },
                      { channel: "Hotelbeds", standard: "✓", whitelabel: "✓", enterprise: "✓" },
                      { channel: "Ctrip", standard: "✓", whitelabel: "✓", enterprise: "✓" },
                      { channel: "Other Channels (See integration page for full list)", standard: "✓", whitelabel: "✓", enterprise: "✓" }
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/25"}>
                        <td className="p-6 font-medium text-foreground font-inter">{row.channel}</td>
                        <td className="p-6 text-center text-muted-foreground font-inter">
                          {row.standard === "✓" ? (
                            <Check className="h-5 w-5 text-primary mx-auto" />
                          ) : row.standard === "✗" ? (
                            <span className="text-muted-foreground">—</span>
                          ) : (
                            row.standard
                          )}
                        </td>
                        <td className="p-6 text-center text-muted-foreground font-inter">
                          {row.whitelabel === "✓" ? (
                            <Check className="h-5 w-5 text-primary mx-auto" />
                          ) : row.whitelabel === "✗" ? (
                            <span className="text-muted-foreground">—</span>
                          ) : (
                            row.whitelabel
                          )}
                        </td>
                        <td className="p-6 text-center text-muted-foreground font-inter">
                          {row.enterprise === "✓" ? (
                            <Check className="h-5 w-5 text-primary mx-auto" />
                          ) : row.enterprise === "✗" ? (
                            <span className="text-muted-foreground">—</span>
                          ) : (
                            row.enterprise
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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
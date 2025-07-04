import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Phone, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Ready to
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Get Started?</span>
            </h1>
            
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Join thousands of PMS providers already using Channex to connect their properties worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-border/50 shadow-elegant">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-foreground font-inter">
                    Start Your Integration
                  </h2>
                  <p className="text-muted-foreground font-inter">
                    Get in touch with our team to begin your channel manager integration.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground font-inter">
                        First Name
                      </label>
                      <Input 
                        placeholder="John" 
                        className="border-border/50 focus:border-primary/50 font-inter"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground font-inter">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="border-border/50 focus:border-primary/50 font-inter"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground font-inter">
                      Company Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="border-border/50 focus:border-primary/50 font-inter"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground font-inter">
                      Company Name
                    </label>
                    <Input 
                      placeholder="Your PMS Company" 
                      className="border-border/50 focus:border-primary/50 font-inter"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground font-inter">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your integration needs..."
                      rows={4}
                      className="border-border/50 focus:border-primary/50 font-inter resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300 font-inter"
                    size="lg"
                  >
                    Send Message
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground font-inter">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Our technical team is ready to help you integrate Channex with your PMS. 
                  We provide comprehensive support throughout the integration process.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground font-inter">Email Us</h3>
                    <p className="text-muted-foreground font-inter">hello@channex.io</p>
                    <p className="text-sm text-muted-foreground font-inter">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MessageSquare size={20} className="text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground font-inter">Live Chat</h3>
                    <p className="text-muted-foreground font-inter">Available 24/7</p>
                    <p className="text-sm text-muted-foreground font-inter">Instant technical support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground font-inter">Phone Support</h3>
                    <p className="text-muted-foreground font-inter">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground font-inter">Mon-Fri 9AM-6PM PST</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-subtle border border-border/50 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-foreground font-inter">
                  Self-Service Integration
                </h3>
                <p className="text-sm text-muted-foreground font-inter">
                  Ready to start immediately? Access our staging environment and begin testing your integration today.
                </p>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5 font-inter">
                  Access Staging Environment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
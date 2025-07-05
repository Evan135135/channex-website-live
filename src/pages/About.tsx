import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code2, Users, Globe, Target, Award, ArrowRight, Building, Calendar, MapPin } from "lucide-react";
const About = () => {
  const stats = [{
    number: "50+",
    label: "OTA Partners",
    icon: Globe
  }, {
    number: "99.9%",
    label: "Uptime SLA",
    icon: Award
  }, {
    number: "200+",
    label: "PMS Integrations",
    icon: Building
  }, {
    number: "2019",
    label: "Founded",
    icon: Calendar
  }];
  const values = [{
    icon: Code2,
    title: "Developer First",
    description: "We build APIs that developers love to work with. Clean, well-documented, and reliable."
  }, {
    icon: Users,
    title: "Partnership Focused",
    description: "We're not here to replace PMS systems - we're here to make them more powerful through seamless OTA connectivity."
  }, {
    icon: Target,
    title: "White Label by Design",
    description: "Your brand stays front and center. We remain invisible while powering your connections behind the scenes."
  }, {
    icon: Globe,
    title: "Global Scale",
    description: "From boutique hotels to enterprise chains, our infrastructure scales to meet any demand worldwide."
  }];
  const teamMembers = [{
    name: "Evan Davies",
    role: "CEO & Co-Founder",
    bio: "Former Hotelier with 10+ years in hospitality tech."
  }, {
    name: "Sarah Rodriguez",
    role: "CTO & Co-Founder",
    bio: "API architecture expert who's built scalable systems for millions of bookings."
  }, {
    name: "Marcus Thompson",
    role: "VP of Engineering",
    bio: "15 years experience building enterprise integrations for major hotel chains."
  }, {
    name: "Elena Petrov",
    role: "Head of Partnerships",
    bio: "Deep relationships across the OTA ecosystem, formerly at Expedia Group."
  }];
  return <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white">
              <Users size={16} />
              About Channex
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white font-inter leading-tight drop-shadow-lg">
              Connecting the
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Hospitality</span>
              <br />Ecosystem
            </h1>
            
            <p className="text-xl text-white font-inter max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              We're on a mission to make OTA connectivity seamless for every Property Management System, 
              enabling hotels to focus on what they do best - creating amazing guest experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => <Card key={stat.label} className="text-center border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                    <stat.icon size={24} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground font-inter leading-relaxed">
                The hospitality industry should be about creating great guest experiences — not struggling with technical integrations. 
                We believe Property Management System providers should focus on what they do best: building powerful, user-friendly PMS platforms.
              </p>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                That's why we created Channex: the invisible infrastructure that connects your PMS to the world's 
                leading booking platforms. We handle the complexity of OTA integrations, so you can deliver seamless connectivity without the hassle.
              </p>
              <Button className="bg-gradient-primary hover:shadow-primary transition-all duration-300 font-inter">
                Learn About Our API
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={20} className="text-primary" />
                  <span className="font-semibold text-foreground">Founded in London</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">Born from the frustration of complex hotel tech integrations, Channex was founded by former PMS engineers who understood the pain points firsthand.</p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <Target size={20} className="text-primary" />
                  <span className="font-semibold text-foreground">Developer-Centric Approach</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Every decision we make is viewed through the lens of developer experience. 
                  If it's not simple, fast, and reliable, it doesn't ship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              The principles that guide everything we build and every partnership we form.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => <Card key={value.title} className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-primary bg-card/50 backdrop-blur-sm animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-8 space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit">
                    <value.icon size={24} className="text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground font-inter">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Industry veterans who've been in your shoes and understand the challenges you face.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => <Card key={member.name} className="text-center border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-primary bg-card/50 backdrop-blur-sm animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6 space-y-4">
                  {member.name === "Evan Davies" ? (
                    <img 
                      src="/lovable-uploads/26a78f80-b419-46d5-8783-e6bdceba7694.png" 
                      alt="Evan Davies"
                      className="w-20 h-20 rounded-full mx-auto object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground font-inter">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white shadow-glow">
            <h2 className="text-4xl lg:text-5xl font-bold font-inter mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-white/90 font-inter mb-8 max-w-2xl mx-auto">
              Join the growing community of PMS providers who trust Channex to power their OTA connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-inter">
                Start Integration
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-inter">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;
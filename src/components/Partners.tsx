import airbnbLogo from "@/assets/airbnb-logo.png";

const Partners = () => {
  const partners = [
    {
      name: "Booking.com",
      logo: "https://cdn.prod.website-files.com/5feef9d9acad0185ffea8445/5ff5c9b59aa1ba29e0358d65_booking%20logo.svg"
    },
    {
      name: "Expedia",
      logo: "/images/integrations/expedia.svg"
    },
    {
      name: "Airbnb",
      logo: airbnbLogo
    },
    {
      name: "Hostelworld",
      logo: "/images/integrations/hostelworld.png"
    }
  ];

  return (
    <section className="py-16 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider font-inter">
              TRUSTED BY LEADING PLATFORMS
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Connect seamlessly with the world's largest OTAs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div 
                key={partner.name}
                className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="pt-8">
            <p className="text-sm text-muted-foreground font-inter">
              + 50 more OTA connections available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
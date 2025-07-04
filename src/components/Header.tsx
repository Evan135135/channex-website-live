import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="text-xl font-bold text-foreground font-inter">Channex</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors font-inter">
            About
          </Link>
          <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors font-inter">
            Features
          </Link>
          <Link to="/integrations" className="text-muted-foreground hover:text-foreground transition-colors font-inter">
            Integrations
          </Link>
          <a href="#api" className="text-muted-foreground hover:text-foreground transition-colors font-inter">
            API Docs
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-inter">
            Pricing
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="font-inter">
            Login
          </Button>
          <Button className="bg-gradient-primary hover:shadow-primary transition-all duration-300 font-inter">
            Contact Sales
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors font-inter">
              About
            </Link>
            <Link to="/features" className="block text-muted-foreground hover:text-foreground transition-colors font-inter">
              Features
            </Link>
            <Link to="/integrations" className="block text-muted-foreground hover:text-foreground transition-colors font-inter">
              Integrations
            </Link>
            <a href="#api" className="block text-muted-foreground hover:text-foreground transition-colors font-inter">
              API Docs
            </a>
            <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-colors font-inter">
              Pricing
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start font-inter">
                Login
              </Button>
              <Button className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300 font-inter">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
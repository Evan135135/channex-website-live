import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold font-inter">Channex</span>
            </div>
            <p className="text-slate-400 font-inter leading-relaxed">
              The leading white-label channel manager API for Property Management Systems worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                <Linkedin size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                <Github size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                <Mail size={18} />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-inter">Product</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="https://docs.channex.io/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-inter">API Documentation</a></li>
              <li><Link to="/integrations" className="hover:text-white transition-colors font-inter">Integrations</Link></li>
              <li><a href="https://staging.channex.io/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-inter">Staging Environment</a></li>
              <li><a href="https://status.channex.io/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-inter">Status Page</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-inter">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors font-inter">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors font-inter">Blog</Link></li>
              <li><Link to="/comparison/siteminder" className="hover:text-white transition-colors font-inter">Alternative to Siteminder</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-inter">Support</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="https://help.channex.io/en/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-inter">Help Center</a></li>
              
              
              
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm font-inter">© 2025 Channex. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="/policy#terms" className="hover:text-white transition-colors font-inter">Terms of Service</a>
              <a href="/policy#privacy" className="hover:text-white transition-colors font-inter">Privacy Policy</a>
              <a href="/policy#security" className="hover:text-white transition-colors font-inter">Security Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
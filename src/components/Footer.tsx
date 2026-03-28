import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Aris Global Education</h3>
          <p className="text-primary-foreground/80 text-sm">Empowering Education for a Better Tomorrow</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-secondary transition-colors">Courses</Link></li>
            <li><Link to="/admissions" className="hover:text-secondary transition-colors">Admissions</Link></li>
            <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Programs</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>B.Tech / M.Tech</li>
            <li>BBA / MBA</li>
            <li>B.Pharmacy / M.Pharmacy</li>
            <li>B.Voc & Diploma</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><MapPin size={16} /> New Delhi, India</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91 XXXXX XXXXX</li>
            <li className="flex items-center gap-2"><Mail size={16} /> info@arisglobaleducation.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Aris Global Education. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-red-900 text-white pt-20 pb-10" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative w-12 h-12 flex items-center justify-center">
                 <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                    <path d="M50 10 L90 50 L50 90 L10 50 Z" />
                 </svg>
                 <span className="absolute font-black text-red-900 text-xl">IN</span>
              </div>
              <div className="flex flex-col -ml-1">
                <span className="font-black text-2xl text-white leading-none tracking-tighter">IN-N-OUT</span>
                <span className="font-bold text-sm text-yellow-400 leading-none">BURGER</span>
              </div>
            </Link>
            <p className="text-red-100 text-sm leading-relaxed max-w-xs">
              Serving quality burgers, fries, and shakes since 1948. We take pride in our fresh ingredients and dedication to tradition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-red-800 rounded-full hover:bg-yellow-400 hover:text-red-900 transition-all"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-red-800 rounded-full hover:bg-yellow-400 hover:text-red-900 transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-red-800 rounded-full hover:bg-yellow-400 hover:text-red-900 transition-all"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-400 font-black uppercase tracking-tighter text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/menu" className="text-red-100 hover:text-yellow-400 transition-colors font-medium">Full Menu</Link></li>
              <li><Link to="/locations" className="text-red-100 hover:text-yellow-400 transition-colors font-medium">Locations</Link></li>
              <li><Link to="/about" className="text-red-100 hover:text-yellow-400 transition-colors font-medium">Our Story</Link></li>
              <li><Link to="/merchandise" className="text-red-100 hover:text-yellow-400 transition-colors font-medium">Company Store</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-yellow-400 font-black uppercase tracking-tighter text-lg mb-6">Opportunities</h4>
            <ul className="space-y-4">
              <li><Link to="/careers" className="text-red-100 hover:text-yellow-400 transition-colors font-medium">Careers</Link></li>
              <li><Link to="/contact" className="text-red-100 hover:text-yellow-400 transition-colors font-medium">Contact Us</Link></li>
              <li><a href="#" className="text-red-100 hover:text-yellow-400 transition-colors font-medium">Real Estate</a></li>
              <li><a href="#" className="text-red-100 hover:text-yellow-400 transition-colors font-medium">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-yellow-400 font-black uppercase tracking-tighter text-lg mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-yellow-400 shrink-0" size={20} />
                <span className="text-red-100 text-sm">Corporate Headquarters<br/>4199 Campus Dr. <br/>Irvine, CA 92612</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-yellow-400 shrink-0" size={20} />
                <span className="text-red-100 text-sm">1-800-786-1000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-yellow-400 shrink-0" size={20} />
                <span className="text-red-100 text-sm">support@innout.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-red-200 text-xs text-center md:text-left">
            © {currentYear} In-N-Out Burgers. All Rights Reserved. Not a real website (Portfolio project).
          </p>
          <div className="flex items-center gap-6 text-xs text-red-200">
            <a href="#" className="hover:text-white">Accessibility</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Logo showText={true} className="mb-4" />
            <p className="font-body text-gray-400 mb-6 max-w-md">
              Elysian Build creates extraordinary luxury homes for discerning clients throughout Connecticut and beyond, transcending the ordinary with sophisticated design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-white hover:text-black transition-colors duration-300 rounded-full flex items-center justify-center">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-white hover:text-black transition-colors duration-300 rounded-full flex items-center justify-center">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-white hover:text-black transition-colors duration-300 rounded-full flex items-center justify-center">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-white hover:text-black transition-colors duration-300 rounded-full flex items-center justify-center">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-heading text-lg mb-4 tracking-wide">SERVICES</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="font-body hover:text-brand-primary transition-colors">Custom Home Design</a></li>
              <li><a href="#" className="font-body hover:text-brand-primary transition-colors">Luxury Construction</a></li>
              <li><a href="#" className="font-body hover:text-brand-primary transition-colors">Spa & Wellness Suites</a></li>
              <li><a href="#" className="font-body hover:text-brand-primary transition-colors">Wellness & Recreation</a></li>
              <li><a href="#" className="font-body hover:text-brand-primary transition-colors">Renovations</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4 tracking-wide">CONTACT</h4>
            <div className="space-y-2 text-gray-400">
              <div>123 Luxury Lane</div>
              <div>Greenwich, CT 06830</div>
              <div className="pt-2">
                <div>+1 (203) 555-0123</div>
                <div>info@elysianbuild.com</div>
              </div>
              <div className="pt-2">
                <div>Mon-Fri: 8AM-6PM</div>
                <div>Sat: 9AM-4PM</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Areas */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-lg mb-4 tracking-wide">SERVICE AREAS</h4>
          <div className="text-gray-400 text-sm">
            Greenwich • Westport • New Canaan • Darien • Stamford • Ridgefield • Wilton • Fairfield • Norwalk • Cos Cob
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Elysian Build. All rights reserved.
          </div>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
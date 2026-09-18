import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#1f130c] text-stone-300 pt-16 pb-12 border-t border-amber-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white tracking-tight block">
                  Urban Brew Café
                </span>
                <span className="text-xs text-amber-400/90 tracking-wider uppercase font-medium">
                  Crossings Republik • Ghaziabad
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              An artisanal neighborhood café serving single-origin coffees, wholesome breakfast bowls, and comforting snacks in a warm, welcoming atmosphere.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Urban Brew Café Instagram"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-amber-600 hover:text-white flex items-center justify-center transition-colors text-stone-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Urban Brew Café Facebook"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-amber-600 hover:text-white flex items-center justify-center transition-colors text-stone-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Crossings+Republik+Ghaziabad+Uttar+Pradesh+India"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Urban Brew Café on Google Maps"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-amber-600 hover:text-white flex items-center justify-center transition-colors text-stone-300"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, 'home')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Our Story & Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleNavClick(e, 'menu')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Full Food & Coffee Menu
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleNavClick(e, 'why-us')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleNavClick(e, 'gallery')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Visual Gallery
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => handleNavClick(e, 'location')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Location & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Opening Hours */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Opening Hours
            </h4>
            <div className="text-sm space-y-2 text-stone-400">
              <p className="text-stone-200 font-semibold">Monday – Sunday</p>
              <p className="text-amber-400 font-medium">8:00 AM – 10:30 PM</p>
              <p className="text-xs pt-1 text-stone-500">
                Open on all public holidays & weekends.
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Visit Us
            </h4>
            <div className="text-sm space-y-3 text-stone-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <span>Shop 14-16, Ground Floor, Central Plaza, Crossings Republik, Ghaziabad, UP 201016</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:hello@urbanbrewcafe.in" className="hover:text-white transition-colors">
                  hello@urbanbrewcafe.in
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Portfolio Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Urban Brew Café, Ghaziabad. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Portfolio Project Sample</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

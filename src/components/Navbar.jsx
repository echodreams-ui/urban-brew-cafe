import { useState, useEffect } from 'react';
import { Coffee, Menu as MenuIcon, X, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'menu', 'why-us', 'gallery', 'location', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3'
          : 'bg-[#faf8f5]/80 backdrop-blur-xs py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#2b1810] text-[#f59e0b] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200">
              <Coffee className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="font-heading font-bold text-xl tracking-tight text-[#2b1810] block leading-none">
                Urban Brew Café
              </span>
              <span className="text-[11px] font-medium text-amber-800/80 tracking-wide uppercase">
                Crossings Republik • Ghaziabad
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-[#2b1810] bg-amber-100/70 font-semibold'
                      : 'text-stone-600 hover:text-[#2b1810] hover:bg-stone-100/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Hours Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-1.5 text-xs text-stone-500 bg-stone-100 px-3 py-1.5 rounded-full border border-stone-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open Today • 8:00 AM – 10:30 PM</span>
            </div>

            <a
              id="nav-explore-menu-btn"
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-[#2b1810] text-amber-50 hover:bg-[#3d2317] active:scale-95 transition-all shadow-xs"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-nav-cta-quick"
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#2b1810] text-amber-100"
            >
              Menu
            </a>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed inset-x-0 top-[60px] bg-[#faf8f5] border-b border-stone-200 shadow-xl px-4 py-6 max-h-[calc(100vh-60px)] overflow-y-auto"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-3 py-2 bg-amber-50/80 rounded-xl border border-amber-200/60 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="text-xs font-medium text-amber-900">
                Open Daily: 8:00 AM – 10:30 PM • Ghaziabad
              </p>
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-amber-100 text-[#2b1810] font-semibold'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-stone-200 flex flex-col gap-2.5">
              <a
                id="mobile-drawer-menu-cta"
                href="#menu"
                onClick={(e) => handleNavClick(e, '#menu')}
                className="w-full py-3 rounded-xl text-center font-semibold bg-[#2b1810] text-amber-100 flex items-center justify-center gap-2"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>

              <a
                id="mobile-drawer-directions-cta"
                href="https://www.google.com/maps/search/?api=1&query=Crossings+Republik+Ghaziabad+Uttar+Pradesh+India"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl text-center font-semibold border border-stone-300 text-stone-800 hover:bg-stone-100 flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { Coffee, MapPin, Sparkles, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
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
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#faf8f5] via-[#f5efe6]/60 to-[#faf8f5]"
    >
      {/* Subtle decorative background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-amber-200/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 text-xs sm:text-sm font-medium mb-6 shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open Today • 8:00 AM – 10:30 PM</span>
              <span className="text-amber-400">•</span>
              <span className="flex items-center gap-1 font-semibold text-[#2b1810]">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                Crossings Republik, Ghaziabad
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#2b1810] leading-[1.1] mb-6">
              Good Coffee. <br />
              Great Food. <br />
              <span className="text-amber-800 relative inline-block">
                Better Moments.
                <span className="absolute left-0 bottom-1 w-full h-2 bg-amber-300/40 -z-10 rounded-sm"></span>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed mb-8">
              Freshly prepared food, handcrafted beverages and a cozy space to meet, work and relax in Ghaziabad. Savor single-origin coffees, wholesome breakfast toasts, and artisan desserts in a warm, welcoming neighborhood atmosphere.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                id="hero-explore-menu-btn"
                href="#menu"
                onClick={(e) => handleScrollTo(e, 'menu')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold bg-[#2b1810] text-amber-50 hover:bg-[#3d2317] hover:shadow-md active:scale-98 transition-all duration-200"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>

              <a
                id="hero-visit-us-btn"
                href="#location"
                onClick={(e) => handleScrollTo(e, 'location')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold border-2 border-stone-300 bg-white text-stone-800 hover:border-[#2b1810] hover:text-[#2b1810] hover:bg-stone-50 active:scale-98 transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-amber-700" />
                <span>Visit Us</span>
              </a>
            </div>

            {/* Value Highlights Pill Row */}
            <div className="pt-6 border-t border-stone-200/80 w-full grid grid-cols-3 gap-3 max-w-lg">
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg sm:text-xl text-[#2b1810]">100%</span>
                <span className="text-xs text-stone-500 font-medium">Arabica Beans</span>
              </div>
              <div className="flex flex-col border-l border-stone-200 pl-3">
                <span className="font-heading font-bold text-lg sm:text-xl text-[#2b1810]">Fresh</span>
                <span className="text-xs text-stone-500 font-medium">Made to Order</span>
              </div>
              <div className="flex flex-col border-l border-stone-200 pl-3">
                <span className="font-heading font-bold text-lg sm:text-xl text-[#2b1810]">200 Mbps</span>
                <span className="text-xs text-stone-500 font-medium">High-Speed Wi-Fi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative backplate */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-600/10 via-amber-700/10 to-transparent -rotate-2 scale-98 blur-xs -z-10"></div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-4/5 sm:aspect-3/4 object-cover bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                  alt="Artisanal Latte and Warm Croissant at Urban Brew Café Ghaziabad"
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-500"
                  loading="eager"
                />

                {/* Gradient vignette for readability of bottom content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

                {/* Floating Badge Bottom Right */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-stone-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                      <Coffee className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-900 uppercase tracking-wider">
                        Signature Brew
                      </p>
                      <p className="text-sm font-bold text-stone-900 font-heading">
                        Vietnamese Cold Coffee
                      </p>
                    </div>
                  </div>
                  <span className="font-heading font-bold text-base text-[#2b1810] bg-stone-100 px-2.5 py-1 rounded-md">
                    ₹189
                  </span>
                </div>
              </div>

              {/* Top Floating Badge */}
              <div className="hidden sm:flex absolute -top-4 -left-4 bg-[#2b1810] text-amber-50 px-3.5 py-2 rounded-xl shadow-md items-center gap-2 border border-amber-900/50">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold tracking-wide">Ghaziabad's Cozy Corner</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

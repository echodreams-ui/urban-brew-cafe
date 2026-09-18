import { Heart, Sparkles, Coffee, BookOpen, Utensils, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with natural warm styling */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100 aspect-4/3 sm:aspect-16/11">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                alt="Cozy sunlit interior of Urban Brew Café in Crossings Republik, Ghaziabad"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Bottom tag inside image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/60 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-amber-900 tracking-wide uppercase">
                    Our Third Place
                  </p>
                  <p className="text-sm font-medium text-stone-800">
                    Crossings Republik, Ghaziabad
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Walk-ins Welcome
                </span>
              </div>
            </div>

            {/* Subtle floating quote card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 max-w-xs bg-[#2b1810] text-amber-50 p-4 rounded-2xl shadow-xl border border-amber-950/40">
              <p className="text-xs italic text-stone-300 leading-relaxed">
                “We built Urban Brew to be the space we always wished existed in Ghaziabad—unrushed, soulful, and grounded in good taste.”
              </p>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-md w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              Our Story & Philosophy
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2b1810] tracking-tight mb-5 leading-tight">
              A Neighborhood Space Built for Coffee Lovers & Quiet Thinkers
            </h2>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-4">
              Urban Brew Café was born out of a simple desire: to bring honest specialty coffee culture and a thoughtfully designed gathering place to Crossings Republik, Ghaziabad. We wanted a sanctuary that sits comfortably between home and work.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
              Our coffee program is built on single-origin Arabica beans sourced directly from responsible estates in Chikmagalur, Karnataka. Every shot is weighed, timed, and extracted with meticulous care. In our kitchen, there are no industrial frozen shortcuts—our sourdough sandwiches, loaded platters, and decadent baked goods are freshly prepared to order using wholesome, genuine ingredients.
            </p>

            {/* Key Philosophies List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-stone-800">Freshly ground beans per cup</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-stone-800">100% made-from-scratch kitchen</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-stone-800">Ergonomic seating & plug points</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-stone-800">Calm acoustic background vibes</span>
              </div>
            </div>

            {/* Factual, realistic stat-style callout (no exaggerated claims) */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs">
              <div className="text-center">
                <p className="font-heading font-bold text-lg sm:text-xl text-[#2b1810]">
                  Freshly Prepared
                </p>
                <p className="text-xs text-stone-500 mt-0.5">
                  Cooked to Order
                </p>
              </div>
              <div className="text-center border-x border-stone-200 px-2">
                <p className="font-heading font-bold text-lg sm:text-xl text-amber-800">
                  Locally Loved
                </p>
                <p className="text-xs text-stone-500 mt-0.5">
                  Ghaziabad Community
                </p>
              </div>
              <div className="text-center">
                <p className="font-heading font-bold text-lg sm:text-xl text-[#2b1810]">
                  Student Friendly
                </p>
                <p className="text-xs text-stone-500 mt-0.5">
                  Study & Chill Hub
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

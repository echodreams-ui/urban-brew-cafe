import { MapPin, Clock, Phone, Navigation, Car, Wifi, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Location() {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Crossings+Republik+Ghaziabad+Uttar+Pradesh+India';

  return (
    <section id="location" className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-md mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            Visit Our Café
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#2b1810] tracking-tight mb-4">
            Find Us in Crossings Republik
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Conveniently situated in Ghaziabad with ample parking, easy road connectivity, and welcoming spaces for remote workers, friends, and families.
          </p>
        </div>

        {/* Location & Hours Card Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Key Details Card */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-3xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#2b1810] mb-1">
                    Urban Brew Café
                  </h3>
                  <p className="text-stone-700 font-medium text-base">
                    Shop 14-16, Ground Floor, Central Plaza
                  </p>
                  <p className="text-stone-500 text-sm">
                    Crossings Republik, Ghaziabad
                  </p>
                  <p className="text-stone-500 text-sm">
                    Uttar Pradesh 201016, India
                  </p>
                </div>
              </div>

              {/* Opening Hours Block */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading font-bold text-lg text-[#2b1810]">
                      Opening Hours
                    </h3>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      Open Today
                    </span>
                  </div>
                  <p className="text-stone-700 font-semibold text-sm">
                    Monday – Sunday
                  </p>
                  <p className="text-stone-600 text-sm">
                    8:00 AM – 10:30 PM (All 7 Days)
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Kitchen last order at 10:00 PM
                  </p>
                </div>
              </div>

              {/* Direct Phone & Contact Block */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#2b1810] mb-1">
                    Table Reservations & Takeaway
                  </h3>
                  <a
                    href="tel:+919876543210"
                    className="text-amber-900 font-bold text-base hover:underline block"
                  >
                    +91 98765 43210
                  </a>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Call or WhatsApp for group tables and pre-orders
                  </p>
                </div>
              </div>

            </div>

            {/* Action Button: Get Directions */}
            <div className="pt-8 mt-6 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                id="location-get-directions-btn"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-[#2b1810] text-amber-50 hover:bg-[#3d2317] active:scale-98 transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" />
              </a>

              <a
                id="location-call-btn"
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold border border-stone-300 text-stone-800 hover:bg-stone-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-800" />
                <span>Call Café</span>
              </a>
            </div>
          </div>

          {/* Right: Visual Stylized Map / Area Card (No external API needed) */}
          <div className="lg:col-span-6 bg-[#2b1810] text-amber-50 p-7 sm:p-9 rounded-3xl border border-amber-950/50 shadow-md flex flex-col justify-between relative overflow-hidden">
            
            {/* Background ambient pattern */}
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold mb-6 border border-white/10">
                <span>Neighborhood Guide</span>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
                Getting Here Is Simple
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                Located right in the heart of Crossings Republik with direct access from NH-24 / Delhi-Meerut Expressway. Just 10 minutes from ABES Engineering College and IMS Ghaziabad.
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Ample Designated Parking</p>
                    <p className="text-xs text-stone-300">Dedicated space for two-wheelers & four-wheelers</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                    <Wifi className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Indoor AC & Outdoor Patio</p>
                    <p className="text-xs text-stone-300">Choose between cozy climate-controlled seats or fresh air</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Safe & Well-Lit Surroundings</p>
                    <p className="text-xs text-stone-300">Peaceful family-friendly plaza with 24/7 security</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Clean Map Card Preview */}
            <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600/30 text-amber-400 flex items-center justify-center font-bold font-heading">
                  UB
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Urban Brew Café</p>
                  <p className="text-[11px] text-stone-400">Crossings Republik • 4.8 ★★★★★ (Local Favorite)</p>
                </div>
              </div>
              <a
                id="location-map-view-link"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                View Map
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

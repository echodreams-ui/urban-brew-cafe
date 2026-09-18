import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/galleryData.js';
import { Camera, X, Maximize2, Tag } from 'lucide-react';

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#f7f4ef]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-widest bg-amber-100/80 px-3 py-1 rounded-md mb-3">
            <Camera className="w-3.5 h-3.5 text-amber-700" />
            Moments & Moods
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#2b1810] tracking-tight mb-4">
            A Glimpse Into Urban Brew
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            From golden morning pours to late afternoon work sessions, explore our sunlit spaces, handcrafted plates, and the people that bring it to life.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-stone-200 cursor-pointer shadow-2xs hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top Tag */}
              <div className="absolute top-3.5 left-3.5">
                <span className="text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                  {item.category}
                </span>
              </div>

              {/* Click to Expand Hint Icon */}
              <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs text-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-white/20">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-200">
                <p className="font-heading font-bold text-lg text-white mb-1 leading-snug">
                  {item.title}
                </p>
                <p className="text-xs text-stone-300 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Lightbox Modal */}
        {selectedPhoto && (
          <div
            id="gallery-lightbox-modal"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-[#1c1917] rounded-2xl overflow-hidden shadow-2xl border border-stone-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white/90 hover:bg-black flex items-center justify-center transition-colors border border-white/20"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-16/10 bg-black overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 sm:p-6 bg-[#2b1810] text-amber-50 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                    {selectedPhoto.category} • {selectedPhoto.tag}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-white">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-1">
                    {selectedPhoto.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-stone-800 text-stone-200 hover:bg-stone-700 border border-stone-700 whitespace-nowrap"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

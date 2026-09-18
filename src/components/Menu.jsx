import { useState, useMemo } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData.js';
import { Search, Sparkles, Coffee, Heart, Check, Info } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietFilter, setDietFilter] = useState('all'); // 'all', 'veg', 'non-veg'
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

      // Diet match
      let matchesDiet = true;
      if (dietFilter === 'veg') matchesDiet = item.isVeg === true;
      if (dietFilter === 'non-veg') matchesDiet = item.isVeg === false;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [activeCategory, dietFilter, searchQuery]);

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#f7f4ef]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-widest bg-amber-100/80 px-3 py-1 rounded-md mb-3">
            <Coffee className="w-3.5 h-3.5 text-amber-700" />
            Handcrafted Selection
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#2b1810] tracking-tight mb-4">
            Our Artisanal Menu
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Freshly pulled espresso, all-day wholesome breakfast plates, and savory snacks prepared to order with fine ingredients. Prices inclusive of all taxes.
          </p>
        </div>

        {/* Controls Bar: Category Tabs, Dietary Filter, and Search */}
        <div className="space-y-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {MENU_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  id={`menu-cat-btn-${category.id}`}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#2b1810] text-amber-50 shadow-md scale-100'
                      : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Secondary Sub-bar: Dietary and Quick Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-stone-200/90 shadow-2xs">
            
            {/* Veg / Non-Veg Toggle Filter */}
            <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl">
              <button
                id="filter-all-btn"
                type="button"
                onClick={() => setDietFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  dietFilter === 'all'
                    ? 'bg-white text-[#2b1810] shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All Diets
              </button>

              <button
                id="filter-veg-btn"
                type="button"
                onClick={() => setDietFilter('veg')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  dietFilter === 'veg'
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-300 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-xs border border-emerald-600 flex items-center justify-center p-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                </span>
                <span>Pure Veg</span>
              </button>

              <button
                id="filter-nonveg-btn"
                type="button"
                onClick={() => setDietFilter('non-veg')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  dietFilter === 'non-veg'
                    ? 'bg-rose-50 text-rose-900 border border-rose-300 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-xs border border-rose-600 flex items-center justify-center p-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                </span>
                <span>Non-Veg</span>
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="menu-search-input"
                type="text"
                placeholder="Search coffee, bowls, pasta..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:bg-white text-stone-800 placeholder-stone-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                id={`menu-card-${item.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Item Image with Badges */}
                  <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                    {/* Veg / Non-Veg Indian Restaurant Symbol */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs p-1.5 rounded-md shadow-xs flex items-center justify-center">
                      <span
                        className={`w-3 h-3 rounded-xs border-2 flex items-center justify-center ${
                          item.isVeg ? 'border-emerald-600' : 'border-rose-600'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                          }`}
                        ></span>
                      </span>
                    </div>

                    {/* Badge */}
                    {item.badge && (
                      <div className="absolute top-3 right-3 bg-[#2b1810]/90 backdrop-blur-xs text-amber-300 text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full border border-amber-500/30 flex items-center gap-1 shadow-xs">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>{item.badge}</span>
                      </div>
                    )}
                  </div>

                  {/* Item Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-heading font-bold text-lg text-[#2b1810] group-hover:text-amber-900 transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-heading font-bold text-lg text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200/80 shrink-0">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer note */}
                <div className="px-5 pb-4 pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                  <span className="capitalize">{item.category}</span>
                  <span className="text-amber-800 font-medium group-hover:underline flex items-center gap-1">
                    Freshly Prepared
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
            <p className="text-stone-500 text-base mb-2">No menu items found matching your filter.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setDietFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#2b1810] text-amber-100 text-sm font-semibold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Chef's Note Banner */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-200/80 text-amber-900 flex items-center justify-center shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#2b1810]">
                Looking for Vegan or Oat-Milk options?
              </p>
              <p className="text-xs text-stone-600">
                All our coffees can be prepared with almond or oat milk upon request at no extra fuss.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/919876543210?text=Hi%20Urban%20Brew%20Café,%20I'd%20like%20to%20know%20about%20your%20dairy-free%20options"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-amber-900 bg-white px-4 py-2 rounded-xl border border-amber-300 hover:bg-amber-100 transition-colors whitespace-nowrap shadow-2xs"
          >
            Ask Barista on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}

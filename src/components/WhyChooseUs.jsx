import { UtensilsCrossed, Coffee, Laptop, GraduationCap, Wifi, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: UtensilsCrossed,
      title: 'Freshly Prepared',
      description: 'Every dish and bakery item is prepared from scratch to order using pure dairy butter, fresh produce, and zero artificial preservatives.'
    },
    {
      icon: Coffee,
      title: 'Handcrafted Coffee',
      description: '100% single-origin Arabica beans roasted with precision in Chikmagalur and freshly dialed-in every morning by our head baristas.'
    },
    {
      icon: Laptop,
      title: 'Cozy Workspace',
      description: 'Designed for focus with plush cushioned seating, dedicated individual power outlets at every booth, and comfortable warm lighting.'
    },
    {
      icon: GraduationCap,
      title: 'Student Friendly',
      description: 'Generous table space for group assignments, pocket-friendly snack combos, and a welcoming, supportive neighborhood environment.'
    },
    {
      icon: Wifi,
      title: 'Free High-Speed Wi-Fi',
      description: 'Reliable fiber internet with seamless 200+ Mbps bandwidth for effortless video conferences, remote sprints, or uninterrupted streaming.'
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-md mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            The Urban Brew Difference
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#2b1810] tracking-tight mb-4">
            Why Ghaziabad Chooses Us
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Whether you are dropping in for a morning espresso, catching up with friends after college, or finishing a deadline, we take care of the details.
          </p>
        </div>

        {/* 5 Features Grid: 3 in top row, 2 in bottom row centered on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.slice(0, 3).map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                id={`feature-item-${idx + 1}`}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100/80 text-amber-900 flex items-center justify-center mb-5">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#2b1810] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mt-6">
          {features.slice(3, 5).map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx + 3}
                id={`feature-item-${idx + 4}`}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100/80 text-amber-900 flex items-center justify-center mb-5">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#2b1810] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

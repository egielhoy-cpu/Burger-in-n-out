import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data/menu';
import MenuCard from '../components/MenuCard';
import CTASection from '../components/CTASection';

const CATEGORIES = ['All', 'Burgers', 'Fries', 'Drinks', 'Secret Menu'] as const;

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div id="menu-page">
      {/* Header */}
      <section className="bg-red-600 pt-32 pb-20 px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <span className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4 block underline decoration-white decoration-2 underline-offset-8">Quality Since 1948</span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
            Our <span className="italic">Simple</span> Menu
          </h1>
          <p className="text-red-50 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            We've kept our menu simple because we believe in doing a few things exceptionally well.
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 bg-white z-40 border-b shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex justify-center min-w-max gap-4 md:gap-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-red-600 text-white shadow-lg scale-105' 
                    : 'text-gray-500 hover:text-red-600 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-20 min-h-[600px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl font-medium italic">More delicious items coming soon...</p>
            </div>
          )}
        </div>
      </section>

      {/* Secret Menu Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <div className="bg-yellow-400 rounded-[3rem] p-12 md:p-20 shadow-xl border-4 border-red-600 rotate-1">
              <h2 className="text-4xl md:text-6xl font-black text-red-900 uppercase tracking-tighter mb-6 leading-none">
                Looking for <br/><span className="italic underline decoration-red-600">Something More?</span>
              </h2>
              <p className="text-xl text-red-800 mb-8 font-bold">
                Ask about our "Not-So-Secret" menu items next time you visit. <br className="hidden md:block"/> From Grilled Cheese to 4x4s, we've got you covered.
              </p>
              <button className="bg-red-600 text-white px-12 py-4 rounded-full font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg hover:shadow-2xl">
                Explore Secret Menu
              </button>
           </div>
        </div>
      </section>

      <CTASection 
        title="Find Your Flavor"
        subtitle="Locations across CA, NV, AZ, UT, TX, CO, and OR. Find your nearest In-N-Out."
        buttonText="View Locations"
        variant="white"
      />
    </div>
  );
}

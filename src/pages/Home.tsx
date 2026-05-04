import { motion } from 'motion/react';
import { ArrowRight, MapPin, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import MenuCard from '../components/MenuCard';
import CTASection from '../components/CTASection';
import { MENU_ITEMS, TESTIMONIALS } from '../data/menu';

export default function Home() {
  const featuredItems = MENU_ITEMS.slice(0, 3);

  return (
    <div id="home-page">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-red-600">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
           <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="border border-white/20"></div>
              ))}
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none uppercase tracking-tighter mb-6">
                Quality <span className="text-yellow-400 italic">You Can</span> Taste®
              </h1>
              <p className="text-xl md:text-2xl text-red-50 font-medium mb-10 max-w-xl leading-relaxed">
                Fresh meat. Fresh produce. No microwaves. No heat lamps. Just the same quality burgers we've been serving since 1948.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/locations">
                  <Button variant="secondary" className="w-full sm:w-auto text-lg py-5">
                    Find a Location
                    <MapPin size={20} />
                  </Button>
                </Link>
                <Link to="/menu">
                  <Button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-lg py-5 shadow-none">
                    View Full Menu
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative hidden lg:block"
            >
              {/* Main Burger Image */}
              <div className="relative z-10 w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop" 
                  alt="Double-Double Burger" 
                  className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Accents */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 bg-yellow-400 p-4 rounded-3xl shadow-2xl z-20 rotate-12 hidden xl:block"
              >
                <span className="font-black text-red-900 uppercase">Double-Double®</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-0 bg-white p-4 rounded-3xl shadow-2xl z-20 -rotate-6 hidden xl:block"
              >
                <span className="font-black text-red-600 uppercase">Fresh Since 1948</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Featured Menu */}
      <section className="py-24 bg-gray-50" id="featured-menu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4">
            <div>
              <span className="text-red-600 font-black uppercase tracking-widest text-sm mb-2 block">Our Classics</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none">
                Featured <span className="text-red-600">Menu</span>
              </h2>
            </div>
            <Link to="/menu" className="flex items-center gap-2 text-gray-600 font-bold hover:text-red-600 transition-colors uppercase tracking-widest text-sm">
              See the full menu <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 bg-white overflow-hidden" id="brand-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square">
                 <img 
                    src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1200&auto=format&fit=crop" 
                    alt="Our Legacy" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                 />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-10 -right-10 bg-yellow-400 w-48 h-48 rounded-full flex flex-col items-center justify-center shadow-xl z-20 border-8 border-white p-4 text-center">
                <span className="text-red-900 font-black text-3xl leading-none">75+</span>
                <span className="text-red-900 font-bold text-xs uppercase tracking-widest">Years of<br/>Tradition</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-red-600 font-black uppercase tracking-widest text-sm mb-4 block underline decoration-yellow-400 decoration-4 underline-offset-8">Our Heritage</span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter mb-8 leading-[0.9]">
                Quality You <br/>Can Taste®
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  In-N-Out Burger was founded by Harry and Esther Snyder in 1948. It was Southern California's first drive-thru hamburger stand.
                </p>
                <p>
                  Today, we maintain the same principles: use only the freshest ingredients, serve them with a smile, and focus on one thing—making the best burger possible.
                </p>
                <p className="font-bold text-gray-900">
                  No microwaves, no heat lamps, and no freezers. Ever.
                </p>
              </div>
              <div className="mt-10">
                <Link to="/about">
                  <Button variant="outline" className="px-10">Read Our Full Story</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-24 bg-red-50" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-4">
            Loved By <span className="text-red-600 italic">Fans</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">
            Hear from our community of burger enthusiasts about why they keep coming back.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-red-100 flex flex-col items-center text-center"
              >
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
                </div>
                <p className="text-gray-700 italic mb-8 leading-relaxed">"{t.comment}"</p>
                <div className="mt-auto">
                  <p className="font-black text-red-600 uppercase tracking-widest text-sm">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Search CTA */}
      <section className="py-24 bg-white" id="near-you">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] overflow-hidden relative min-h-[400px] flex items-center shadow-2xl">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 opacity-40">
              <img 
                src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1200&auto=format&fit=crop" 
                alt="Find Us" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="relative z-10 p-12 md:p-20 w-full md:w-2/3">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                Craving <br/><span className="text-yellow-400 italic">Fresh?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 font-medium">
                With locations across the West, there's always an In-N-Out right around the corner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder="Enter Zip Code or City"
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg w-full"
                />
                <Button variant="secondary" className="px-10 py-4 text-lg">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <CTASection 
        title="Hungry Yet?"
        subtitle="Come experience the quality that has made us a legend for over 75 years. Your burger is waiting."
        buttonText="Order Now"
        variant="red"
      />
    </div>
  );
}

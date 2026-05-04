import { motion } from 'motion/react';
import Button from '../components/Button';
import { ShoppingBag, Star, Heart } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: "Signature Red T-Shirt", price: "$24.95", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "Vintage Dad Hat", price: "$18.95", image: "https://images.unsplash.com/photo-1588850661440-449bc96bc633?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, name: "Quality Hoodie", price: "$44.95", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "Limited Edition Mug", price: "$12.95", image: "https://images.unsplash.com/photo-1514228742587-6b1558fbed20?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, name: "Beach Towel", price: "$29.95", image: "https://images.unsplash.com/photo-1528642463366-4d37b6058079?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, name: "Trucker Hat", price: "$19.95", image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=1000&auto=format&fit=crop" },
];

export default function MerchandisePage() {
  return (
    <div id="merch-page">
      <section className="bg-white pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600 hidden lg:block -skew-x-12 translate-x-32 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-red-600 font-black uppercase tracking-widest text-sm mb-4 block underline decoration-yellow-400 decoration-4 underline-offset-8">Featured Items</span>
            <h1 className="text-6xl md:text-9xl font-black text-gray-900 uppercase tracking-tighter leading-[0.8] mb-8">
              Fresh <br/><span className="text-red-600 italic">Style</span>
            </h1>
            <p className="text-gray-500 font-medium text-xl max-w-md mb-10 leading-relaxed">
              Show your love for the legend with our exclusive collection of apparel and gear.
            </p>
            <Button variant="secondary" className="px-12 py-5 text-lg">Shop Full Catalog</Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4 pt-12">
                <div className="bg-gray-100 rounded-3xl aspect-[3/4] overflow-hidden shadow-xl">
                   <img src={PRODUCTS[0].image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="bg-yellow-400 rounded-3xl aspect-square p-8 flex flex-col items-center justify-center text-center shadow-lg">
                   <Star size={40} className="text-red-900 mb-4" />
                   <p className="font-black text-red-900 uppercase tracking-tight leading-none text-xl transition-transform hover:scale-110">Collector's Series</p>
                </div>
             </div>
             <div className="space-y-4">
                <div className="bg-red-600 rounded-3xl aspect-square p-8 flex flex-col items-center justify-center text-center shadow-lg">
                   <Heart size={40} className="text-white mb-4" />
                   <p className="font-black text-white uppercase tracking-tight leading-none text-xl">Fan Favorites</p>
                </div>
                <div className="bg-gray-100 rounded-3xl aspect-[3/4] overflow-hidden shadow-xl">
                   <img src={PRODUCTS[1].image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none">Latest Arrivals</h2>
            <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
               <button className="px-6 py-2 bg-red-600 text-white rounded-xl font-black uppercase text-xs">Apparel</button>
               <button className="px-6 py-2 text-gray-400 font-bold uppercase text-xs">Accessories</button>
               <button className="px-6 py-2 text-gray-400 font-bold uppercase text-xs">Gifts</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((p, i) => (
              <motion.div 
                 key={p.id}
                 whileHover={{ y: -10 }}
                 className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col h-full"
              >
                <div className="aspect-square bg-gray-100 relative group overflow-hidden">
                   <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                   <button className="absolute bottom-6 right-6 p-4 bg-white rounded-full shadow-lg text-red-600 hover:bg-red-600 hover:text-white transition-all">
                      <ShoppingBag size={24} />
                   </button>
                </div>
                <div className="p-8">
                   <h3 className="text-xl font-black text-gray-900 uppercase mb-2 leading-none">{p.name}</h3>
                   <p className="text-red-600 font-black text-2xl">{p.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

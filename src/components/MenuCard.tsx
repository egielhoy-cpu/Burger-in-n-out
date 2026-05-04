import { motion } from 'motion/react';
import { MenuItem } from '../types';
import { Plus } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  key?: string | number;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group flex flex-col h-full"
      id={`menu-card-${item.id}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-black text-red-600 shadow-sm">
          {item.calories}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-black text-gray-900 group-hover:text-red-600 transition-colors uppercase tracking-tight">
            {item.name}
          </h3>
          <span className="text-lg font-black text-red-600">{item.price}</span>
        </div>
        
        <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
          {item.description}
        </p>

        <button className="w-full bg-gray-50 text-gray-800 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all group-hover:shadow-md">
          <Plus size={18} />
          Customize Your Burger
        </button>
      </div>
    </motion.div>
  );
}

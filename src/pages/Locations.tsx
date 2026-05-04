import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Phone, Clock, Navigation, Globe } from 'lucide-react';
import { LOCATIONS } from '../data/menu';
import Button from '../components/Button';

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div id="locations-page">
      {/* Header */}
      <section className="bg-gray-100 pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black text-red-600 uppercase tracking-tighter leading-none mb-4">
              Find Your <br/><span className="text-gray-900 border-b-8 border-yellow-400">In-N-Out</span>
            </h1>
            <p className="text-gray-500 font-medium text-lg max-w-md">
              Fresh burgers are closer than you think. Search by city, state, or zip code.
            </p>
          </div>

          <div className="w-full max-w-lg bg-white p-4 rounded-[2rem] shadow-xl flex items-center gap-4">
             <div className="flex-grow relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter Zip, City, or State..."
                  className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
             </div>
             <Button variant="primary" className="hidden sm:flex rounded-2xl py-4">Search</Button>
          </div>
        </div>
      </section>

      {/* Maps & List Split */}
      <section className="h-[700px] flex flex-col lg:flex-row">
        {/* List Side */}
        <div className="w-full lg:w-2/5 overflow-y-auto bg-white border-r">
          <div className="p-8 space-y-6">
            <h2 className="text-xl font-black uppercase tracking-widest text-gray-900 mb-8 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-600 rounded-lg text-white flex items-center justify-center text-xs">
                {LOCATIONS.length}
              </span> 
              Stores Near You
            </h2>

            {LOCATIONS.map((loc) => (
              <motion.div 
                key={loc.id}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-3xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-black text-gray-900 uppercase group-hover:text-red-600 transition-colors">
                      {loc.city}, {loc.state}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium">{loc.address}</p>
                  </div>
                  <span className="bg-gray-100 text-gray-500 text-[10px] uppercase font-black px-2 py-1 rounded">
                    {loc.distance}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <Clock size={16} className="text-red-600" />
                    <span>{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <Phone size={16} className="text-red-600" />
                    <span>{loc.phone}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                   <button className="bg-red-50 text-red-600 py-3 rounded-xl font-black text-xs uppercase flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all">
                      <Navigation size={14} /> Directions
                   </button>
                   <button className="bg-gray-50 text-gray-600 py-3 rounded-xl font-black text-xs uppercase flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-red-900 transition-all">
                      <Globe size={14} /> Store Info
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Map Side (Placeholder) */}
        <div className="flex-grow bg-gray-200 relative overflow-hidden">
           {/* Google Maps Placeholder Styling */}
           <div className="absolute inset-0 bg-[#E5E3DF] flex items-center justify-center">
              <div className="text-center space-y-4 px-10">
                 <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl mx-auto animate-pulse">
                    <MapPin size={40} className="text-white" />
                 </div>
                 <h2 className="text-3xl font-black text-gray-800 uppercase tracking-tighter">Interactive Map</h2>
                 <p className="text-gray-500 font-medium max-w-sm mx-auto">
                    Map integration active. Loading store markers near {searchQuery || 'your location'}...
                 </p>
                 <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                    <div className="h-2 bg-gray-300 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-300 rounded-full w-3/4"></div>
                 </div>
              </div>
           </div>

           {/* Custom Map UI Controls Overlay */}
           <div className="absolute top-6 right-6 flex flex-col gap-3">
              <button className="bg-white p-3 rounded-xl shadow-lg hover:bg-gray-50 text-gray-700">
                <Navigation size={24} />
              </button>
              <div className="bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">
                <button className="p-3 border-b hover:bg-gray-50 text-gray-700 font-black text-xl">+</button>
                <button className="p-3 hover:bg-gray-50 text-gray-700 font-black text-xl">-</button>
              </div>
           </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic text-red-600">75+ Years of Quality Service</h2>
           <p className="text-gray-400 text-sm max-w-lg mx-auto">
             For over seven decades, our dedication to service has never wavered. We look forward to seeing you at any of our restaurants.
           </p>
        </div>
      </section>
    </div>
  );
}

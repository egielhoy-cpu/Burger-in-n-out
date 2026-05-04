import { motion } from 'motion/react';
import Button from '../components/Button';
import { UserPlus, Star, Award, TrendingUp } from 'lucide-react';

export default function CareersPage() {
  return (
    <div id="careers-page">
      <section className="bg-yellow-400 pt-32 pb-24 px-4 text-center">
        <span className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">Join the Team</span>
        <h1 className="text-5xl md:text-8xl font-black text-red-900 uppercase tracking-tighter mb-6 leading-[0.9]">Start Your <br/>Legendary Career</h1>
        <p className="text-red-900/70 max-w-2xl mx-auto text-xl font-bold">Competitive pay, excellent benefits, and a culture of growth.</p>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop" 
                  alt="Career Growth" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-red-600 text-white p-10 rounded-[2.5rem] shadow-2xl z-10 max-w-xs border-8 border-white">
                <p className="text-3xl font-black uppercase mb-2">Top 5%</p>
                <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Industry Leading Benefits & Wages</p>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">Why Work <br className="hidden md:block"/> At In-N-Out?</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  { icon: <TrendingUp className="text-red-600" />, title: "Growth Opportunities", desc: "Most of our managers started as entry-level associates." },
                  { icon: <Award className="text-red-600" />, title: "Great Pay", desc: "We pride ourselves on paying above industry standards." },
                  { icon: <Star className="text-red-600" />, title: "Flexible Schedule", desc: "We work with you to balance work and your personal life." },
                  { icon: <UserPlus className="text-red-600" />, title: "Family Culture", desc: "Join a supportive team where everyone belongs." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-black text-gray-900 uppercase tracking-wide">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button variant="primary" className="px-10 py-5 text-lg">Apply Online Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white px-4 text-center">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-yellow-400 mb-8 leading-none italic">Quality Service <br/>Starts With You</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Ready to serve quality food with a smile? We're hiring for all shifts and roles.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-6">
               <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-yellow-400 transition-colors shadow-lg">Store Associates</button>
               <button className="bg-red-600 text-white px-10 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-red-700 transition-colors shadow-lg">Management Trainees</button>
            </div>
         </div>
      </section>
    </div>
  );
}

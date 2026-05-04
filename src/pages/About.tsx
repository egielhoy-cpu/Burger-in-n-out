import { motion } from 'motion/react';
import CTASection from '../components/CTASection';

export default function AboutPage() {
  return (
    <div id="about-page">
      <section className="bg-red-600 pt-32 pb-24 px-4 text-center">
        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6">Our Story</h1>
        <p className="text-red-100 max-w-2xl mx-auto text-xl font-medium">Built on heritage, fresh ingredients, and family values since 1948.</p>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <h2 className="text-4xl font-black text-red-600 uppercase tracking-tighter">The Snyder Legacy</h2>
            <p>
              In 1948, Harry Snyder introduced California's first drive-thru hamburger stand in Baldwin Park. Every day before dawn, Harry visited the meat and produce markets to pick out fresh ingredients, which he prepared by hand.
            </p>
            <p>
              Esther Snyder handled the bookkeeping and maintained the standards that would make In-N-Out a legend. They focused on three simple things: quality, cleanliness, and service.
            </p>
            <blockquote className="border-l-8 border-yellow-400 pl-8 py-4 italic font-bold text-2xl text-gray-900 bg-gray-50 rounded-r-3xl">
              "Give customers the freshest, highest quality foods and provide them with friendly service in a sparkling clean environment."
            </blockquote>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
            <img 
               src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop" 
               alt="Traditional Kitchen" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">Our Quality Commitments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "No Microwaves", desc: "Your burger is cooked to order. We don't even own a microwave or heat lamp." },
              { title: "Hand-Leafed", desc: "Our lettuce is hand-leafed, and our tomatoes and onions are sliced by hand every day." },
              { title: "Real American Beef", desc: "Our patties are made from whole-muscle, standard USDA choice chuck. No fillers or preservatives." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-red-100"
              >
                <div className="w-12 h-12 bg-red-600 rounded-2xl mb-6 flex items-center justify-center text-white font-black">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-black text-red-600 uppercase mb-4">{item.title}</h3>
                <p className="text-gray-600 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Be Part Of Our Story"
        subtitle="We're always looking for great people to join the In-N-Out family."
        buttonText="View Careers"
        variant="yellow"
      />
    </div>
  );
}

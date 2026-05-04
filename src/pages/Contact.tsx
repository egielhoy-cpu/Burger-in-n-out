import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import Button from '../components/Button';

export default function ContactPage() {
  return (
    <div id="contact-page">
      <section className="bg-red-600 pt-32 pb-24 px-4 text-center">
        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none">Get In <span className="text-yellow-400">Touch</span></h1>
        <p className="text-red-100 max-w-2xl mx-auto text-xl font-medium italic">We value our customers' feedback more than anything. How can we help you today?</p>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-red-50">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-8 italic">Send Us A Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
                     <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
                     <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="john@example.com" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Subject</label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-red-600 appearance-none">
                     <option>Customer Feedback</option>
                     <option>Order Issue</option>
                     <option>Career Inquiry</option>
                     <option>Media Request</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Your Message</label>
                  <textarea rows={5} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Tell us what's on your mind..."></textarea>
               </div>
               <Button variant="primary" className="w-full py-5 text-lg">
                  Submit Feedback
                  <Send size={20} />
               </Button>
            </form>
          </div>

          <div className="space-y-12 py-10">
             <div>
                <h3 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-10 leading-none">Our Contact <br/>Channels</h3>
                <div className="space-y-8">
                   <div className="flex gap-6 items-center group">
                      <div className="w-16 h-16 bg-yellow-400 rounded-3xl flex items-center justify-center text-red-900 shadow-lg group-hover:rotate-6 transition-transform">
                         <Phone size={28} />
                      </div>
                      <div>
                         <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Call Us Anywhere</p>
                         <p className="text-2xl font-black text-gray-900">1-800-786-1000</p>
                      </div>
                   </div>

                   <div className="flex gap-6 items-center group">
                      <div className="w-16 h-16 bg-red-600 rounded-3xl flex items-center justify-center text-white shadow-lg group-hover:-rotate-6 transition-transform">
                         <Mail size={28} />
                      </div>
                      <div>
                         <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Email Us Directly</p>
                         <p className="text-2xl font-black text-gray-900">support@innout.com</p>
                      </div>
                   </div>

                   <div className="flex gap-6 items-center group">
                      <div className="w-16 h-16 bg-gray-900 rounded-3xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
                         <MessageCircle size={28} />
                      </div>
                      <div>
                         <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Customer Support</p>
                         <p className="text-2xl font-black text-gray-900">Live Chat Available</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
                <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                   <MapPin className="text-red-600" /> Headquarters
                </h4>
                <p className="text-gray-500 font-medium leading-relaxed italic">
                   4199 Campus Drive, 9th Floor <br/>
                   Irvine, CA 92612
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

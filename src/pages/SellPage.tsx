import Navbar from '../components/layout/Navbar';
import { motion } from 'framer-motion';

const SellPage = () => {
  return (
    <div className="min-h-screen bg-premium-cream dark:bg-premium-black">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-premium-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <p className="text-premium-gold uppercase tracking-[0.3em] font-bold mb-4">List Your Property</p>
              <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Your Legacy, Our <span className="italic text-premium-gold">Perspective.</span></h1>
              <p className="text-xl text-gray-300 font-serif italic leading-relaxed mb-8">
                Trust the world's leading real estate experts to bring your property to global prominence. We provide an unparalleled level of exposure and bespoke marketing strategies for the world's most distinguished homes.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="border-l-2 border-premium-gold pl-6">
                  <h4 className="text-3xl font-serif mb-1 uppercase tracking-widest text-white">$2.4B</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Annual Sales Volume</p>
                </div>
                <div className="border-l-2 border-premium-gold pl-6">
                  <h4 className="text-3xl font-serif mb-1 uppercase tracking-widest text-white">140+</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Countries Reached</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-white dark:bg-premium-charcoal p-12 shadow-2xl rounded-sm border border-gray-50 dark:border-gray-800">
              <h3 className="text-3xl font-serif mb-8">Request a Valuation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input type="text" placeholder="First Name" className="w-full bg-gray-50 dark:bg-premium-black border border-gray-100 dark:border-gray-700 px-4 py-3 outline-none focus:border-premium-gold font-medium placeholder-black" />
                  </div>
                  <div>
                    <input type="text" placeholder="Last Name" className="w-full bg-gray-50 dark:bg-premium-black border border-gray-100 dark:border-gray-700 px-4 py-3 outline-none focus:border-premium-gold font-medium placeholder-black" />
                  </div>
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full bg-gray-50 dark:bg-premium-black border border-gray-100 dark:border-gray-700 px-4 py-3 outline-none focus:border-premium-gold font-medium placeholder-black" />
                </div>
                <div>
                  <input type="text" placeholder="Property Address" className="w-full bg-gray-50 dark:bg-premium-black border border-gray-100 dark:border-gray-700 px-4 py-3 outline-none focus:border-premium-gold font-medium placeholder-black" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <select className="w-full bg-gray-50 dark:bg-premium-black border border-gray-100 dark:border-gray-700 px-4 py-3 outline-none focus:border-premium-gold font-medium text-black">
                    <option>Property Type</option>
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>Estate</option>
                  </select>
                  <input type="text" placeholder="Expected Price" className="w-full bg-gray-50 dark:bg-premium-black border border-gray-100 dark:border-gray-700 px-4 py-3 outline-none focus:border-premium-gold font-medium placeholder-black" />
                </div>
                <div>
                  <textarea rows={4} placeholder="Additional Details" className="w-full bg-gray-50 dark:bg-premium-black border border-gray-100 dark:border-gray-700 px-4 py-3 outline-none focus:border-premium-gold resize-none font-medium placeholder-black"></textarea>
                </div>
                <button className="w-full bg-premium-black text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-premium-charcoal transition-all shadow-xl">
                  Submit Submission
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-premium-black text-white overflow-hidden relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-12">"Art is not what you see, but what you make others see."</h2>
            <p className="text-premium-gold uppercase tracking-[0.4em] font-bold">Degas Experience</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SellPage;

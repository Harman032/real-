import Navbar from '../components/layout/Navbar';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-premium-cream dark:bg-premium-black">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" alt="About Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-premium-black/60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-premium-gold uppercase tracking-[0.5em] font-bold mb-4">Our Heritage</p>
            <h1 className="text-6xl md:text-8xl font-serif mb-8">Redefining <span className="italic">Luxury</span></h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=800" alt="Interior" className="w-full h-80 object-cover mt-12" />
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" alt="Villa" className="w-full h-96 object-cover" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-serif mb-8">The Golden Standard of Real Estate.</h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 font-serif leading-relaxed italic">
                <p>Founded on the principle that luxury is not just a price point, but an experience, Golden Estate has been the definitive leader in high-end real estate for over two decades.</p>
                <p>Our bespoke approach combines cutting-edge data analysis with an artist's eye for architectural significance, ensuring that every listing is presented as a masterpiece.</p>
                <p>We don't just sell homes; we curate lifestyles for the world's most discerning individuals.</p>
              </div>
              <div className="mt-12 flex space-x-12">
                <div>
                  <p className="text-4xl font-serif text-premium-gold">20+</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mt-2">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-4xl font-serif text-premium-gold">500+</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mt-2">Luxurious Closings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-24 bg-premium-black text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="mb-12">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200" alt="Founder" className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-premium-gold p-1" />
          </div>
          <h3 className="text-3xl md:text-4xl font-serif italic mb-8">"Our mission is to create a seamless bridge between modern architecture and those who appreciate its soul."</h3>
          <p className="text-premium-gold uppercase tracking-widest font-bold text-sm">— Alexander Golden, Founder</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

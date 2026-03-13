import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import Navbar from '../components/layout/Navbar';
import { motion } from 'framer-motion';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-premium-cream">
        <div className="text-center">
          <h2 className="text-3xl font-serif mb-4">Property Not Found</h2>
          <Link to="/" className="text-premium-gold font-bold border-b border-premium-gold pb-1">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-premium-cream"
    >
      <Navbar />
      
      {/* Hero Gallery */}
      <section className="pt-24 h-[70vh] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src={property.images[0]} 
            alt={property.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-premium-black/20"></div>
        </div>
        
        <div className="container mx-auto px-6 h-full flex items-end pb-12 relative z-10">
          <div className="max-w-4xl text-white">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-block bg-premium-gold px-4 py-1 text-xs font-bold tracking-widest uppercase mb-4">
                {property.type}
              </span>
              <h1 className="text-5xl md:text-7xl font-serif mb-4">{property.title}</h1>
              <p className="text-xl flex items-center opacity-90">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {property.location}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-12 pb-8 border-b border-gray-100">
                <div className="flex space-x-12">
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Price</p>
                    <p className="text-3xl font-serif text-premium-gold">${property.price.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Beds</p>
                    <p className="text-3xl font-serif">{property.beds}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Baths</p>
                    <p className="text-3xl font-serif">{property.baths}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Area</p>
                    <p className="text-3xl font-serif">{property.area} <span className="text-sm">sqft</span></p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-16">
                <h3 className="text-3xl font-serif mb-6">Property Overview</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {property.description} {property.description}
                </p>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-serif mb-8">Key Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {property.features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-gray-700"
                    >
                      <span className="w-2 h-2 bg-premium-gold rounded-full"></span>
                      <span className="font-medium tracking-wide">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-white p-10 border border-gray-100 shadow-2xl rounded-sm">
                <h3 className="text-2xl font-serif mb-6">Inquire About Listing</h3>
                <form className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-gray-50 border border-gray-100 px-4 py-3 outline-none focus:border-premium-gold"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-gray-50 border border-gray-100 px-4 py-3 outline-none focus:border-premium-gold"
                    />
                  </div>
                  <div>
                    <textarea 
                      rows={4}
                      placeholder="How can we help?"
                      className="w-full bg-gray-50 border border-gray-100 px-4 py-3 outline-none focus:border-premium-gold resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-premium-gold text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-premium-gold/90 transition-all">
                    Send Inquiry
                  </button>
                </form>
                <div className="mt-8 pt-8 border-t border-gray-50 text-center">
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">Exclusive Agent</p>
                  <p className="font-serif text-lg italic">Alexander Golden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PropertyDetails;

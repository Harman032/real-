import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import PropertyCard from '../components/ui/PropertyCard';
import type { PropertyType } from '../types';
import { useProperties } from '../hooks/useProperties';

const HomePage = () => {
  const { properties } = useProperties();
  const [searchType, setSearchType] = useState<PropertyType | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<number>(10000000); // Max 10M
  const [minBeds, setMinBeds] = useState<number>(0);

  const filteredProperties = properties.filter(p => {
    const matchesType = searchType === 'All' || p.type === searchType;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         p.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = p.price <= priceRange;
    const matchesBeds = p.beds >= minBeds;
    return matchesType && matchesSearch && matchesPrice && matchesBeds;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-premium-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <p className="text-premium-gold uppercase tracking-[0.3em] font-bold mb-4 animate-fade-in">Exquisite Living Awaits</p>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight">
              Find Your <br /> 
              <span className="italic">Perfect</span> Sanctuary
            </h1>
            
            {/* Advanced Search Bar */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-sm space-y-4 border border-white/20">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input 
                  type="text" 
                  placeholder="Search location or title..." 
                  className="bg-white px-6 py-4 flex-grow outline-none text-premium-black"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select 
                  className="bg-white px-6 py-4 outline-none text-premium-black"
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value as any)}
                >
                  <option value="All">All Types</option>
                  <option value="Villa">Villa</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Plot">Plot</option>
                </select>
              </div>
              
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-white">
                <div className="flex-grow w-full">
                  <label className="block text-xs uppercase tracking-widest font-bold mb-2">Max Price: ${priceRange.toLocaleString()}</label>
                  <input 
                    type="range" 
                    min="100000" 
                    max="10000000" 
                    step="100000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full accent-premium-gold h-1 bg-white/20 appearance-none cursor-pointer"
                  />
                </div>
                <div className="w-full md:w-48">
                  <label className="block text-xs uppercase tracking-widest font-bold mb-2">Min Bedrooms</label>
                  <select 
                    className="bg-white/10 w-full px-4 py-2 outline-none border border-white/20"
                    value={minBeds}
                    onChange={(e) => setMinBeds(parseInt(e.target.value))}
                  >
                    <option value="0" className="text-black">Any</option>
                    <option value="1" className="text-black">1+ Beds</option>
                    <option value="2" className="text-black">2+ Beds</option>
                    <option value="3" className="text-black">3+ Beds</option>
                    <option value="4" className="text-black">4+ Beds</option>
                  </select>
                </div>
                <button className="bg-premium-gold text-white px-10 py-4 font-bold hover:bg-premium-gold/90 transition-all uppercase tracking-widest text-sm w-full md:w-auto">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-premium-cream">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-premium-gold uppercase tracking-widest font-bold mb-2">Our Selection</p>
              <h2 className="text-4xl md:text-5xl font-serif">Featured Estates</h2>
            </div>
            <Link to="/buy" className="text-premium-black border-b-2 border-premium-gold pb-1 font-bold hover:text-premium-gold transition-colors">
              View All Listings
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Elegant CTA */}
      <section className="py-24 premium-gradient text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-4xl mx-auto leading-relaxed">
            Invest in a legacy that speaks of <span className="italic text-premium-gold">timeless elegance</span> and modern luxury.
          </h2>
          <button className="bg-premium-gold text-white px-12 py-5 font-bold hover:bg-premium-gold/90 transition-all uppercase tracking-[0.2em] text-sm">
            Consult a Specialist
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

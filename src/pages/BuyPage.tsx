import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import PropertyCard from '../components/ui/PropertyCard';
import { useProperties } from '../hooks/useProperties';
import type { PropertyType } from '../types';

const BuyPage = () => {
  const { properties } = useProperties();
  const [searchType, setSearchType] = useState<PropertyType | 'All'>('All');
  const [priceRange, setPriceRange] = useState<number>(10000000);
  const [minBeds, setMinBeds] = useState<number>(0);

  const filteredProperties = properties.filter(p => {
    const matchesType = searchType === 'All' || p.type === searchType;
    const matchesPrice = p.price <= priceRange;
    const matchesBeds = p.beds >= minBeds;
    return matchesType && matchesPrice && matchesBeds;
  });

  return (
    <div className="min-h-screen bg-premium-cream dark:bg-premium-black">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-premium-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Exquisite Listings</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-serif italic">Discover our curated collection of luxury properties in the most prestigious locations.</p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-y border-gray-100 dark:bg-premium-black/80 dark:border-gray-800 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 items-center">
            <div className="w-full lg:w-48">
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-400">Property Type</label>
              <select 
                className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 py-2 outline-none focus:border-premium-gold transition-colors text-premium-black dark:text-premium-cream"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value as any)}
              >
                <option value="All">All Properties</option>
                <option value="Villa">Villas</option>
                <option value="Apartment">Apartments</option>
                <option value="Plot">Land Plots</option>
              </select>
            </div>

            <div className="flex-grow w-full">
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-400 font-bold">Max Price: ${priceRange.toLocaleString()}</label>
              <input 
                type="range" 
                min="100000" 
                max="10000000" 
                step="100000"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full accent-premium-gold h-1 bg-gray-200 dark:bg-gray-800 appearance-none cursor-pointer"
              />
            </div>

            <div className="w-full lg:w-48">
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-400">Min Bedrooms</label>
              <select 
                className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 py-2 outline-none focus:border-premium-gold transition-colors text-premium-black dark:text-premium-cream"
                value={minBeds}
                onChange={(e) => setMinBeds(parseInt(e.target.value))}
              >
                <option value="0">Any Bedrooms</option>
                <option value="1">1+ Bedroom</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
            </div>

            <div className="text-gray-400 text-sm italic font-serif">
              {filteredProperties.length} Properties Found
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          {filteredProperties.length === 0 && (
            <div className="text-center py-40">
              <h3 className="text-3xl font-serif text-gray-400 italic">No properties match your criteria.</h3>
              <button 
                onClick={() => {setSearchType('All'); setPriceRange(10000000); setMinBeds(0);}}
                className="mt-6 text-premium-gold font-bold border-b border-premium-gold pb-1"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BuyPage;

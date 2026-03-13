import { Link } from 'react-router-dom';
import type { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="premium-card group overflow-hidden block">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-premium-black/60 backdrop-blur-md text-white px-3 py-1 text-xs uppercase tracking-widest">
          {property.type}
        </div>
        {property.isFeatured && (
          <div className="absolute top-4 right-4 bg-premium-gold text-white px-3 py-1 text-xs uppercase tracking-widest font-bold">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-semibold group-hover:text-premium-gold transition-colors text-premium-black">
            {property.title}
          </h3>
          <p className="text-premium-gold font-bold text-lg">
            ${property.price.toLocaleString()}
          </p>
        </div>
        <p className="text-gray-500 text-sm mb-4 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {property.location}
        </p>
        <div className="flex justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">
          <span className="flex items-center">
            <span className="font-bold text-premium-black mr-1">{property.beds}</span> Beds
          </span>
          <span className="flex items-center">
            <span className="font-bold text-premium-black mr-1">{property.baths}</span> Baths
          </span>
          <span className="flex items-center">
            <span className="font-bold text-premium-black mr-1">{property.area}</span> sqft
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;

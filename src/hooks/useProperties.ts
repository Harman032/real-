import { useState, useEffect } from 'react';
import type { Property } from '../types';
import { properties as initialProperties } from '../data/properties';

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('estate_properties');
    if (saved) {
      setProperties(JSON.parse(saved));
    } else {
      setProperties(initialProperties);
      localStorage.setItem('estate_properties', JSON.stringify(initialProperties));
    }
  }, []);

  const addProperty = (property: Property) => {
    const updated = [property, ...properties];
    setProperties(updated);
    localStorage.setItem('estate_properties', JSON.stringify(updated));
  };

  const deleteProperty = (id: string) => {
    const updated = properties.filter(p => p.id !== id);
    setProperties(updated);
    localStorage.setItem('estate_properties', JSON.stringify(updated));
  };

  const updateProperty = (property: Property) => {
    const updated = properties.map(p => p.id === property.id ? property : p);
    setProperties(updated);
    localStorage.setItem('estate_properties', JSON.stringify(updated));
  };

  return { properties, addProperty, deleteProperty, updateProperty };
};

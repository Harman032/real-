import type { Property } from '../types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'The Golden Crest Villa',
    description: 'A masterpiece of contemporary architecture featuring panoramic ocean views and bespoke interior finishes.',
    price: 4500000,
    location: 'Beverly Hills, CA',
    type: 'Villa',
    beds: 6,
    baths: 8,
    area: 8500,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['Infinity Pool', 'Home Theater', 'Smart Home System', 'Wine Cellar'],
    isFeatured: true
  },
  {
    id: '2',
    title: 'Skyline Penthouse',
    description: 'Experience ultimate luxury in this dual-story penthouse with 360-degree city views and private elevator access.',
    price: 2800000,
    location: 'Manhattan, NY',
    type: 'Apartment',
    beds: 3,
    baths: 4,
    area: 3200,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['Private Elevator', 'Roof Garden', '24/7 Concierge', 'Floor-to-Ceiling Windows'],
    isFeatured: true
  },
  {
    id: '3',
    title: 'Serene Meadow Plot',
    description: 'A vast expanse of untouched beauty, perfect for building your dream estate in the heart of the countryside.',
    price: 950000,
    location: 'Aspen, CO',
    type: 'Plot',
    beds: 0,
    baths: 0,
    area: 43560, // 1 acre
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['Perpetual Water Rights', 'Gated Community', 'Mountain Views'],
    isFeatured: false
  },
  {
    id: '4',
    title: 'The Azure Apartment',
    description: 'Modern minimalist living with high-end appliances and a spacious balcony overlooking the marina.',
    price: 1200000,
    location: 'Miami, FL',
    type: 'Apartment',
    beds: 2,
    baths: 2,
    area: 1600,
    images: [
      'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['Marina View', 'Gym Access', 'Underground Parking'],
    isFeatured: false
  }
];
